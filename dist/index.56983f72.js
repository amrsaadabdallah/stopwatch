const t=window.document.querySelector(".stopwatch-hours"),e=window.document.querySelector(".stopwatch-mins"),n=window.document.querySelector(".stopwatch-secs"),o=window.document.querySelector(".stopwatch-start-btn"),r=window.document.querySelector(".stopwatch-pause-btn"),a=window.document.querySelector(".stopwatch-reset-btn");let d,c=0;const i=()=>{const o=Math.floor(c/3600),r=Math.floor((c-3600*o)/60),a=Math.floor(c-3600*o-60*r);t.textContent=`${o}`.padStart(2,"0"),e.textContent=`${r}`.padStart(2,"0"),n.textContent=`${a}`.padStart(2,"0")},l=t=>t.setAttribute("disabled","disabled"),s=(...t)=>t.forEach((t=>t.setAttribute("disabled","disabled"))),w=t=>t.removeAttribute("disabled");o.addEventListener("click",(()=>{l(o),((...t)=>{t.forEach((t=>t.removeAttribute("disabled","disabled")))})(r,a),"Continue"===o.textContent&&(o.textContent="Start"),d=window.setInterval((()=>{c+=1,i()}),1e3)})),r.addEventListener("click",(()=>{l(r),w(o),window.clearInterval(d),o.textContent="Continue"})),a.addEventListener("click",(()=>{s(r,a),w(o),window.clearInterval(d),"Continue"===o.textContent&&(o.textContent="Start"),c=0,i()}));const u=window.document.querySelectorAll(".current-year"),b=(new Date).getFullYear();s(r,a),u.forEach((t=>{t.textContent=b}));
//# sourceMappingURL=index.56983f72.js.map
