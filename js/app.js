import {get,set,del,all,clear} from "./db.js";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
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
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const progress=$("#progress");if(progress){const update=()=>{let max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+"%"};addEventListener("scroll",update,{passive:true});update()}
$("#analysisButton")?.addEventListener("click",()=>{const a=["Result: 99.9% chance of making an ordinary day memorable.","Analysis complete: certified favourite headache detected.","Warning: high levels of cuteness may interrupt normal productivity.","Conclusion: friendship levels are officially legendary."];$("#analysisResult").textContent=a[Math.floor(Math.random()*a.length)]});
$("#printCertificate")?.addEventListener("click",()=>window.print());
$$(".case-file").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("open");b.querySelector("i").textContent=b.classList.contains("open")?"−":"＋"}));
const audio=$("#audio");let audioURL;
if(audio){
 const saved=await get("audio");if(saved?.blob){audio.src=URL.createObjectURL(saved.blob);$("#trackTitle").textContent=saved.name;$("#trackDedication").textContent=saved.dedication||"A track from the archive."}
 $("#audioUpload")?.addEventListener("change",async e=>{let f=e.target.files[0];if(!f)return;if(f.size>30*1024*1024){alert("Choose an audio file smaller than 30 MB.");return}if(!f.type.startsWith("audio/")){alert("Please choose an audio file.");return}await set("audio",{blob:f,name:f.name,dedication:"A new track added to the archive."});audio.src=URL.createObjectURL(f);$("#trackTitle").textContent=f.name;$("#trackDedication").textContent="A new track has been added to the archive.";audio.play().then(()=>$("#playAudio").textContent="Ⅱ").catch(()=>{})});
 $("#playAudio")?.addEventListener("click",()=>{if(!audio.src){alert("Add a song first.");return}if(audio.paused)audio.play().then(()=>$("#playAudio").textContent="Ⅱ");else{audio.pause();$("#playAudio").textContent="▶"}});
 audio.addEventListener("timeupdate",()=>{if(audio.duration){$("#audioProgress").value=audio.currentTime/audio.duration*100;$("#audioTime").textContent=`${Math.floor(audio.currentTime/60)}:${String(Math.floor(audio.currentTime%60)).padStart(2,"0")}`}});
 audio.addEventListener("ended",()=>$("#playAudio").textContent="▶");$("#audioProgress")?.addEventListener("input",e=>{if(audio.duration)audio.currentTime=audio.duration*(+e.target.value/100)});$("#volume")?.addEventListener("input",e=>audio.volume=+e.target.value);
}
const letterBox=$("#letterContent");if(letterBox){let saved=await get("letter");let content=saved||defaultLetter;letterBox.innerHTML=content.split(/\n\s*\n/).map(p=>`<p>${safe(p).replace(/\n/g,"<br>")}</p>`).join("")}
$("#openLetter")?.addEventListener("click",()=>{$("#envelope").classList.add("open");setTimeout(()=>{$("#letterPaper").hidden=false;$("#letterPaper").scrollIntoView({behavior:"smooth",block:"center"})},450)});
let candlesOff=0;$$(".candle").forEach(c=>c.addEventListener("click",()=>{if(c.classList.contains("off"))return;c.classList.add("off");candlesOff++;if(candlesOff===5){$("#cakeHint").textContent="Wish made. Let the celebration begin!";$("#birthdayMessage").hidden=false;confetti()}}));
function confetti(){for(let i=0;i<60;i++){let e=document.createElement("i");e.textContent=["✦","✳","•","♡"][i%4];e.style.cssText=`position:fixed;z-index:50;left:${Math.random()*100}vw;top:-20px;color:${i%2?"#E892B3":"#556B2F"};font-size:${10+Math.random()*15}px;pointer-events:none;transition:transform ${2+Math.random()*2}s linear,opacity 3s`;document.body.append(e);requestAnimationFrame(()=>{e.style.transform=`translate(${(Math.random()-.5)*180}px,${innerHeight+80}px) rotate(${Math.random()*500}deg)`;e.style.opacity="0"});setTimeout(()=>e.remove(),4500)}}
$("#replay")?.addEventListener("click",()=>{candlesOff=0;$$(".candle").forEach(c=>c.classList.remove("off"));$("#birthdayMessage").hidden=true;$("#cakeHint").textContent="Tap each candle to make a wish ✨";location.href="index.html"});
let secretClicks=0;$("#secretTrigger")?.addEventListener("click",()=>{if(++secretClicks>=5){$("#secretMessage").textContent="Congratulations. You have unlocked unlimited access to your favourite headache. ✳";secretClicks=0}});
$$(".star").forEach(s=>s.addEventListener("click",()=>{s.classList.toggle("active");$("#starMessage").textContent=s.dataset.word+" — another little piece of this story." ;if($$(".star.active").length===7)$("#starMessage").textContent="Seven stars. One beautiful story."}));
document.addEventListener("keydown",e=>{if(e.altKey&&e.key.toLowerCase()==="b"){let el=$("#secretMessage");if(el)el.textContent="No matter how busy life gets, I hope we never run out of reasons to meet, laugh and hug."}});
