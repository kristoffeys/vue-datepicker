import{_ as n,f as m,I as i,C as d,r as u,o as p,c as l,a as r,b as c,a4 as f}from"./app.0d3c4680.js";import{g as _}from"./vue-datepicker.es.0106de20.js";import{j as b}from"./index.766f38c5.js";const k=m({components:{Datepicker:_},setup(){const e=i(),o=d();return{submitForm:()=>{alert("Form submitted")},date:e,dark:o,ja:b}}}),v={class:"demo-wrap"},D=r("button",{class:"submit-btn",type:"submit"},"Submit form",-1);function F(e,o,s,V,g,q){const a=u("Datepicker");return p(),l("div",v,[r("form",{onSubmit:o[1]||(o[1]=f((...t)=>e.submitForm&&e.submitForm(...t),["prevent"]))},[c(a,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.date=t),dark:e.dark,placeholder:"Select Date",required:""},null,8,["modelValue","dark"]),D],32)])}var C=n(k,[["render",F],["__file","RequiredDemo.vue"]]);export{C as default};