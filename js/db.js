const DB="baydi-chronicles-v2",STORE="archive";
function openDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function get(key){const db=await openDB();return new Promise((res,rej)=>{let r=db.transaction(STORE).objectStore(STORE).get(key);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function set(key,value){const db=await openDB();return new Promise((res,rej)=>{let t=db.transaction(STORE,"readwrite");t.objectStore(STORE).put(value,key);t.oncomplete=()=>res(true);t.onerror=()=>rej(t.error)})}
export async function del(key){const db=await openDB();return new Promise((res,rej)=>{let t=db.transaction(STORE,"readwrite");t.objectStore(STORE).delete(key);t.oncomplete=()=>res(true);t.onerror=()=>rej(t.error)})}
export async function all(){const db=await openDB();return new Promise((res,rej)=>{let r=db.transaction(STORE).objectStore(STORE).getAllKeys();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function clear(){const db=await openDB();return new Promise((res,rej)=>{let t=db.transaction(STORE,"readwrite");t.objectStore(STORE).clear();t.oncomplete=()=>res(true);t.onerror=()=>rej(t.error)})}
