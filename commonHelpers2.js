import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");let o,s,l;const u=({value:t,delay:e,shouldResolve:i=!0})=>new Promise((m,a)=>{setTimeout(()=>{i?m(t):a(t)},e)});r.addEventListener("submit",t=>{t.preventDefault(),s=r.elements.delay.value,r.elements.state.value==="fulfilled"?(o=`✅ Fulfilled promise in ${s}ms`,l=!0):(o=`❌ Rejected promise in ${s}ms`,l=!1),u({value:o,delay:s,shouldResolve:l}).then(e=>{n.show({message:`${e}`,position:"topCenter",backgroundColor:"#59A10D",theme:"dark",onOpening(){console.log(e)}})}).catch(e=>{n.show({message:`${o}`,position:"topCenter",backgroundColor:"rgb(239, 64, 64)",theme:"dark",onOpening(){console.log(o)}})})});
//# sourceMappingURL=commonHelpers2.js.map
