(()=>{"use strict";function e(e,t,n,d){const a=document.createElement("tr"),c=document.getElementById("tbody"),i=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td"),r=document.createElement("span"),o=document.createElement("i"),u=document.createElement("span"),m=document.createElement("i"),p=document.createElement("a"),g=document.createElement("a");a.setAttribute("id",`tr-${d}`),a.classList.add("created-tr"),i.setAttribute("id",`title-${d}`),i.setAttribute("data",`${d}`),l.setAttribute("id",`description-${d}`),l.setAttribute("data",`${d}`),s.setAttribute("id",`due_date-${d}`),s.setAttribute("data",`${d}`),r.classList.add("icon"),r.classList.add("is-small"),r.classList.add("is-right"),r.setAttribute("id",`details-${d}`),r.setAttribute("data-index",`${d}`),r.style.margin="12px",o.classList.add("fas"),o.classList.add("fa-info-circle"),u.classList.add("icon"),u.classList.add("is-small"),u.classList.add("is-right"),u.setAttribute("id",`remove-${d}`),u.setAttribute("data-index",`${d}`),u.style.margin="12px",m.classList.add("fas"),m.classList.add("fa-trash-alt"),i.innerHTML=e,l.innerHTML=t,s.innerHTML=n,a.appendChild(i),a.appendChild(l),a.appendChild(s),a.appendChild(r),a.appendChild(u),r.appendChild(p),u.appendChild(g),p.appendChild(o),g.appendChild(m),c.appendChild(a)}let t=[];function n(n){for(let d=0;d<t.length;d++)t[d].projectIndex==n&&(e(t[d].title,t[d].description,t[d].dueDate,d+1),t[d].eventListeners())}function d(){localStorage.setItem("todos",JSON.stringify(t))}let a=[{name:"blabla",index:2}];function c(){let e=document.getElementById("content_column"),t=e.firstElementChild;for(;t;)t.remove(),t=e.firstElementChild}function i(e){const t=document.getElementById("content_column"),n=document.createElement("div"),d=document.createElement("p"),a=document.getElementById(`project-${e.target.dataset.index}`),c=document.createElement("table"),i=document.createElement("thead"),l=document.createElement("tr"),s=document.createElement("th"),r=document.createElement("th"),o=document.createElement("th"),u=document.createElement("th"),p=document.createElement("tbody"),g=document.createElement("button"),E=document.createElement("span"),L=document.createElement("span"),h=document.createElement("i");t.classList.add("column"),t.setAttribute("id","content_column"),n.classList.add("content"),d.classList.add("title"),d.innerHTML=a.innerHTML,c.classList.add("table"),c.classList.add("is-hoverable"),c.classList.add("is-fullwidth"),s.innerHTML="Title",r.innerHTML="Description",o.innerHTML="Due Date",u.innerHTML="Actions",p.setAttribute("id","tbody"),g.setAttribute("id","tr-0"),g.setAttribute("data-index","0"),g.classList.add("button"),g.classList.add("is-info"),L.classList.add("icon"),L.classList.add("is-small"),h.classList.add("fas"),h.classList.add("fa-plus-circle"),E.innerHTML="Add new task",t.appendChild(n),n.appendChild(d),n.appendChild(g),g.appendChild(L),L.appendChild(h),g.appendChild(E),n.appendChild(c),c.appendChild(i),i.appendChild(l),l.appendChild(s),l.appendChild(r),l.appendChild(o),l.appendChild(u),c.appendChild(p),document.getElementById("tr-0").addEventListener("click",(e=>{m(e)}))}function l(e,t){const n=document.getElementById("created_projects"),d=document.createElement("li"),a=document.createElement("a");a.classList.add("project"),a.setAttribute("data-index",e),a.setAttribute("id",`project-${e}`),n.appendChild(d),d.appendChild(a),a.innerHTML=""!=t?t:"Project"}if(localStorage.getItem("projects")){let e=localStorage.getItem("projects");a=JSON.parse(e),a.forEach((function(e){l(e.index,e.name)}))}function s(){const e=document.getElementById("add_new"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),s=document.createElement("input"),r=document.createElement("div"),o=document.createElement("div"),m=document.createElement("button");t.setAttribute("id","form-wrapper"),n.classList.add("field"),d.classList.add("control"),s.classList.add("input"),s.setAttribute("type","text"),s.setAttribute("placeholder","Project name"),s.setAttribute("id","input-0"),r.classList.add("field"),o.classList.add("control"),m.classList.add("button"),m.classList.add("is-primary"),m.classList.add("is-fullwidth"),m.innerHTML="Add",e.prepend(t),t.appendChild(n),t.appendChild(r),n.appendChild(d),d.appendChild(s),r.appendChild(o),o.appendChild(m),m.addEventListener("click",(()=>{!function(e,t){const n=function(e,t){return{name:e,index:t,eventProjectListeners:()=>{const e=document.querySelectorAll(".project");for(let t of e)t.addEventListener("click",(e=>{c(),i(e),function(){const e=document.querySelectorAll(".project");for(let t=0;t<e.length;t++)e[t].classList.remove("is-active")}(),u(e)}))}}}(e,t);a.push(n)}(s.value,a.length+2);const t=a[a.length-1];l(a.length+1,t.name),e.childNodes[0].remove(),t.eventProjectListeners(),localStorage.setItem("projects",JSON.stringify(a))}))}const r=document.querySelectorAll(".project");function o(){for(let e=0;e<r.length;e++)r[e].classList.remove("is-active")}function u(e){e.target&&e.target.classList.add("is-active")}function m(e){document.getElementById(`modal-${e.currentTarget.dataset.index}`).classList.toggle("is-active")}!function(){const a=document.getElementById("tr-0"),l=document.getElementById("modal-background-0"),p=document.getElementById("modal-close-0"),g=document.getElementById("modal-submit-0"),E=document.getElementById("modal-background-1"),L=document.getElementById("modal-close-1"),h=document.getElementById("modal-submit-1"),y=document.getElementById("add_new_project");a.addEventListener("click",(e=>{m(e)})),l.addEventListener("click",(e=>{m(e)})),p.addEventListener("click",(e=>{m(e)})),g.addEventListener("click",(n=>{!function(e,n,d,a,c){const i=document.querySelectorAll(".project"),l=((e,n,d,a,c,i,l)=>({title:e,description:n,dueDate:d,priority:a,notes:c,eventListeners:function(){document.getElementById(`remove-${parseInt(t[l].ID+1)}`).addEventListener("click",(e=>{const n=document.getElementById(`tr-${e.currentTarget.dataset.index}`);parseInt(t[l].ID+1),n.remove()})),document.getElementById(`details-${parseInt(t[l].ID+1)}`).addEventListener("click",(e=>{const n=document.getElementById("modal-1"),d=document.getElementById("modal-submit-1");n.classList.toggle("is-active"),function(e,t,n,d,a){const c=document.getElementById("control-1").children[0],i=document.getElementById("control-2").children[0],l=document.getElementById("control-3").children[0],s=document.getElementById("select-1").options,r=document.getElementById("control-5").children[0];c.value=e,i.value=t,l.value=n;for(let e=0;e<s.length;++e)s[e].value===d?s[e].defaultSelected=!0:s[e].defaultSelected=!1;r.value=a}(t[e.currentTarget.dataset.index-1].title,t[e.currentTarget.dataset.index-1].description,t[e.currentTarget.dataset.index-1].dueDate,t[e.currentTarget.dataset.index-1].priority,t[e.currentTarget.dataset.index-1].notes),console.log("todos id "+parseInt(t[l].ID+1)),d.setAttribute("data-index",e.currentTarget.dataset.index)}))},projectIndex:i,ID:l}))(e,n,d,a,c,function(){let e="";for(let t of i)t.classList.contains("is-active")&&(e=t.dataset.index);return e}(),t.length);t.push(l)}(document.getElementById(`title-${n.currentTarget.dataset.index}`).value,document.getElementById(`description-${n.currentTarget.dataset.index}`).value,document.getElementById(`due_date-${n.currentTarget.dataset.index}`).value,document.getElementById(`select-${n.currentTarget.dataset.index}`).value,document.getElementById(`notes-${n.currentTarget.dataset.index}`).value),d(),function(){const n=t[t.length-1],d=t.length;e(n.title,n.description,n.dueDate,d),n.eventListeners()}(),m(n),document.getElementById(`title-${n.currentTarget.dataset.index}`).value="",document.getElementById(`description-${n.currentTarget.dataset.index}`).value="",document.getElementById(`due_date-${n.currentTarget.dataset.index}`).value,document.getElementById(`select-${n.currentTarget.dataset.index}`).value,document.getElementById(`notes-${n.currentTarget.dataset.index}`).value=""})),E.addEventListener("click",(e=>{m(e)})),L.addEventListener("click",(e=>{m(e)})),h.addEventListener("click",(e=>{const n=document.getElementById("control-1").children[0].value,a=document.getElementById("control-2").children[0].value,c=document.getElementById("control-3").children[0].value,i=document.getElementById("select-1").value,l=document.getElementById("control-5").children[0].value;t[e.currentTarget.dataset.index-1].title=n,t[e.currentTarget.dataset.index-1].description=a,t[e.currentTarget.dataset.index-1].dueDate=c,t[e.currentTarget.dataset.index-1].priority=i,t[e.currentTarget.dataset.index-1].notes=l,function(e){const n=document.getElementById(`title-${e}`),d=document.getElementById(`description-${e}`),a=document.getElementById(`due_date-${e}`);n.innerHTML=t[""+(e-1)].title,d.innerHTML=t[""+(e-1)].description,a.innerHTML=t[""+(e-1)].dueDate}(e.currentTarget.dataset.index),d(),document.getElementById("modal-1").classList.toggle("is-active")})),(()=>{for(let e of r)e.addEventListener("click",(e=>{c(),i(e),o(),u(e),n(e.currentTarget.dataset.index)}))})(),y.addEventListener("click",(()=>{s()}))}(),document.getElementById("add_new").style.display="none"})();