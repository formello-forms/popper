!function(){"use strict";var e=window.wp.element,t=window.wp.components,n=window.wp.i18n,l=window.wp.url;window.wp.api;const o=()=>{const[o,p]=(0,e.useState)(!1),[r,a]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{a((0,l.getQueryArg)(window.location.href,"form_id"))}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("a",{href:"#",onClick:()=>p(!0)},(0,n.__)("Edit rules","popper")),o&&(0,e.createElement)(t.Modal,{title:(0,n.__)("Rules","popper"),onRequestClose:()=>{console.log(88)},className:"popper-modal-rule"},(0,e.createElement)(t.TabPanel,{onSelect:()=>{console.log(645)},tabs:[{name:"location",title:(0,e.createElement)("span",null,(0,n.__)("Location","popper")),description:(0,e.createElement)("p",null,(0,n.__)("Choose where you want display this popup.","popper"))},{name:"exclude",title:(0,e.createElement)("span",null,(0,n.__)("Exclude","popper")),description:(0,e.createElement)("p",null,(0,n.__)("Choose where you don't want display this popup.","popper"))},{name:"user",title:(0,e.createElement)("span",null,(0,n.__)("Users","popper")),description:(0,e.createElement)("p",null,(0,n.__)("Choose which user will see this popup.","popper"))}]},(l=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h2",null,l.title),l.description,(0,e.createElement)(e.Fragment,null,rules[activeTab].map(((t,n)=>{const o="user"===l.name?UserSelect:Select;return(0,e.createElement)(o,{onChange:onChange,onDelete:onDelete,rule:t,index:n,key:n})}))),(0,e.createElement)(t.Button,{isPrimary:!0,onClick:addRule,className:"popper-modal-button"},(0,n.__)("Add rule","popper")))))))};window.addEventListener("DOMContentLoaded",(()=>{(0,e.render)((0,e.createElement)(o,null),document.getElementById("popper-table"))}))}();