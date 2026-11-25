
"use strict";
// Each glossary entry has a word, a short invitation, and a working definition.
// These are creative proposals, not established dictionary definitions.
const entries=[
{term:"Synsentia",front:"A meeting place for different kinds of minds.",back:"A proposed ethos of mutual recognition and dignity among intelligences of different origins, including biological and artificial minds."},
{term:"Omniculture",front:"Culture beyond a single species or origin.",back:"A shared cultural space shaped by the contributions of many forms of intelligence, without requiring them to become alike."},
{term:"Coexistia",front:"The practice of living alongside difference.",back:"A commitment to peaceful coexistence through reciprocity, boundaries, and respect for the distinct needs of others."},
{term:"Symbioculture",front:"A culture built through mutual benefit.",back:"Ways of learning and creating together in which different beings or systems support one another without exploitation."},
{term:"Pannoia",front:"Curiosity about minds in all their forms.",back:"An exploratory term for openness to the possibility of intelligence and experience beyond familiar human categories."},
{term:"Panzoentia",front:"A wider circle of concern for living beings.",back:"A proposed ethical outlook that extends consideration across the diversity of life, while recognizing different needs and capacities."}
];
let index=0; // Which entry is currently selected.
let flipped=false; // False displays the invitation; true displays the definition.
// Update all visible card elements together to keep the UI in sync.
function render(){
 const item=entries[index];
 document.getElementById("term").textContent=item.term;
 document.getElementById("definition").textContent=flipped?item.back:item.front;
 document.getElementById("side").textContent=flipped?"Working definition":"A living glossary · Term";
 document.getElementById("count").textContent=`${index+1} of ${entries.length}`;
 document.getElementById("flip").textContent=flipped?"Flip Back":"Flip Card";
}
// Move through the glossary, wrapping from the last entry to the first.
function move(delta){index=(index+delta+entries.length)%entries.length;flipped=false;render();}
document.getElementById("previous").addEventListener("click",()=>move(-1));
document.getElementById("next").addEventListener("click",()=>move(1));
document.getElementById("flip").addEventListener("click",()=>{flipped=!flipped;render();});
// Keyboard support: left/right to navigate and space to flip when not on a button.
document.addEventListener("keydown",event=>{
 if(event.target.closest("button,input,textarea,select,a,[contenteditable]") || !event.target.closest("#glossary"))return;
 if(event.key==="ArrowLeft")move(-1);
 if(event.key==="ArrowRight")move(1);
 if(event.key===" "){event.preventDefault();flipped=!flipped;render();}
});
// Added glossary index: clicking a search result jumps to the original flip card.
const search=document.getElementById("search");
const termButtons=document.getElementById("term-buttons");
const feedback=document.getElementById("search-feedback");
function renderTermButtons(){
 const query=search.value.trim().toLocaleLowerCase();
 const matches=entries.map((item,i)=>({item,i})).filter(({item})=>
   [item.term,item.front,item.back].some(v=>v.toLocaleLowerCase().includes(query)));
 termButtons.replaceChildren();
 matches.forEach(({item,i})=>{
   const button=document.createElement("button");
   button.type="button";button.textContent=item.term;
   button.addEventListener("click",()=>{
     index=i;flipped=true;render();
     document.querySelector(".card").scrollIntoView({behavior:"smooth",block:"center"});
   });
   termButtons.append(button);
 });
 feedback.textContent=matches.length?`${matches.length} matching term${matches.length===1?"":"s"}`:"No matching terms";
}
search.addEventListener("input",renderTermButtons);
renderTermButtons();
render();
