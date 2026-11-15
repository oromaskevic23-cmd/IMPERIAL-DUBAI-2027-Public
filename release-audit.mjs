// Public static release integrity audit. No private repository or credentials.
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {verifyCheckpoint} from './evidence/verify.mjs';
import {webcrypto} from 'node:crypto';
export const BASE='https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/';
const RAW='https://raw.githubusercontent.com/oromaskevic23-cmd/IMPERIAL-DUBAI-2027-Public/';
const PATHS=Object.freeze(['index.html','presentation.mjs','scenarios.mjs','evidence/verify.mjs','evidence/checkpoint.json','evidence/checkpoint.sig.b64','evidence/public-key.pem','assets/IMPERIAL-DUBAI-2027.png']);
const IMAGE_SHA='b82495177127e3b59e12b0f67c4a18cbdb00c36d18bfac6815ef7075e0abc3b6';
function check(ok,msg){if(!ok)throw new Error(msg)}
const sha=b=>createHash('sha256').update(b).digest('hex');
export function validateManifest(m){
  check(m?.schema==='imperial-dubai-public-release-v1' && /^[a-f0-9]{40}$/.test(m.source_commit) && /^[a-f0-9]{40}$/.test(m.site_commit),'Invalid manifest identity');
  check(Array.isArray(m.files)&&m.files.length===PATHS.length,'Invalid file count');
  const seen=new Set();
  for(const f of m.files){
    check(PATHS.includes(f.path)&&!seen.has(f.path),'Unexpected or duplicate path');seen.add(f.path);
    check(Number.isSafeInteger(f.bytes)&&f.bytes>0&&f.bytes<=2_000_000&&/^[a-f0-9]{64}$/.test(f.sha256),'Invalid file metadata');
    check(typeof f.mime==='string'&&/^[a-z0-9-]+\/[a-z0-9.+-]+$/.test(f.mime),'Invalid media type');
    if(f.path===PATHS.at(-1))check(f.bytes===1390511&&f.sha256===IMAGE_SHA&&f.mime==='image/png','Original banner identity changed');
  }
  return m;
}
export function verifyBytes(bytes,entry){
  check(bytes.length===entry.bytes,'Length mismatch: '+entry.path);
  check(sha(bytes)===entry.sha256,'SHA-256 mismatch: '+entry.path);
  return true;
}
async function boundedFetch(url,entry,fetcher,live){
  const r=await fetcher(url,{redirect:'error',credentials:'omit',signal:AbortSignal.timeout(12000),headers:{'Cache-Control':'no-cache'}});
  check(r.status===200,'HTTP '+r.status+': '+entry.path);
  if(live)check((r.headers.get('content-type')||'').split(';')[0].trim()===entry.mime,'Media type mismatch: '+entry.path);
  const reader=r.body?.getReader();check(reader,'Missing response body');
  let total=0;const chunks=[];
  try{while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;check(total<=entry.bytes,'Response exceeds expected size: '+entry.path);chunks.push(Buffer.from(value));}}finally{await reader.cancel().catch(()=>{});}
  const b=Buffer.concat(chunks,total);verifyBytes(b,entry);return b;
}
export async function auditRelease(manifest,fetcher=fetch){
  validateManifest(manifest);
  const files=new Map();
  const results=await Promise.all(manifest.files.map(async entry=>{
    const [source,live]=await Promise.all([boundedFetch(RAW+manifest.source_commit+'/'+entry.path,entry,fetcher,false),boundedFetch(BASE+(entry.path==='index.html'?'':entry.path),entry,fetcher,true)]);
    check(source.equals(live),'Source/live mismatch: '+entry.path);files.set(entry.path,live);
    return {path:entry.path,bytes:entry.bytes,sha256:entry.sha256,verified:true};
  }));
  const html=files.get('index.html').toString('utf8');
  check(html.includes('property="og:image" content="'+BASE+'assets/IMPERIAL-DUBAI-2027.png"'),'Social metadata mismatch');
  const v=await verifyCheckpoint(files.get('evidence/checkpoint.json'),files.get('evidence/checkpoint.sig.b64').toString(),files.get('evidence/public-key.pem').toString(),webcrypto.subtle);
  return {verified:true,source_commit:manifest.source_commit,site_commit:manifest.site_commit,files:results,signature_verified:v.verified,scope:'Public static bytes and signature integrity only. Not browser rendering, messenger preview, independent QA or production certification.'};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  try{const m=JSON.parse(await readFile(new URL('./release-manifest.json',import.meta.url),'utf8'));console.log(JSON.stringify(await auditRelease(m),null,2));}
  catch(e){console.error('RELEASE NOT VERIFIED:',e.message);process.exitCode=1;}
}
