(()=>{"use strict";let e=[];function t(){let e=document.getElementById("content_column"),t=e.firstElementChild;for(;t;)t.remove(),t=e.firstElementChild}function d(e){const t=document.getElementById("content_column"),d=document.createElement("div"),a=document.createElement("p"),c=document.getElementById(`project-${e.target.dataset.index}`),i=document.createElement("table"),l=document.createElement("thead"),r=document.createElement("tr"),s=document.createElement("th"),o=document.createElement("th"),u=document.createElement("th"),m=document.createElement("th"),g=document.createElement("tbody"),E=document.createElement("tr"),p=document.createElement("td");t.classList.add("column"),t.setAttribute("id","content_column"),d.classList.add("content"),a.classList.add("title"),a.innerHTML=c.innerHTML,i.classList.add("table"),i.classList.add("is-hoverable"),i.classList.add("is-fullwidth"),s.innerHTML="Title",o.innerHTML="Description",u.innerHTML="Due Date",m.innerHTML="Actions",g.setAttribute("id","tbody"),E.setAttribute("id","tr-0"),E.setAttribute("data-index","0"),p.innerHTML="Add a new task",t.appendChild(d),d.appendChild(a),d.appendChild(i),i.appendChild(l),l.appendChild(r),r.appendChild(s),r.appendChild(o),r.appendChild(u),r.appendChild(m),i.appendChild(g),g.appendChild(E),E.appendChild(p),document.getElementById("tr-0").addEventListener("click",(e=>{n(e)}))}function n(e){document.getElementById(`modal-${e.currentTarget.dataset.index}`).classList.toggle("is-active")}!function(){const a=document.getElementById("tr-0"),c=document.getElementById("modal-background-0"),i=document.getElementById("modal-close-0"),l=document.getElementById("modal-submit-0"),r=document.getElementById("modal-background-1"),s=document.getElementById("modal-close-1"),o=document.getElementById("modal-submit-1"),u=document.querySelectorAll(".project"),m=document.getElementById("add_new_project");function g(){for(let e=0;e<u.length;e++)u[e].classList.remove("is-active")}a.addEventListener("click",(e=>{n(e)})),c.addEventListener("click",(e=>{n(e)})),i.addEventListener("click",(e=>{n(e)})),l.addEventListener("click",(t=>{!function(t,d,n,a,c){const i=((t,d,n,a,c)=>({title:t,description:d,dueDate:n,priority:a,notes:c,eventListeners:function(){document.getElementById(`remove-${e.length}`).addEventListener("click",(t=>{const d=document.getElementById(`tr-${t.currentTarget.dataset.index}`);delete e[t.currentTarget.dataset.index-1],d.remove()})),document.getElementById(`details-${e.length}`).addEventListener("click",(t=>{const d=document.getElementById("modal-1"),n=document.getElementById("modal-submit-1");d.classList.toggle("is-active"),function(e,t,d,n,a){const c=document.getElementById("control-1").children[0],i=document.getElementById("control-2").children[0],l=document.getElementById("control-3").children[0],r=document.getElementById("select-1").options,s=document.getElementById("control-5").children[0];c.value=e,i.value=t,l.value=d;for(let e=0;e<r.length;++e)r[e].value===n?r[e].defaultSelected=!0:r[e].defaultSelected=!1;s.value=a}(e[t.currentTarget.dataset.index-1].title,e[t.currentTarget.dataset.index-1].description,e[t.currentTarget.dataset.index-1].dueDate,e[t.currentTarget.dataset.index-1].priority,e[t.currentTarget.dataset.index-1].notes),console.log(e),n.setAttribute("data-index",t.currentTarget.dataset.index)}))}}))(t,d,n,a,c);e.push(i)}(document.getElementById(`title-${t.currentTarget.dataset.index}`).value,document.getElementById(`description-${t.currentTarget.dataset.index}`).value,document.getElementById(`due_date-${t.currentTarget.dataset.index}`).value,document.getElementById(`select-${t.currentTarget.dataset.index}`).value,document.getElementById(`notes-${t.currentTarget.dataset.index}`).value),function(){const t=e[e.length-1],d=e.length;!function(e,t,d,n){const a=document.createElement("tr"),c=document.getElementById("tbody"),i=document.createElement("td"),l=document.createElement("td"),r=document.createElement("td"),s=document.createElement("span"),o=document.createElement("i"),u=document.createElement("span"),m=document.createElement("i"),g=document.createElement("a"),E=document.createElement("a");a.setAttribute("id",`tr-${n}`),a.classList.add("created-tr"),i.setAttribute("id",`title-${n}`),i.setAttribute("data",`${n}`),l.setAttribute("id",`description-${n}`),l.setAttribute("data",`${n}`),r.setAttribute("id",`due_date-${n}`),r.setAttribute("data",`${n}`),s.classList.add("icon"),s.classList.add("is-small"),s.classList.add("is-right"),s.setAttribute("id",`details-${n}`),s.setAttribute("data-index",`${n}`),s.style.margin="12px",o.classList.add("fas"),o.classList.add("fa-info-circle"),u.classList.add("icon"),u.classList.add("is-small"),u.classList.add("is-right"),u.setAttribute("id",`remove-${n}`),u.setAttribute("data-index",`${n}`),u.style.margin="12px",m.classList.add("fas"),m.classList.add("fa-trash-alt"),i.innerHTML=e,l.innerHTML=t,r.innerHTML=d,a.appendChild(i),a.appendChild(l),a.appendChild(r),a.appendChild(s),a.appendChild(u),s.appendChild(g),u.appendChild(E),g.appendChild(o),E.appendChild(m),c.appendChild(a)}(t.title,t.description,t.dueDate,d),t.eventListeners()}(),n(t),document.getElementById(`title-${t.currentTarget.dataset.index}`).value="",document.getElementById(`description-${t.currentTarget.dataset.index}`).value="",document.getElementById(`due_date-${t.currentTarget.dataset.index}`).value,document.getElementById(`select-${t.currentTarget.dataset.index}`).value,document.getElementById(`notes-${t.currentTarget.dataset.index}`).value=""})),r.addEventListener("click",(e=>{n(e)})),s.addEventListener("click",(e=>{n(e)})),o.addEventListener("click",(t=>{const d=document.getElementById("control-1").children[0].value,n=document.getElementById("control-2").children[0].value,a=document.getElementById("control-3").children[0].value,c=document.getElementById("select-1").value,i=document.getElementById("control-5").children[0].value;e[t.currentTarget.dataset.index-1].title=d,e[t.currentTarget.dataset.index-1].description=n,e[t.currentTarget.dataset.index-1].dueDate=a,e[t.currentTarget.dataset.index-1].priority=c,e[t.currentTarget.dataset.index-1].notes=i,function(t){const d=document.getElementById(`title-${t}`),n=document.getElementById(`description-${t}`),a=document.getElementById(`due_date-${t}`);d.innerHTML=e[""+(t-1)].title,n.innerHTML=e[""+(t-1)].description,a.innerHTML=e[""+(t-1)].dueDate}(t.currentTarget.dataset.index),document.getElementById("modal-1").classList.toggle("is-active")}));for(let e of u)e.addEventListener("click",(e=>{var n;t(),d(e),g(),(n=e).target&&n.target.classList.add("is-active")}));let E=!1;m.addEventListener("click",(()=>{E||(function(){const e=document.getElementById("add_new"),t=document.createElement("div"),d=document.createElement("div"),n=document.createElement("input"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("button");t.classList.add("field"),d.classList.add("control"),n.classList.add("input"),n.setAttribute("type","text"),n.setAttribute("placeholder","Project name"),a.classList.add("field"),c.classList.add("control"),i.classList.add("button"),i.classList.add("is-primary"),i.innerHTML="Add",e.prepend(a),e.prepend(t),t.appendChild(d),d.appendChild(n),a.appendChild(c),c.appendChild(i),i.addEventListener("click",(()=>{console.log("elo")}))}(),E=!0)}))}()})();