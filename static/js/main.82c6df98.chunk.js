(this["webpackJsonpescape-room"]=this["webpackJsonpescape-room"]||[]).push([[0],{16:function(e,t,a){e.exports={pageWrapper:"BusinessPage_pageWrapper__1Y8Gp",contractTitle:"BusinessPage_contractTitle__2lrXe",contractSubheading:"BusinessPage_contractSubheading__18ZSt",contractText:"BusinessPage_contractText___hHEY",contractWrapper:"BusinessPage_contractWrapper__3Oj9K",businessContract:"BusinessPage_businessContract__200ju"}},22:function(e,t,a){e.exports={pageWrapper:"HomePage_pageWrapper__HxgDM",pageText:"HomePage_pageText__2sIJW",lockWrapper:"HomePage_lockWrapper__3fYwM",unlocklock:"HomePage_unlocklock__JMdF7",lock:"HomePage_lock__1MHW9",unlockedIcon:"HomePage_unlockedIcon__32XgC",lockIcon:"HomePage_lockIcon__2dMKF",resetButton:"HomePage_resetButton__1Bpch"}},31:function(e,t,a){e.exports={pageWrapper:"LightPage_pageWrapper__3pEl4",animePic:"LightPage_animePic__24uJW",hiddenText:"LightPage_hiddenText__vv_Sk",emphasis:"LightPage_emphasis__2bpqZ",quote:"LightPage_quote__2y9BW"}},38:function(e,t,a){e.exports={panelWrapper:"NpcDialog_panelWrapper__5i_zT",npcImage:"NpcDialog_npcImage__qySGG",npcProfile:"NpcDialog_npcProfile__iwC6n",npcName:"NpcDialog_npcName__12TnO",npcText:"NpcDialog_npcText__8WpEI",fadeIn:"NpcDialog_fadeIn__3TCIw"}},48:function(e,t,a){e.exports={pageWrapper:"CenterPage_pageWrapper__3mdzW",pageTitle:"CenterPage_pageTitle__3S3dV",clickWord:"CenterPage_clickWord__2X4IK"}},49:function(e,t,a){e.exports={pageWrapper:"EquationPage_pageWrapper__3DYBc",pageInstructions:"EquationPage_pageInstructions__1tWPI",pageTitle:"EquationPage_pageTitle__1qMWD"}},67:function(e,t,a){e.exports={buttonWrapper:"BackButton_buttonWrapper__U2FzU"}},78:function(e,t,a){},79:function(e,t,a){},8:function(e,t,a){e.exports={pageWrapper:"BlogPage_pageWrapper__Kb7o3",highlight:"BlogPage_highlight__1CS6S",blogTitle:"BlogPage_blogTitle__3uu1z",profileWrapper:"BlogPage_profileWrapper__2i_Rd",profilePic:"BlogPage_profilePic__1TXs7",profileText:"BlogPage_profileText__3sh85",blogTextWrapper:"BlogPage_blogTextWrapper__2znc7",blogText:"BlogPage_blogText__2m52c",commentsTitle:"BlogPage_commentsTitle__1YVnY",commentsContainer:"BlogPage_commentsContainer__HpfkX",inputWrapper:"BlogPage_inputWrapper__1k-2h",commentPic:"BlogPage_commentPic__1N_Iz",commentWrapper:"BlogPage_commentWrapper__1ORGJ",commentProfileWrapper:"BlogPage_commentProfileWrapper__hEiVt",commentText:"BlogPage_commentText__1PCgV",answerInput:"BlogPage_answerInput__1hAEk",answerButton:"BlogPage_answerButton__e4mdr"}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),o=a.n(c),i=(a(78),a(20)),r=(a(79),a(23)),l=a(6),h=a(22),u=a.n(h),d=a(66),g=a.n(d),p=a(65),j=a.n(p),m=a(126),b=a(38),f=a.n(b),x=a.p+"static/media/corgi.2f8705b3.jpg",_=a(120),O=a(2),v=Object(_.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),w=s.a.createContext();function k(e){return Object(O.jsxs)("div",{className:f.a.panelWrapper,children:[Object(O.jsxs)("div",{className:f.a.npcProfile,children:[Object(O.jsx)("img",{src:x,alt:"profile",className:f.a.npcImage}),Object(O.jsx)("div",{className:f.a.npcName,children:"Mr Borker"})]}),Object(O.jsx)("div",{className:f.a.npcText,children:e.text})]})}function N(e){var t=v();return Object(O.jsx)(m.a,{className:t.backdrop,open:e.showDialog,onClick:function(){e.setShowDialog(!1),e.callback()},children:function(){if(e.showDialog)return Object(O.jsx)(k,{text:e.dialogMessage})}()})}function T(e){var t=Object(l.f)();return"true"===window.localStorage.getItem("".concat(e.targetPage,"-completed"))?Object(O.jsx)("div",{className:u.a.unlocklock,children:Object(O.jsx)(j.a,{fontSize:"inherit",className:u.a.unlockedIcon})}):Object(O.jsx)("div",{className:u.a.lock,children:Object(O.jsx)(g.a,{fontSize:"inherit",onClick:function(){t.push(e.targetPage)},className:u.a.lockIcon})})}function P(){var e=Object(l.f)(),t=Object(n.useContext)(w),a=Object(n.useState)(Date.now()),s=Object(i.a)(a,2),c=s[0],o=s[1];Object(n.useEffect)((function(){"false"===window.localStorage.getItem("shownIntro")||null===window.localStorage.getItem("shownIntro")?t("Heyy BORK!!!What r u doin u intruder??",(function(){t("This place contains top secret information that\n          Ash has stored only to be read by Tashwasha!! So NO intruders!!!\n        ",(function(){t("What.....?",(function(){t("You say you are Tashawasha???",(function(){t("Well Mr Borker doesnt believe you...",(function(){t("Unless you prove that you are the real Tashawasha!\n                  I wont let you pass >:C\n                ",(function(){t("There are 5 puzzles here that only the real\n                    Tashawasha can solve. If you solve them - ill let u pass >:c\n                  ",(function(){window.localStorage.setItem("shownIntro",!0),o(Date.now())}))}))}))}))}))}))})):ne()&&"false"===window.localStorage.getItem("gameCompleted")&&t("WHAATTTTT!?!?!?",(function(){t("You completed all the puzzles????\n        ",(function(){t("Mr Borker doesnt know what to sayy....",(function(){t("I guesss.....",(function(){t("I guess you are the real Tashawasha thenn",(function(){t("Finee..\n                ",(function(){t("ill show you the secret page that Ash\n                  had written just for Tashawasha\n                  ",(function(){e.push("/secret")}))}))}))}))}))}))}))}),[c]);return Object(O.jsxs)("div",{className:u.a.pageWrapper,children:[Object(O.jsx)("div",{className:u.a.pageText,children:"true"===window.localStorage.getItem("gameCompleted")?"Thanks for playing!!! Press Reset Puzzle to play again.":'"Only for the REAL Tashawasha!!!" - Mr Borker'}),Object(O.jsxs)("div",{className:u.a.lockWrapper,children:[Object(O.jsx)(T,{targetPage:"/blog"}),Object(O.jsx)(T,{targetPage:"/equation"}),Object(O.jsx)(T,{targetPage:"/center"}),Object(O.jsx)(T,{targetPage:"/light/"}),Object(O.jsx)(T,{targetPage:"/business"})]}),Object(O.jsx)("button",{onClick:function(){ae(),o(Date.now())},variant:"contained",className:u.a.resetButton,children:"Reset Puzzle"})]})}var y=a(8),W=a.n(y),I=a.p+"static/media/tortoro.847df4ab.png",B=a.p+"static/media/bubbles.06c82659.png",S=a(67),C=a.n(S),A=a(68),H=a.n(A);function M(){var e=Object(l.f)();return Object(O.jsx)("div",{onClick:function(){return e.push("/")},className:C.a.buttonWrapper,children:Object(O.jsx)(H.a,{fontSize:"inherit"})})}function z(e){return Object(O.jsxs)("div",{className:W.a.commentWrapper,children:[Object(O.jsxs)("div",{className:W.a.commentProfileWrapper,children:[Object(O.jsx)("img",{className:W.a.commentPic,src:e.imgSrc,alt:"profile"}),Object(O.jsx)("div",{children:e.name})]}),Object(O.jsx)("div",{className:W.a.commentText,children:e.text})]})}function E(){var e=Object(l.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],o=Object(n.useContext)(w);return Object(O.jsxs)("div",{className:W.a.pageWrapper,children:[Object(O.jsx)(M,{}),Object(O.jsxs)("div",{className:W.a.profileWrapper,children:[Object(O.jsx)("img",{src:x,className:W.a.profilePic,alt:"corgi profile"}),Object(O.jsx)("div",{className:W.a.profileText,children:"A blog post by Mr Borker"})]}),Object(O.jsx)("div",{className:W.a.blogTitle,children:"Fried Chicken"}),Object(O.jsxs)("div",{className:W.a.blogTextWrapper,children:[Object(O.jsxs)("div",{className:W.a.blogText,children:[Object(O.jsx)("span",{className:W.a.highlight,children:"Even "}),"among the experts of the dietary world, it is agreed that",Object(O.jsx)("span",{className:W.a.highlight,children:" though "}),'fried chicken is not at the forefront of health, it is still beneficial in satisfying the "',Object(O.jsx)("span",{className:W.a.highlight,children:"I"}),'" . The average consumer of fried chicken',Object(O.jsx)("span",{className:W.a.highlight,children:" can't "}),"worry about taste and health at the same time and thus",Object(O.jsx)("span",{className:W.a.highlight,children:" eat "}),"it anyways."]}),Object(O.jsxs)("div",{className:W.a.blogText,children:["Another noticeable trend when eating fried chicken is to eat it with something containing",Object(O.jsx)("span",{className:W.a.highlight,children:" gluten "}),'for example, white bread. It makes such a delicious combination that one must confess "',Object(O.jsx)("span",{className:W.a.highlight,children:"I'm "}),'loving it" and "I\'m',Object(O.jsx)("span",{className:W.a.highlight,children:" gonna "}),'eat more". Furthermore, the combination of fried chicken and bread makes one',Object(O.jsx)("span",{className:W.a.highlight,children:" go around "}),"looking for more. Ultimately,",Object(O.jsx)("span",{className:W.a.highlight,children:" eating "}),"fried chicken is simply",Object(O.jsx)("span",{className:W.a.highlight,children:" delicious "}),"and it is the capstone of good",Object(O.jsx)("span",{className:W.a.highlight,children:" food "}),". Put it together",Object(O.jsx)("span",{className:W.a.highlight,children:" with "}),"white bread, and",Object(O.jsx)("span",{className:W.a.highlight,children:" you "}),"have got yourself a good meal."]})]}),Object(O.jsxs)("div",{className:W.a.commentsContainer,children:[Object(O.jsx)("div",{className:W.a.commentsTitle,children:"Comments"}),Object(O.jsx)(z,{imgSrc:I,text:"Fried Chicken is just soooo yummy!!",name:"Tortoro"}),Object(O.jsx)(z,{imgSrc:B,text:"Having Fried chicken and listening to cute songs is the vibe~",name:"Bubbles"}),Object(O.jsx)(z,{imgSrc:x,text:"Can anyone guess my favourite song to go with fried chicken???",name:"Mr Borker"}),Object(O.jsxs)("div",{className:W.a.inputWrapper,children:[Object(O.jsx)("input",{value:s,onChange:function(e){return c(e.target.value)},placeholder:"Write your comment here...",className:W.a.answerInput}),Object(O.jsx)("button",{onClick:function(){"some"!==s?o("\n      No!!! That's not Mr Borker's favourite song >:C You obviously aren't\n      the REAL Tashwasha >:c\n    "):o("Whaaa how did you know?? This song only Ash and Tashawasha \n        would know...\n      ",(function(){o("Hmmm not bad Ms Imposter >:c\n          ",(function(){window.localStorage.setItem("/blog-completed",!0),e.push("/")}))}))},className:W.a.answerButton,children:"Submit"})]})]})]})}var D=a(48),q=a.n(D);function J(){var e=Object(l.f)(),t=Object(n.useContext)(w);return Object(O.jsxs)("div",{className:q.a.pageWrapper,children:[Object(O.jsx)(M,{}),Object(O.jsxs)("div",{className:q.a.pageTitle,children:["The answer to the center lock is also the ",Object(O.jsx)("div",{onClick:function(){var a=prompt("");null!==a&&void 0!==a&&0!==a.length&&("christ"!==a?t('Ummm its obviously not "'.concat(a,'" Ms Imposter...')):t("What the Bork - How did you know??",(function(){t("Ash and Tashwasha wanted Christ to be the center\n            of the business deal because He is their Savior!! I can't believe\n            you know that ....\n          ",(function(){window.localStorage.setItem("/center-completed",!0),e.push("/")}))})))},className:q.a.clickWord,children:"center"})," of this business deal"]})]})}var Y=a(49),L=a.n(Y);function F(){var e=Object(l.f)(),t=Object(n.useContext)(w);return Object(n.useEffect)((function(){var a=function(a){38===a.keyCode&&t("Whatsss upp WATTSON!!!\n          ",(function(){t("Wow Mr Borker is surprised you\n              solved this super hard puzzle.....",(function(){window.localStorage.setItem("/equation-completed",!0),e.push("/")}))}))};return document.addEventListener("keydown",a,!1),function(){return document.removeEventListener("keydown",a,!1)}}),[e,t]),Object(O.jsxs)("div",{className:L.a.pageWrapper,children:[Object(O.jsx)(M,{}),Object(O.jsx)("div",{className:L.a.pageTitle,children:"\ud83e\udd37\u200d\u2642\ufe0f ____ voltage x amps\ud83c\udf1e"}),Object(O.jsx)("div",{className:L.a.pageInstructions,children:"Click it"})]})}var R=a(31),G=a.n(R),K=a.p+"static/media/anime.f6ead75b.jpg";function U(){return Object(O.jsxs)("div",{className:G.a.pageWrapper,children:[Object(O.jsx)(M,{}),Object(O.jsx)("img",{className:G.a.animePic,src:K,alt:"anime pic"}),Object(O.jsxs)("div",{className:G.a.quote,children:['"Hey Haruki, you know that Jesus is the light of the world, and there is no ',Object(O.jsx)("span",{className:G.a.emphasis,children:"high"}),"er ",Object(O.jsx)("span",{className:G.a.emphasis,children:"light"}),'" - Sakura']}),Object(O.jsx)("div",{className:G.a.hiddenText,children:'Enter the "organ" in this movie at the end of the url.'})]})}function X(){var e=Object(l.f)(),t=Object(n.useRef)(Object(n.useContext)(w));return Object(n.useEffect)((function(){t.current("Impossible!!! This is a cute movie that Ash and\n      Tashawasha watched!! How did you know??\n    ",(function(){window.localStorage.setItem("/light/-completed",!0),e.push("/")}))}),[t,e]),Object(O.jsx)("div",{})}var V=a(124),Z=a(16),Q=a.n(Z);function $(){var e=Object(l.f)(),t=Object(n.useContext)(w),a=Object(n.useState)(""),s=Object(i.a)(a,2),c=s[0],o=s[1];return Object(O.jsxs)("div",{className:Q.a.pageWrapper,children:[Object(O.jsx)(M,{}),Object(O.jsx)("div",{className:Q.a.businessContract,children:Object(O.jsxs)("div",{className:Q.a.contractWrapper,children:[Object(O.jsx)("div",{className:Q.a.contractTitle,children:"Business Partnership Agreement"}),Object(O.jsx)("div",{className:Q.a.contractSubheading,children:"Participants"}),Object(O.jsx)("div",{className:Q.a.contractText,children:'Between "A corporations" and "N.org"'}),Object(O.jsx)("div",{className:Q.a.contractSubheading,children:"Background"}),Object(O.jsx)("div",{className:Q.a.contractText,children:"A. The Partners wish to associate themselves as Partners in business."}),Object(O.jsx)("div",{className:Q.a.contractText,children:"B. This Agreement sets out the terms and conditions that govern the Partners within the Partnership"}),Object(O.jsx)("div",{className:Q.a.contractSubheading,children:"Terms and Conditions"}),Object(O.jsx)("div",{className:Q.a.contractText,children:"In consideration of and as a condition of the Partners entering into this agreement and other valuable consideration, the recipt and sufficiency of which consideration is acknowledge, the parties to this agreement agree as follows"}),Object(O.jsx)("div",{className:Q.a.contractSubheading,children:"Date the of Agreement activation"}),Object(O.jsx)(V.a,{type:"date",value:c,onChange:function(a){return function(a){o(a.target.value),"2021-05-18"===a.target.value&&t("\n        Borkkkkkk - How did you knoww when the business partnership between\n        Ash and Tashwasha began???? Mr Borker is very surprisedd...\n      ",(function(){window.localStorage.setItem("/business-completed",!0),e.push("/")}))}(a)}})]})})]})}function ee(){var e=Object(l.f)(),t=Object(n.useContext)(w);return Object(n.useEffect)((function(){t("Tada this is it!!!",(function(){t("Whatt .. you say the page is empty???\n      ",(function(){t("Well its because ....",(function(){t("Mr Borker is the secret page!!",(function(){t("\n              Ash told Mr Borker that he cares a lot about Tashwasha and\n              he knows the Tashawasha finds it hard during lockdown :c\n            ",(function(){t("So Ash decided to make a fun game for Tashawasha to \n              play!!!\n              ",(function(){t("Ash like cares about u soooo much and he likes want\n                the best for youuu\n                ",(function(){t("And so Ash hopes and prays that during lockdown, even\n                  through all the hard days ...\n                    ",(function(){t("You might keep trusting in Jesus!!\n                        ",(function(){t("Because Jesus is our solid rock!! And He sustains\n                          us through all the hard times!!\n                            ",(function(){t('It says in 2 Corinthians 4:17 that "our light and momentary troubles are achieving for us an eternal glory that far outweighs them all."\n                              ',(function(){t("And soo even when we can't see it, God actually uses these momentary trials to shape us and make us more like Jesus!!\n                              ",(function(){t("So keep clinging onto Him Tashawasha c:\n                                  ",(function(){t("And thanks for playing with Mr Borker c:\n                              ",(function(){t("Mr Borker will go home now!! Bai baii c:\n                              ",(function(){window.localStorage.setItem("gameCompleted",!0),e.push("/")}))}))}))}))}))}))}))}))}))}))}))}))}))}))}))}),[e]),Object(O.jsx)("div",{})}var te={"/blog-completed":!1,"/equation-completed":!1,"/center-completed":!1,"/light/-completed":!1,"/business-completed":!1,shownIntro:!1,gameCompleted:!1},ae=function(){for(var e=0,t=Object.keys(te);e<t.length;e++){var a=t[e];localStorage.setItem(a,te[a])}},ne=function(){for(var e=0,t=["/blog-completed","/equation-completed","/center-completed","/light/-completed","/business-completed"];e<t.length;e++){var a=t[e];if("false"===window.localStorage.getItem(a))return!1}return!0};var se=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),h=o[0],u=o[1],d=Object(n.useState)((function(){return function(){}})),g=Object(i.a)(d,2),p=g[0],j=g[1];return Object(n.useEffect)((function(){for(var e=0,t=Object.keys(te);e<t.length;e++){var a=t[e];null===localStorage.getItem(a)&&localStorage.setItem(a,te[a])}}),[]),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(N,{showDialog:a,setShowDialog:s,dialogMessage:h,callback:p}),Object(O.jsx)(w.Provider,{value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};u(e),j((function(){return t})),s(!0)},children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/secret",children:Object(O.jsx)(ee,{})}),Object(O.jsx)(l.a,{path:"/business",children:Object(O.jsx)($,{})}),Object(O.jsx)(l.a,{path:"/light/pancreas",children:Object(O.jsx)(X,{})}),Object(O.jsx)(l.a,{path:"/light/",children:Object(O.jsx)(U,{})}),Object(O.jsx)(l.a,{path:"/equation",children:Object(O.jsx)(F,{})}),Object(O.jsx)(l.a,{path:"/center",children:Object(O.jsx)(J,{})}),Object(O.jsx)(l.a,{path:"/blog",children:Object(O.jsx)(E,{})}),Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(P,{})})]})})]})};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(se,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.82c6df98.chunk.js.map