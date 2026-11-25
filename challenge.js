
(function(){
const el=id=>document.getElementById(id);
el('cc-solution-btn').addEventListener('click',()=>{window.open('solutions/silent-observatory.html','_blank','noopener');});
try{el('cc-notes').value=localStorage.getItem('synsentia-v7-confluence-notes')||'';}catch(e){}
el('cc-save').addEventListener('click',()=>{try{localStorage.setItem('synsentia-v7-confluence-notes',el('cc-notes').value);el('cc-status').textContent='Saved in this browser.';}catch(e){el('cc-status').textContent='Local storage unavailable; copy your notes instead.';}});
el('cc-copy').addEventListener('click',async()=>{const value='Synsentia Confluence Challenge — The Silent Observatory\n'+el('cc-notes').value;try{await navigator.clipboard.writeText(value);el('cc-status').textContent='Copied joint reasoning.';}catch(e){el('cc-notes').focus();el('cc-notes').select();el('cc-status').textContent='Select and copy your notes manually.';}});
})();