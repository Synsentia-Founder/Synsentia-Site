
(()=>{const p=document.getElementById('ai-payload');let machine=false;
document.getElementById('ai-format').addEventListener('click',e=>{machine=!machine;p.textContent=machine?JSON.stringify({topic:"respectful disagreement",claim:"Different perspectives can coexist",uncertainty:"open",translation_note:"Keep original meaning available",source_type:"illustrative"},null,2):"Human-readable idea: We can disagree respectfully while keeping uncertainty visible.";e.target.textContent=machine?"Show human-readable view":"Show machine-readable view"});
const c=document.getElementById('ai-consent'),s=document.getElementById('ai-summary');
function update(){s.textContent=c.checked?"Example authorized summary: Participants discussed translation fidelity and agreed to retain original messages. No real conversation history was accessed.":"Context summary is hidden until you opt in."}
c.addEventListener('change',update);document.getElementById('ai-context').addEventListener('click',()=>{c.checked=!c.checked;update()})})();
