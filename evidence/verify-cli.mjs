import {readFile} from 'node:fs/promises';
import {webcrypto} from 'node:crypto';
import {verifyCheckpoint} from './verify.mjs';
try {
  const [data,sig,key] = await Promise.all([
    readFile(new URL('./checkpoint.json',import.meta.url)),
    readFile(new URL('./checkpoint.sig.b64',import.meta.url),'utf8'),
    readFile(new URL('./public-key.pem',import.meta.url),'utf8')
  ]);
  const result=await verifyCheckpoint(data,sig,key,webcrypto.subtle);
  console.log(JSON.stringify(result,null,2));
} catch (e) { console.error('NOT VERIFIED:',e.message); process.exitCode=1; }
