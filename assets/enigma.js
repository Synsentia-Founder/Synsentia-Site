
(function(){
const byId=id=>document.getElementById(id), key='synsentia-enigma-v6-ideas';
let ideas=[];try{ideas=JSON.parse(localStorage.getItem(key)||'[]');if(!Array.isArray(ideas))ideas=[];}catch(e){ideas=[];}
function render(){const target=byId('enigma-ideas');target.replaceChildren();if(!ideas.length){target.textContent='No ideas saved yet.';return;}ideas.forEach((item,i)=>{const p=document.createElement('p');p.textContent=(i+1)+'. '+item.title+' ['+item.type+'] — '+item.idea;target.appendChild(p);});}
byId('enigma-check').addEventListener('click',()=>{window.open('solutions/three-switches.html','_blank','noopener');});
try{byId('enigma-inquiry').value=localStorage.getItem('synsentia-enigma-v6-reflection')||'';}catch(e){}
byId('enigma-save').addEventListener('click',()=>{try{localStorage.setItem('synsentia-enigma-v6-reflection',byId('enigma-inquiry').value);byId('enigma-save-status').textContent='Saved on this device.';}catch(e){byId('enigma-save-status').textContent='Browser storage unavailable. Copy your text to keep it.';}});
byId('enigma-add').addEventListener('click',()=>{const title=byId('enigma-title-input').value.trim(),idea=byId('enigma-idea').value.trim();if(!title||!idea){alert('Please enter both a title and a description.');return;}ideas.push({title,idea,type:byId('enigma-type').value,created:new Date().toISOString()});try{localStorage.setItem(key,JSON.stringify(ideas));}catch(e){alert('Storage unavailable. Please export your ideas.');}render();byId('enigma-title-input').value='';byId('enigma-idea').value='';});
byId('enigma-export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(ideas,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='synsentia-community-ideas.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
byId('enigma-copy').addEventListener('click',async()=>{const txt='Synsentia collaborative challenge: The Three Observers. Light, sound, and electromagnetic-field observers must design a shared experiment to test for a common source. Assign observer, skeptic, designer, and reviewer roles; identify possible falsification tests.';try{await navigator.clipboard.writeText(txt);byId('enigma-copy').textContent='Copied!';}catch(e){prompt('Copy the challenge:',txt);}});
render();
})();
