import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),s="feedback-form-state";function m(e){const t=e.email.value.trim(),l=e.message.value.trim();return{email:t,message:l}}a.addEventListener("input",e=>{e.preventDefault();const t=m(e.currentTarget),l=JSON.stringify(t);localStorage.setItem(s,l)});const o=localStorage.getItem(s);if(o){const e=JSON.parse(o);a.email.value=e.email,a.message.value=e.message}a.addEventListener("submit",e=>{e.preventDefault(),a.email.value!==""&&a.message.value!==""?(console.log({email:a.email.value,message:a.message.value}),localStorage.removeItem(s),a.reset()):alert("Please fill in all fields")});
//# sourceMappingURL=commonHelpers2.js.map