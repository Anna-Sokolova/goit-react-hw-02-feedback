(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__3hUh8",item:"Statistics_item__2bUpw",text:"Statistics_text__1rOAO",feedback:"Statistics_feedback__1sV0n",importantText:"Statistics_importantText__xD1UR"}},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(5),i=a.n(s),o=a(6),r=a(7),l=a(11),d=a(10),b=a(4),j=a.n(b),u=a(0),h=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:j.a.Section,children:[Object(u.jsx)("h3",{className:j.a.title,children:t}),a]})},x=a(8),m=a.n(x),p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)("button",{type:"button",name:e,className:m.a.btn,onClick:a,children:e[0].toUpperCase()+e.slice(1).toLowerCase()},e)}))},O=a(1),f=a.n(O),_=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(u.jsxs)("ul",{className:f.a.list,children:[Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("span",{className:f.a.text,children:"Good:"})," ",Object(u.jsx)("span",{className:f.a.feedback,children:t})]}),Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("span",{className:f.a.text,children:"Neutral:"})," ",Object(u.jsx)("span",{className:f.a.feedback,children:a})]}),Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("span",{className:f.a.text,children:"Bad:"})," ",Object(u.jsx)("span",{className:f.a.feedback,children:n})]}),Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("span",{className:f.a.text,children:"Total:"})," ",Object(u.jsx)("span",{className:f.a.importantText,children:c})]}),Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("span",{className:f.a.text,children:"Positive feedback:"})," ",Object(u.jsxs)("span",{className:f.a.importantText,children:[s," %"]})]})]})},k=a(9),N=a.n(k),v=function(e){var t=e.message;return Object(u.jsx)("p",{className:N.a.notice,children:t})},g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClickBtn=function(t){var a=t.target;"good"===a.name&&e.setState((function(e){return{good:e.good+1}})),"neutral"===a.name&&e.setState((function(e){return{neutral:e.neutral+1}})),"bad"===a.name&&e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return Math.round(100*e.state.good/t)},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.handleClickBtn})}),Object(u.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()?Object(u.jsx)(_,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(u.jsx)(v,{message:"No feedback given"})})]})}}]),a}(n.Component);a(17),a(18);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={Section:"Section_Section__1aSJf",title:"Section_title__MM5XY"}},8:function(e,t,a){e.exports={btn:"FeedbackOptions_btn__3_yB2"}},9:function(e,t,a){e.exports={notice:"Notification_notice__2PTjL"}}},[[19,1,2]]]);
//# sourceMappingURL=main.447e9d79.chunk.js.map