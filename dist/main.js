(()=>{"use strict";let e=[];!function(){function t(e){document.getElementById(`modal-${e.currentTarget.dataset.index}`).classList.toggle("is-active")}const n=document.getElementById("tr-0"),d=document.getElementById("modal-background-0"),a=document.getElementById("modal-close-0"),c=document.getElementById("modal-submit-0"),i=document.getElementById("modal-background-1"),l=document.getElementById("modal-close-1"),r=document.getElementById("modal-submit-1");n.addEventListener("click",(e=>{t(e)})),d.addEventListener("click",(e=>{t(e)})),a.addEventListener("click",(e=>{t(e)})),c.addEventListener("click",(n=>{!function(t,n,d,a,c){const i=((t,n,d,a,c)=>({title:t,description:n,dueDate:d,priority:a,notes:c,eventListeners:function(){document.getElementById(`remove-${e.length}`).addEventListener("click",(t=>{const n=document.getElementById(`tr-${t.currentTarget.dataset.index}`);e.splice(t.currentTarget.dataset.index-1,1),n.remove()})),document.getElementById(`details-${e.length}`).addEventListener("click",(t=>{const n=document.getElementById("modal-1"),d=document.getElementById("modal-submit-1");n.classList.toggle("is-active"),function(e,t,n,d,a){const c=document.getElementById("control-1").children[0],i=document.getElementById("control-2").children[0],l=document.getElementById("control-3").children[0],r=document.getElementById("select-1").options,s=document.getElementById("control-5").children[0];let u;for(c.value=e,i.value=t,l.value=n,u=0;u<r.length;++u)if(r[u].value===d){r[u].defaultSelected=!0;break}s.value=a}(e[t.currentTarget.dataset.index-1].title,e[t.currentTarget.dataset.index-1].description,e[t.currentTarget.dataset.index-1].dueDate,e[t.currentTarget.dataset.index-1].priority,e[t.currentTarget.dataset.index-1].notes),d.setAttribute("data-index",t.currentTarget.dataset.index)}))}}))(t,n,d,a,c);e.push(i)}(document.getElementById(`title-${n.currentTarget.dataset.index}`).value,document.getElementById(`description-${n.currentTarget.dataset.index}`).value,document.getElementById(`due_date-${n.currentTarget.dataset.index}`).value,document.getElementById(`select-${n.currentTarget.dataset.index}`).value,document.getElementById(`notes-${n.currentTarget.dataset.index}`).value),function(){const t=e[e.length-1],n=e.length;!function(e,t,n,d){const a=document.createElement("tr"),c=document.getElementById("tbody"),i=document.createElement("td"),l=document.createElement("td"),r=document.createElement("td"),s=document.createElement("span"),u=document.createElement("i"),o=document.createElement("span"),m=document.createElement("i"),g=document.createElement("a"),E=document.createElement("a");a.setAttribute("id",`tr-${d}`),a.classList.add("created-tr"),i.setAttribute("id",`title-${d}`),i.setAttribute("data",`${d}`),l.setAttribute("id",`description-${d}`),l.setAttribute("data",`${d}`),r.setAttribute("id",`due_date-${d}`),r.setAttribute("data",`${d}`),s.classList.add("icon"),s.classList.add("is-small"),s.classList.add("is-right"),s.setAttribute("id",`details-${d}`),s.setAttribute("data-index",`${d}`),s.style.margin="12px",u.classList.add("fas"),u.classList.add("fa-info-circle"),o.classList.add("icon"),o.classList.add("is-small"),o.classList.add("is-right"),o.setAttribute("id",`remove-${d}`),o.setAttribute("data-index",`${d}`),o.style.margin="12px",m.classList.add("fas"),m.classList.add("fa-trash-alt"),i.innerHTML=e,l.innerHTML=t,r.innerHTML=n,a.appendChild(i),a.appendChild(l),a.appendChild(r),a.appendChild(s),a.appendChild(o),s.appendChild(g),o.appendChild(E),g.appendChild(u),E.appendChild(m),c.appendChild(a)}(t.title,t.description,t.dueDate,n),t.eventListeners()}(),t(n),document.getElementById(`title-${n.currentTarget.dataset.index}`).value="",document.getElementById(`description-${n.currentTarget.dataset.index}`).value="",document.getElementById(`due_date-${n.currentTarget.dataset.index}`).value,document.getElementById(`select-${n.currentTarget.dataset.index}`).value,document.getElementById(`notes-${n.currentTarget.dataset.index}`).value=""})),i.addEventListener("click",(e=>{t(e)})),l.addEventListener("click",(e=>{t(e)})),r.addEventListener("click",(t=>{const n=document.getElementById("control-1").children[0].value,d=document.getElementById("control-2").children[0].value,a=document.getElementById("control-3").children[0].value,c=document.getElementById("select-1").value,i=document.getElementById("control-5").children[0].value;e[t.currentTarget.dataset.index-1].title=n,e[t.currentTarget.dataset.index-1].description=d,e[t.currentTarget.dataset.index-1].dueDate=a,e[t.currentTarget.dataset.index-1].priority=c,e[t.currentTarget.dataset.index-1].notes=i,function(t){const n=document.getElementById(`title-${t}`),d=document.getElementById(`description-${t}`),a=document.getElementById(`due_date-${t}`);n.innerHTML=e[""+(t-1)].title,d.innerHTML=e[""+(t-1)].description,a.innerHTML=e[""+(t-1)].dueDate}(t.currentTarget.dataset.index),document.getElementById("modal-1").classList.toggle("is-active")}))}()})();