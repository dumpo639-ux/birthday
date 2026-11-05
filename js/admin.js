import {get,set,all} from "./db.js";
const $=s=>document.querySelector(s);
const defaultLetter=`Dear Baydi,

Seven years.

It feels strange how quickly time passes when someone becomes such an important part of your life.

From those school days to our college journeys, so many things have changed. We have grown, our responsibilities have increased, and life has become busier.

But some things still feel the same.

Your random conversations, your teasing, our silly flirting, our night walks, scooty rides, Navratri memories and those hugs that somehow make saying goodbye a little difficult.

You have been there during moments when I wasn't feeling my best. You listened, understood and helped me smile again without even realizing how much that meant to me.

I don't know what the future has planned for us. I don't want to define everything with a label.

I just know that having you in my life is something I genuinely appreciate.

Never stop being that cute, crazy, caring and slightly irritating Baydi.

Keep smiling, keep healing people, keep chasing your dreams, and don't forget to take care of yourself too.

And yes, doctor madam, your favourite patient will continue to disturb you with absolutely unnecessary appointments.

Happy Birthday, Shruti.

Thank you for being you.

With lots of love,
Your favourite headache,
Darshil.`;
$("#letterEditor").value=await get("letter")||defaultLetter;
$("#saveLetter").addEventListener("click",async()=>{await set("letter",$("#letterEditor").value);$("#letterStatus").textContent="Letter saved in this browser."});
function blobToData(blob){return new Promise((resolve,reject)=>{let r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)})}
$("#exportBackup").addEventListener("click",async()=>{let keys=await all(),items={};for(let k of keys){let v=await get(k);if(v?.blob)items[k]={name:v.name,dedication:v.dedication,blobData:await blobToData(v.blob)};else items[k]=v}let payload={version:1,created:new Date().toISOString(),items};let url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}));let a=document.createElement("a");a.href=url;a.download="baydi-chronicles-backup.json";a.click();URL.revokeObjectURL(url);$("#backupStatus").textContent="Backup exported."});
$("#importBackup").addEventListener("change",async e=>{let f=e.target.files[0];if(!f)return;try{let data=JSON.parse(await f.text());for(let [k,v] of Object.entries(data.items||{})){if(v?.blobData){let blob=await (await fetch(v.blobData)).blob();v={...v,blob};delete v.blobData}await set(k,v)}$("#backupStatus").textContent="Backup imported successfully."}catch(err){$("#backupStatus").textContent="Could not import this backup. Check the JSON file."}});
