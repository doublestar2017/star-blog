import{s,u as a}from"./index.9458277a.js";import{d as t,r as i,o as e,p as d,l,b as o,c as n,e as r,g as c,F as g,U as m,m as u,t as p}from"./vendor.4d6ce351.js";var v=t({name:"CustomSlider",setup(t,d){const l=i({isLoadEnd:!1,isLoading:!1,list:[],total:0,params:{keyword:"",pageNum:1,pageSize:100}});return e((()=>{(async()=>{l.isLoading=!0;const t=await s.get(a.getTagList,{params:l.params});l.isLoading=!1,l.list=[...l.list,...t.list],l.total=t.count,l.params.pageNum++,l.total===l.list.length&&(l.isLoadEnd=!0)})()})),{state:l}}});const _=u();d("data-v-7d54330a");const y={class:"right slider"},L=c("img",{class:"right-logo",src:"https://riyugo.com/i/2021/05/17/ndw728.jpg",alt:""},null,-1),h=c("div",{class:"title"},"星星",-1),f=c("div",{class:"right-content"},null,-1),k={class:"tags"},j=c("div",{class:"title"},"标签云",-1),w=c("div",{class:"introduce"},[c("div",{class:"content"})],-1),x=c("div",{class:"introduce"},[c("div",{class:"content"})],-1);l();const E=_(((s,a,t,i,e,d)=>{const l=o("router-link");return n(),r("div",y,[L,h,f,c("div",k,[j,(n(!0),r(g,null,m(s.state.list,(s=>(n(),r(l,{class:"item",key:s._id,to:`/articles?tag_id=${s._id}&tag_name=${s.name}&category_id=`},{default:_((()=>[(n(),r("span",{key:s._id},p(s.name),1))])),_:2},1032,["to"])))),128))]),w,x])}));v.render=E,v.__scopeId="data-v-7d54330a";export default v;
