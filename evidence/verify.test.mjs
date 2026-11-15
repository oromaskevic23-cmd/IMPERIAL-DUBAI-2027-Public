import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {webcrypto,generateKeyPairSync} from 'node:crypto';
import {verifyCheckpoint,validateCheckpoint,EXPECTED_FINGERPRINT} from './verify.mjs';
const [data,sig,key]=await Promise.all([
  readFile(new URL('./checkpoint.json',import.meta.url)),
  readFile(new URL('./checkpoint.sig.b64',import.meta.url),'utf8'),
  readFile(new URL('./public-key.pem',import.meta.url),'utf8')
]);
const verify=(d=data,s=sig,k=key)=>verifyCheckpoint(d,s,k,webcrypto.subtle);
const fixture=()=>JSON.parse(data.toString('utf8'));
test('original signed checkpoint verifies',async()=>{const r=await verify();assert.equal(r.verified,true);assert.equal(r.fingerprint,EXPECTED_FINGERPRINT);assert.equal(r.checkpoint.python.passed,133)});
test('altered checkpoint bytes rejected',async()=>{await assert.rejects(verify(Buffer.from(data.toString().replace('133','134'))),/Signature verification failed/)});
test('trailing whitespace tampering rejected',async()=>{await assert.rejects(verify(Buffer.concat([data,Buffer.from(' ')])),/Signature verification failed/)});
test('corrupted signature rejected',async()=>{const b=Buffer.from(sig.trim(),'base64');b[0]^=1;await assert.rejects(verify(data,b.toString('base64')),/Signature verification failed/)});
test('unrelated Ed25519 key rejected',async()=>{const {publicKey}=generateKeyPairSync('ed25519');await assert.rejects(verify(data,sig,publicKey.export({type:'spki',format:'pem'})),/fingerprint/)});
test('malformed signature rejected',async()=>{await assert.rejects(verify(data,'invalid!'),/base64/)});
test('invalid test count rejected by schema',()=>{const d=fixture();d.python.passed=d.python.total+1;assert.throws(()=>validateCheckpoint(d),/test counts/)});
test('cryptographic subset overcount rejected by schema',()=>{const d=fixture();d.ed25519_proof_tests.total=d.python.total+1;assert.throws(()=>validateCheckpoint(d),/subset/)});
test('real payment claim rejected by schema',()=>{const d=fixture();d.synthetic_benchmark.real_payments=1;assert.throws(()=>validateCheckpoint(d),/benchmark/)});
test('removed limitation rejected by schema',()=>{const d=fixture();d.limits.pop();assert.throws(()=>validateCheckpoint(d),/limitations/)});
