(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{1811:function(e,a,s){Promise.resolve().then(s.bind(s,1230))},1230:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return t}});var r=s(7437),l=s(2265);function t(){let[e,a]=(0,l.useState)({name:"",email:"",message:""}),[s,t]=(0,l.useState)(!1),[o,n]=(0,l.useState)(""),[i,m]=(0,l.useState)(null),c=(0,l.useRef)(null),d=async s=>{s.preventDefault(),t(!0),n(""),m(null);try{let s;let r=new FormData;r.append("name",e.name),r.append("email",e.email),r.append("message",e.message),r.append("honeypot","");let l="localhost"===window.location.hostname?"":window.location.origin,t=await fetch("".concat(l,"/contact-form.php"),{method:"POST",body:r});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));try{s=await t.json()}catch(e){throw console.error("Greška parsiranja JSON-a:",e),Error("Neočekivani odgovor od servera. Provjerite ima li PHP grešaka.")}s.success?(m("success"),n(s.message||"Hvala na poruci! Kontaktirat ćemo vas u najkraćem mogućem roku."),a({name:"",email:"",message:""}),c.current&&c.current.reset()):(m("error"),n(s.message||"Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno."))}catch(e){console.error("Error sending form:",e),m("error"),n("Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno ili nas kontaktirajte direktno putem telefona.")}finally{t(!1)}};return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"Kontaktirajte nas"}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Naši kontakt podaci"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Adresa"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Ulica i broj"}),(0,r.jsx)("p",{className:"text-gray-600",children:"10000 Zagreb"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Telefon"}),(0,r.jsx)("p",{className:"text-gray-600",children:"+385 12 345 6789"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Email"}),(0,r.jsx)("p",{className:"text-gray-600",children:"info@vasafirma.hr"})]})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h3",{className:"font-semibold mb-2",children:"Radno vrijeme"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Pon - Pet: 09:00 - 17:00"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Sub: 09:00 - 13:00"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Ned: Zatvoreno"})]})]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Pošaljite nam poruku"}),i&&(0,r.jsx)("div",{className:"mb-4 p-3 rounded-md ".concat("success"===i?"bg-green-50 text-green-800":"bg-red-50 text-red-800"),children:o}),(0,r.jsxs)("form",{ref:c,onSubmit:d,className:"space-y-4",children:[(0,r.jsx)("input",{type:"text",name:"honeypot",className:"hidden",tabIndex:-1}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Ime i prezime"}),(0,r.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:s=>a({...e,name:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:s=>a({...e,email:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Poruka"}),(0,r.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:s=>a({...e,message:s.target.value}),rows:4,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),(0,r.jsx)("button",{type:"submit",disabled:s,className:"w-full ".concat(s?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"," text-white py-2 px-4 rounded-md transition-colors flex justify-center items-center"),children:s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Slanje..."]}):"Pošalji poruku"})]})]})})]})]})}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=1811)}),_N_E=e.O()}]);