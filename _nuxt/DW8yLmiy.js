import{_ as u,M as m,t as d,v as p,x as e,N as i,O as n,P as _,C as c,D as f,L as v}from"./CXQqJMoW.js";const s=a=>(c("data-v-7ec12860"),a=a(),f(),a),x=s(()=>e("h1",null,"Seja um Voluntário",-1)),b=s(()=>e("label",{for:"name"},"Nome:",-1)),k=s(()=>e("label",{for:"email"},"Email:",-1)),V=s(()=>e("label",{for:"skills"},"Habilidades:",-1)),h=s(()=>e("button",{type:"submit"},"Enviar",-1)),S={__name:"Volunteer",setup(a){const t=m({name:"",email:"",skills:""});function r(){alert("Formulário de voluntariado enviado!")}return(I,o)=>(d(),p("div",null,[x,e("form",{onSubmit:_(r,["prevent"])},[b,i(e("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=l=>t.name=l),required:""},null,512),[[n,t.name]]),k,i(e("input",{type:"email",id:"email","onUpdate:modelValue":o[1]||(o[1]=l=>t.email=l),required:""},null,512),[[n,t.email]]),V,i(e("textarea",{id:"skills","onUpdate:modelValue":o[2]||(o[2]=l=>t.skills=l),required:""},null,512),[[n,t.skills]]),h],32)]))}},B=u(S,[["__scopeId","data-v-7ec12860"]]),w={__name:"index",setup(a){return(t,r)=>(d(),v(B))}};export{w as default};