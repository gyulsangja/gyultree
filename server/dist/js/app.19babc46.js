(function(){"use strict";var e={6172:function(e,t,o){var n=o(5130),i=o(6768);function l(e,t,o,n,l,a){const s=(0,i.g2)("HeaderCom"),r=(0,i.g2)("router-view"),c=(0,i.g2)("FooterCom");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(s),(0,i.bF)(r),(0,i.bF)(c)],64)}var a=o.p+"img/logo.d2e78d1e.svg";const s=e=>((0,i.Qi)("data-v-57e584c8"),e=e(),(0,i.jt)(),e),r={class:"header"},c={class:"hd_inner"},u=s((()=>(0,i.Lk)("img",{src:a},null,-1))),d={class:"ul1"};function g(e,t,o,n,l,a){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",r,[(0,i.Lk)("div",c,[(0,i.Lk)("h1",null,[(0,i.bF)(s,{to:"/"},{default:(0,i.k6)((()=>[u,(0,i.eW)(" 귤밭농장")])),_:1})]),(0,i.Lk)("nav",null,[(0,i.Lk)("ul",d,[(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/"})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/blog"},{default:(0,i.k6)((()=>[(0,i.eW)("blog")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/login"},{default:(0,i.k6)((()=>[(0,i.eW)("로그인")])),_:1})])])])])])}var m={name:"HeaderCom"},p=o(1241);const h=(0,p.A)(m,[["render",g],["__scopeId","data-v-57e584c8"]]);var k=h;const v=e=>((0,i.Qi)("data-v-2070f5c9"),e=e(),(0,i.jt)(),e),f={class:"footer"},b=v((()=>(0,i.Lk)("div",{class:"inner"},[(0,i.Lk)("div",{class:"ft_logo"},[(0,i.Lk)("h2",null,[(0,i.Lk)("img",{src:a}),(0,i.eW)(" 귤밭농장")])]),(0,i.Lk)("div",{class:"ft_txt"},[(0,i.Lk)("p",null,[(0,i.eW)("귤귤"),(0,i.Lk)("br"),(0,i.eW)(" gojekal@naver.com")])])],-1))),L=[b];function C(e,t,o,n,l,a){return(0,i.uX)(),(0,i.CE)("footer",f,L)}var w={name:"FooterCom"};const _=(0,p.A)(w,[["render",C],["__scopeId","data-v-2070f5c9"]]);var y=_,A={name:"App",components:{HeaderCom:k,FooterCom:y}};const I=(0,p.A)(A,[["render",l]]);var S=I,F=o(1387),H=o(4232);const $={class:"wrapper","data-aos":"fade-up"},E={class:"listul"},V={class:"img_wrap"},X=["src"],T={class:"ctrl"};function x(e,t,o,n,l,a){const s=(0,i.g2)("SubtopCom"),r=(0,i.g2)("router-link"),c=(0,i.g2)("BlogWrite");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(s,{title:l.title},null,8,["title"]),(0,i.Lk)("div",$,[(0,i.Lk)("ul",E,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.post,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t},[(0,i.bF)(r,{to:"/detail/"+e.id},{default:(0,i.k6)((()=>[(0,i.Lk)("div",V,[(0,i.Lk)("img",{src:e.imgurl},null,8,X)]),(0,i.Lk)("h4",null,(0,H.v_)(e.title),1)])),_:2},1032,["to"])])))),128))]),(0,i.Lk)("div",T,[(0,i.Lk)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>a.writeHandle&&a.writeHandle(...e))},"글쓰기")])]),(0,i.bF)(c,{write:l.write,onPostSuccess:a.reloadhandle,onWriteHandle:t[1]||(t[1]=e=>l.write=!1)},null,8,["write","onPostSuccess"])])}const j={class:"subtop"},D={"data-aos":"fade-down"};function O(e,t,o,n,l,a){return(0,i.uX)(),(0,i.CE)("div",j,[(0,i.Lk)("h3",D,(0,H.v_)(o.title),1)])}var B={name:"SubtopCom",props:{title:String}};const W=(0,p.A)(B,[["render",O],["__scopeId","data-v-5aa69bb9"]]);var U=W,P=o.p+"img/close.ef962dbb.svg";const R=e=>((0,i.Qi)("data-v-4eaa43d8"),e=e(),(0,i.jt)(),e),M={class:"container"},K={class:"inner"},Q={class:"top"},J=R((()=>(0,i.Lk)("h2",{class:"wr_tit"},"글쓰기",-1))),q={class:"btn_wrap"};function N(e,t,o,l,a,s){const r=(0,i.g2)("TiptapCom");return(0,i.uX)(),(0,i.CE)("div",{class:(0,H.C4)(["write_wrap",!0===o.write?"on":null])},[(0,i.Lk)("div",M,[(0,i.Lk)("div",K,[(0,i.Lk)("div",Q,[(0,i.Lk)("img",{class:"close",src:P,onClick:t[0]||(t[0]=t=>e.$emit("writeHandle"))})]),J,(0,i.Lk)("dl",null,[(0,i.Lk)("dd",null,[(0,i.bo)((0,i.Lk)("input",{type:"text",placeholder:"제목","onUpdate:modelValue":t[1]||(t[1]=e=>a.result.title=e)},null,512),[[n.Jo,a.result.title]])])]),(0,i.bF)(r,{ref:"editor",modelValue:a.result.content,"onUpdate:modelValue":t[2]||(t[2]=e=>a.result.content=e),onImgurlHandle:s.updateImgUrl,onImgIDHandle:s.updateImgID,onClearContent:e.clearContent},null,8,["modelValue","onImgurlHandle","onImgIDHandle","onClearContent"]),(0,i.Lk)("div",q,[(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>s.onSubmit&&s.onSubmit(...e)),class:"write_btn"},"글쓰기"),(0,i.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>s.reset&&s.reset(...e)),class:"write_btn"},"다시쓰기")])])])],2)}var Y=o(4373),z=o.p+"img/format_bold.4b53400d.svg",Z=o.p+"img/format_italic.6a83e4cd.svg",G=o.p+"img/format_underlined.bcc5c934.svg",ee=o.p+"img/format_align_left.990d2046.svg",te=o.p+"img/format_align_center.1be4eaea.svg",oe=o.p+"img/format_align_right.c60f0985.svg",ne=o.p+"img/format_h1.eb017fd6.svg",ie=o.p+"img/format_h2.b20a6580.svg",le=o.p+"img/format_h3.edd0a49d.svg",ae=o.p+"img/format_h4.196891d4.svg",se=o.p+"img/format_h5.0020b2b4.svg",re=o.p+"img/format_h6.711885d9.svg",ce=o.p+"img/format_list_bulleted.2e37c8d2.svg",ue=o.p+"img/format_list_numbered.bd034592.svg",de=o.p+"img/code_blocks.cba490a6.svg",ge=o.p+"img/format_quote.773ea9d9.svg",me=o.p+"img/horizontal_rule.f4658f1f.svg",pe=o.p+"img/undo.a1863c56.svg",he=o.p+"img/redo.3c5edbea.svg",ke=o.p+"img/imagesmode.04c482f7.svg",ve=o.p+"img/youtube_activity.a585009a.svg";const fe={key:0,class:"wr_btn"},be=["disabled"],Le=(0,i.Lk)("img",{src:z},null,-1),Ce=[Le],we=["disabled"],_e=(0,i.Lk)("img",{src:Z},null,-1),ye=[_e],Ae=["disabled"],Ie=(0,i.Lk)("img",{src:G},null,-1),Se=[Ie],Fe=["value"],He=(0,i.Lk)("img",{src:ee},null,-1),$e=[He],Ee=(0,i.Lk)("img",{src:te},null,-1),Ve=[Ee],Xe=(0,i.Lk)("img",{src:oe},null,-1),Te=[Xe],xe=(0,i.Lk)("img",{src:ne},null,-1),je=[xe],De=(0,i.Lk)("img",{src:ie},null,-1),Oe=[De],Be=(0,i.Lk)("img",{src:le},null,-1),We=[Be],Ue=(0,i.Lk)("img",{src:ae},null,-1),Pe=[Ue],Re=(0,i.Lk)("img",{src:se},null,-1),Me=[Re],Ke=(0,i.Lk)("img",{src:re},null,-1),Qe=[Ke],Je=(0,i.Lk)("img",{src:ce},null,-1),qe=[Je],Ne=(0,i.Lk)("img",{src:ue},null,-1),Ye=[Ne],ze=(0,i.Lk)("img",{src:de},null,-1),Ze=[ze],Ge=(0,i.Lk)("img",{src:ge},null,-1),et=[Ge],tt=(0,i.Lk)("img",{src:me},null,-1),ot=[tt],nt=["disabled"],it=(0,i.Lk)("img",{src:pe},null,-1),lt=[it],at=["disabled"],st=(0,i.Lk)("img",{src:he},null,-1),rt=[st],ct=(0,i.Lk)("label",{for:"image"},[(0,i.Lk)("img",{src:ke})],-1),ut=(0,i.Lk)("img",{src:ve},null,-1),dt=[ut];function gt(e,t,o,n,l,a){const s=(0,i.g2)("editor-content");return(0,i.uX)(),(0,i.CE)("div",null,[l.editor?((0,i.uX)(),(0,i.CE)("div",fe,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=e=>l.editor.chain().focus().toggleBold().run()),disabled:!l.editor.can().chain().focus().toggleBold().run(),class:(0,H.C4)({"is-active":l.editor.isActive("bold")})},Ce,10,be),(0,i.Lk)("button",{onClick:t[1]||(t[1]=e=>l.editor.chain().focus().toggleItalic().run()),disabled:!l.editor.can().chain().focus().toggleItalic().run(),class:(0,H.C4)({"is-active":l.editor.isActive("italic")})},ye,10,we),(0,i.Lk)("button",{onClick:t[2]||(t[2]=e=>l.editor.chain().focus().toggleStrike().run()),disabled:!l.editor.can().chain().focus().toggleStrike().run(),class:(0,H.C4)({"is-active":l.editor.isActive("strike")})},Se,10,Ae),(0,i.Lk)("input",{type:"color",onInput:t[3]||(t[3]=e=>l.editor.chain().focus().setColor(e.target.value).run()),value:l.color},null,40,Fe),(0,i.Lk)("button",{onClick:t[4]||(t[4]=e=>l.editor.chain().focus().setTextAlign("left").run()),class:(0,H.C4)({"is-active":l.editor.isActive({textAlign:"left"})})},$e,2),(0,i.Lk)("button",{onClick:t[5]||(t[5]=e=>l.editor.chain().focus().setTextAlign("center").run()),class:(0,H.C4)({"is-active":l.editor.isActive({textAlign:"center"})})},Ve,2),(0,i.Lk)("button",{onClick:t[6]||(t[6]=e=>l.editor.chain().focus().setTextAlign("right").run()),class:(0,H.C4)({"is-active":l.editor.isActive({textAlign:"right"})})},Te,2),(0,i.Lk)("button",{onClick:t[7]||(t[7]=e=>l.editor.chain().focus().toggleHeading({level:1}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:1})})},je,2),(0,i.Lk)("button",{onClick:t[8]||(t[8]=e=>l.editor.chain().focus().toggleHeading({level:2}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:2})})},Oe,2),(0,i.Lk)("button",{onClick:t[9]||(t[9]=e=>l.editor.chain().focus().toggleHeading({level:3}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:3})})},We,2),(0,i.Lk)("button",{onClick:t[10]||(t[10]=e=>l.editor.chain().focus().toggleHeading({level:4}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:4})})},Pe,2),(0,i.Lk)("button",{onClick:t[11]||(t[11]=e=>l.editor.chain().focus().toggleHeading({level:5}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:5})})},Me,2),(0,i.Lk)("button",{onClick:t[12]||(t[12]=e=>l.editor.chain().focus().toggleHeading({level:6}).run()),class:(0,H.C4)({"is-active":l.editor.isActive("heading",{level:6})})},Qe,2),(0,i.Lk)("button",{onClick:t[13]||(t[13]=e=>l.editor.chain().focus().toggleBulletList().run()),class:(0,H.C4)({"is-active":l.editor.isActive("bulletList")})},qe,2),(0,i.Lk)("button",{onClick:t[14]||(t[14]=e=>l.editor.chain().focus().toggleOrderedList().run()),class:(0,H.C4)({"is-active":l.editor.isActive("orderedList")})},Ye,2),(0,i.Lk)("button",{onClick:t[15]||(t[15]=e=>l.editor.chain().focus().toggleCodeBlock().run()),class:(0,H.C4)({"is-active":l.editor.isActive("codeBlock")})},Ze,2),(0,i.Lk)("button",{onClick:t[16]||(t[16]=e=>l.editor.chain().focus().toggleBlockquote().run()),class:(0,H.C4)({"is-active":l.editor.isActive("blockquote")})},et,2),(0,i.Lk)("button",{onClick:t[17]||(t[17]=e=>l.editor.chain().focus().setHorizontalRule().run())},ot),(0,i.Lk)("button",{onClick:t[18]||(t[18]=e=>l.editor.chain().focus().undo().run()),disabled:!l.editor.can().chain().focus().undo().run()},lt,8,nt),(0,i.Lk)("button",{onClick:t[19]||(t[19]=e=>l.editor.chain().focus().redo().run()),disabled:!l.editor.can().chain().focus().redo().run()},rt,8,at),(0,i.Lk)("input",{type:"file",id:"image",class:"imageup",onChange:t[20]||(t[20]=(...e)=>a.addImage&&a.addImage(...e))},null,32),ct,(0,i.Lk)("button",{id:"add",onClick:t[21]||(t[21]=(...e)=>a.addVideo&&a.addVideo(...e))},dt)])):(0,i.Q3)("",!0),(0,i.bF)(s,{editor:l.editor},null,8,["editor"])])}var mt=o(8413),pt=o(2006),ht=o(6642),kt=o(9233),vt=o(4840),ft=o(7e3),bt=o(8573),Lt=o(865),Ct=o(1962),wt=o(6682),_t=o(9576),yt=o(7602);const At="http://localhost:8500/image";var It={components:{EditorContent:mt.$Z},props:{modelValue:{type:String,default:""}},data(){return{editor:null,imgurl:null,imgID:null,color:"#000000"}},mounted(){this.editor=new mt.KE({extensions:[kt.A,ft.A,Lt.A,Ct.A,ht.A,pt.Q,_t.Ay,yt.A,bt.A,wt.A.configure({types:["heading","paragraph"]}),vt.A.configure({controls:!1})],content:this.modelValue,onUpdate:()=>{this.$emit("update:modelValue",this.editor.getHTML())},editorProps:{attributes:{spellcheck:"false"}}})},watch:{modelValue(e){this.editor.getHTML()!==e&&this.editor.commands.setContent(this.modelValue,!1)}},methods:{clearContent(){this.editor.commands.clearContent()},async addImage(e){const t=e.target.files[0];if(!t)return;const o=new FormData;o.append("image",t),await Y.A.post(At,o,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{const t=e.data.data.id,o=e.data.data.url;this.editor.chain().focus().setImage({src:o}).run(),console.log(t),console.log(o),this.$emit("imgurlHandle",o),this.$emit("imgIDHandle",t)})).catch((e=>{console.error("Image upload failed:",e)}))},addVideo(){const e=prompt("YouTube 주소를 입력하세요");e&&this.editor.commands.setYoutubeVideo({src:e})}},beforeUnmount(){this.editor.destroy()}};const St=(0,p.A)(It,[["render",gt]]);var Ft=St;const Ht="http://localhost:8500/blog";var $t={name:"BlogWrite",components:{TiptapCom:Ft},props:{write:Boolean},data(){return{result:{title:null,content:"",writer:this.$store.state.user,imgurl:"https://kr.object.ncloudstorage.com/gyulstorage/gyultree/IT_tid044t000819%20%281%29.jpg",imgID:null}}},methods:{clearFields(){this.result.title="",this.result.content="",this.result.writer="",this.result.imgurl="https://kr.object.ncloudstorage.com/gyulstorage/gyultree/IT_tid044t000819%20%281%29.jpg",this.result.imgID=null},reset(){this.$refs.editor.clearContent(),this.clearFields()},async onSubmit(){try{await Y.A.post(Ht,this.result).then((e=>{e.data.success?(console.log(e.data.data),this.$refs.editor.clearContent(),this.clearFields(),this.$emit("postSuccess",e.data.data)):console.error("error")}))}catch(e){console.error("Error fetching data:",e)}},updateImgUrl(e){this.result.imgurl=e},updateImgID(e){this.result.imgID=e}},watch:{result(){}}};const Et=(0,p.A)($t,[["render",N],["__scopeId","data-v-4eaa43d8"]]);var Vt=Et;const Xt="http://localhost:8500/blog";var Tt={name:"BlogView",data(){return{title:"blog",post:null,write:!1}},components:{SubtopCom:U,BlogWrite:Vt},methods:{async axiosHandle(){try{await Y.A.get(Xt).then((e=>{e.data.success?this.post=e.data.data:console.error("error")}))}catch(e){console.error("Error fetching data:",e)}},writeHandle(){this.write=!this.write},reloadhandle(){window.location.reload()}},mounted(){this.axiosHandle()}};const xt=(0,p.A)(Tt,[["render",x],["__scopeId","data-v-96cd5d24"]]);var jt=xt;const Dt=e=>((0,i.Qi)("data-v-17db8ae9"),e=e(),(0,i.jt)(),e),Ot=Dt((()=>(0,i.Lk)("section",{class:"sec1 sec","data-aos":"fade-up"},null,-1))),Bt={class:"sec sec2","data-aos":"fade-up"},Wt={class:"inner"},Ut=Dt((()=>(0,i.Lk)("h4",null,"blog",-1))),Pt={class:"img_wrap"},Rt=["src"];function Mt(e,t,o,n,l,a){const s=(0,i.g2)("router-link"),r=(0,i.g2)("swiper-slide"),c=(0,i.g2)("swiper");return(0,i.uX)(),(0,i.CE)(i.FK,null,[Ot,(0,i.Lk)("section",Bt,[(0,i.Lk)("div",Wt,[(0,i.Lk)("dl",null,[(0,i.Lk)("dt",null,[Ut,(0,i.bF)(s,{to:"/blog"},{default:(0,i.k6)((()=>[(0,i.eW)("전체보기 +")])),_:1})]),(0,i.bF)(c,{slidesPerView:1,spaceBetween:10,"space-between":50,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}},modules:n.modules,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.post,((e,t)=>((0,i.uX)(),(0,i.Wv)(r,{key:t,class:"dd"},{default:(0,i.k6)((()=>[(0,i.bF)(s,{to:"/detail/"+e.id},{default:(0,i.k6)((()=>[(0,i.Lk)("div",Pt,[(0,i.Lk)("img",{src:e.imgurl},null,8,Rt)]),(0,i.Lk)("h4",null,(0,H.v_)(e.title),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1},8,["modules","onSwiper","onSlideChange"])])])])],64)}var Kt=o(8421),Qt=o(317),Jt=o(3497),qt=o.n(Jt);const Nt="http://localhost:8500/blog";qt().init();var Yt={name:"HomeView",data(){return{post:null}},components:{Swiper:Kt.RC,SwiperSlide:Kt.qr},methods:{async axiosHandle(){try{await Y.A.get(Nt).then((e=>{e.data.success?this.post=e.data.data:console.error("error")}))}catch(e){console.error("Error fetching data:",e)}}},mounted(){this.axiosHandle()},setup(){const e=e=>{console.log(e)},t=()=>{console.log("slide change")};return{onSwiper:e,onSlideChange:t,modules:[Qt.dK]}}};const zt=(0,p.A)(Yt,[["render",Mt],["__scopeId","data-v-17db8ae9"]]);var Zt=zt;const Gt={key:0,class:"wrapper","data-aos":"fade-up"},eo={class:"top"},to={class:"info"},oo={class:"ctrl"},no=["innerHTML"];function io(e,t,o,n,l,a){const s=(0,i.g2)("SubtopCom"),r=(0,i.g2)("router-link"),c=(0,i.g2)("editCom"),u=(0,i.g2)("loading");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(s,{title:l.title},null,8,["title"]),l.post?((0,i.uX)(),(0,i.CE)("div",Gt,[(0,i.Lk)("div",eo,[(0,i.Lk)("h2",null,(0,H.v_)(l.post.title),1),(0,i.Lk)("div",to,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"작성자: "+(0,H.v_)(l.post.name),1),(0,i.Lk)("li",null,(0,H.v_)(l.formtime),1)]),(0,i.Lk)("div",oo,[(0,i.bF)(r,{to:"/blog"},{default:(0,i.k6)((()=>[(0,i.eW)("목록")])),_:1}),e.$store.state.user===l.post.name?((0,i.uX)(),(0,i.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>a.deleteHandle&&a.deleteHandle(...e))},"삭제")):(0,i.Q3)("",!0)])])]),(0,i.Lk)("div",{innerHTML:l.post.content,class:"content"},null,8,no),(0,i.bF)(c)])):((0,i.uX)(),(0,i.Wv)(u,{key:1}))],64)}o(4114);var lo={name:"DetailView",components:{SubtopCom:U},data(){return{title:"blog",post:null,formtime:null}},created(){const e=this.$route.params.id;this.axiosHandle(e)},methods:{async axiosHandle(e){const t=`http://localhost:8500/detail/${e}`;try{await Y.A.get(t).then((e=>{if(e.data.success){this.post=e.data.data[0];const t=new Date(this.post.time),o=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");this.formtime=`${o}-${n}-${i} ${l}:${a}`}else console.error("error")}))}catch(o){console.error("Error fetching data:",o)}},async deleteHandle(e){const t=`http://localhost:8500/detail/${e}`;try{const e=await Y.A.delete(t);e.data.success?(alert("게시글이 성공적으로 삭제되었습니다."),this.$router.push("/blog")):console.error("error")}catch(o){console.error("Error fetching data:",o)}}}};const ao=(0,p.A)(lo,[["render",io],["__scopeId","data-v-11bcb4a0"]]);var so=ao;const ro=e=>((0,i.Qi)("data-v-9b0ecfcc"),e=e(),(0,i.jt)(),e),co={class:"inner"},uo=ro((()=>(0,i.Lk)("img",{src:a},null,-1))),go=ro((()=>(0,i.Lk)("figcaption",null,"NOT FOUND",-1))),mo=[uo,go];function po(e,t,o,n,l,a){return(0,i.uX)(),(0,i.CE)("figure",co,mo)}var ho={name:"NotfoundView"};const ko=(0,p.A)(ho,[["render",po],["__scopeId","data-v-9b0ecfcc"]]);var vo=ko;const fo={class:"wrapper"},bo={key:0,class:"intro"},Lo={class:"btn_wrap"};function Co(e,t,o,l,a,s){const r=(0,i.g2)("SubtopCom"),c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(r,{title:a.title},null,8,["title"]),(0,i.Lk)("div",fo,[e.$store.state.user?((0,i.uX)(),(0,i.CE)("div",bo,[(0,i.Lk)("h3",null,(0,H.v_)(e.$store.state.user)+"님, 반갑습니다.",1)])):((0,i.uX)(),(0,i.CE)("form",{key:1,onSubmit:t[4]||(t[4]=(0,n.D$)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,i.bo)((0,i.Lk)("input",{ref:"useremailInput",type:"email",name:"useremail",placeholder:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.initial_state.useremail=e)},null,512),[[n.Jo,a.initial_state.useremail]]),(0,i.bo)((0,i.Lk)("input",{ref:"userpwdInput",type:"password",name:"userpwd",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.initial_state.userpwd=e)},null,512),[[n.Jo,a.initial_state.userpwd]]),(0,i.Lk)("div",Lo,[(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.handlelogin&&s.handlelogin(...e))},"로그인"),(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>s.handleReset&&s.handleReset(...e))},"취소"),(0,i.bF)(c,{to:"/register"},{default:(0,i.k6)((()=>[(0,i.eW)("회원가입")])),_:1})])],32))])],64)}var wo={name:"LoginView",components:{SubtopCom:U},data(){return{title:"로그인",initial_state:{useremail:"",userpwd:""}}},methods:{async handlelogin(){const e="http://localhost:8500/login";await Y.A.post(e,this.initial_state).then((e=>{if(e.data.success){localStorage.setItem("accessToken",e.data.accessToken),this.handleReset();let t=e.data.message;this.$store.dispatch("login",t)}else console.error(e.data.message)})).catch((e=>{console.error("Error during login:",e)}))},handleSubmit(e){e.preventDefault()},handleReset(){this.$refs.useremailInput.value="",this.$refs.userpwdInput.value="",this.$refs.useremailInput.focus()}}};const _o=(0,p.A)(wo,[["render",Co],["__scopeId","data-v-4b8440ea"]]);var yo=_o;const Ao={class:"wrapper"},Io={key:0,class:"intro"},So={class:"btn_wrap"};function Fo(e,t,o,l,a,s){const r=(0,i.g2)("SubtopCom");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(r,{title:a.title},null,8,["title"]),(0,i.Lk)("div",Ao,[e.$store.state.user?((0,i.uX)(),(0,i.CE)("div",Io,[(0,i.Lk)("h3",null,(0,H.v_)(e.$store.state.user)+"님, 반갑습니다.",1)])):((0,i.uX)(),(0,i.CE)("form",{key:1,onSubmit:t[5]||(t[5]=(0,n.D$)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,i.bo)((0,i.Lk)("input",{ref:"usernameInput",type:"text",name:"username",placeholder:"이름","onUpdate:modelValue":t[0]||(t[0]=e=>a.initial_state.username=e)},null,512),[[n.Jo,a.initial_state.username]]),(0,i.bo)((0,i.Lk)("input",{ref:"useremailInput",type:"email",name:"useremail",placeholder:"email","onUpdate:modelValue":t[1]||(t[1]=e=>a.initial_state.useremail=e)},null,512),[[n.Jo,a.initial_state.useremail]]),(0,i.bo)((0,i.Lk)("input",{ref:"userpwdInput",type:"password",name:"userpwd",placeholder:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.initial_state.userpwd=e)},null,512),[[n.Jo,a.initial_state.userpwd]]),(0,i.Lk)("div",So,[(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>s.handlelogin&&s.handlelogin(...e))},"회원가입"),(0,i.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>s.handleReset&&s.handleReset(...e))},"취소")])],32))])],64)}var Ho={name:"RegisterView",components:{SubtopCom:U},data(){return{title:"회원가입",initial_state:{username:"",useremail:"",userpwd:""}}},methods:{async handlelogin(){const e="http://localhost:8500/register";await Y.A.post(e,this.initial_state).then((e=>{if(e.data.success){localStorage.setItem("accessToken",e.data.accessToken),this.handleReset();let t=e.data.message;this.$store.dispatch("login",t)}else console.error(e.data.message)})).catch((e=>{console.error("Error during login:",e)}))},handleSubmit(e){e.preventDefault()},handleReset(){this.$refs.usernameInput.value="",this.$refs.useremailInput.value="",this.$refs.userpwdInput.value="",this.$refs.usernameInput.focus()}}};const $o=(0,p.A)(Ho,[["render",Fo],["__scopeId","data-v-44f4a85e"]]);var Eo=$o;const Vo=(0,F.aE)({history:(0,F.LA)(),routes:[{path:"/",component:Zt},{path:"/login",component:yo},{path:"/register",component:Eo},{path:"/blog",component:jt},{path:"/detail/:id",component:so},{path:"/:pathMatch(.*)*",component:vo}]});var Xo=Vo,To=o(782);const xo=(0,To.y$)({state(){return{user:null}},mutations:{setUser(e,t){e.user=t}},actions:{login({commit:e},t){e("setUser",t)}}});var jo=xo;const Do=(0,n.Ef)(S);Do.use(Xo).use(jo).mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<a&&(a=l));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,a=n[0],s=n[1],r=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(r)var u=r(o)}for(t&&t(n);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkgyultree"]=self["webpackChunkgyultree"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6172)}));n=o.O(n)})();
//# sourceMappingURL=app.19babc46.js.map