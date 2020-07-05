(this["webpackJsonpgoit-react-hw-2-feedback"]=this["webpackJsonpgoit-react-hw-2-feedback"]||[]).push([[0],{18:function(e,n,t){e.exports=t(26)},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),u=t(3),l=t(8),i=t(9),m=t(10),b=t(15),s=t(11),f=t(16),v=t(1),d=t(2);function g(){var e=Object(v.a)(["\n  display: inline-block;\n  width: 0.01rem;\n  height: 00.1rem;\n  opacity: 0;\n  font-size: 0.01rem;\n"]);return g=function(){return e},e}function p(){var e=Object(v.a)(["\n  margin: 8rem;\n  max-width: 80rem;\n"]);return p=function(){return e},e}var h=d.a.div(p()),k=d.a.h1(g()),E=function(e){var n=e.children;return r.a.createElement(h,null,r.a.createElement(k,null,"Feedback"),n)};function j(){var e=Object(v.a)(["\n  font-size: 4rem;\n  margin-bottom: 3rem;\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  margin-bottom: 5rem;\n"]);return O=function(){return e},e}var w=d.a.section(O()),y=d.a.h2(j());var F=function(e){var n=e.title,t=e.children;return r.a.createElement(w,null,r.a.createElement(y,null,n),t)};function x(){var e=Object(v.a)(["\n  display: block;\n  margin-left: 3rem;\n  font-size: 2.4rem;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: none;\n  }\n"]);return x=function(){return e},e}var P=d.a.span(x());var z=function(e){var n=e.label,t=e.value;return r.a.createElement(P,null,n,": ",t)};var N=function(e){var n=e.good,t=e.neutral,a=e.bad,o=e.total,c=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{label:"Good",value:n}),r.a.createElement(z,{label:"Neutral",value:t}),r.a.createElement(z,{label:"Bad",value:a}),r.a.createElement(z,{label:"Total",value:o}),r.a.createElement(z,{label:"Positive feedback",value:"".concat(c,"%")}))};function S(){var e=Object(v.a)(["\n  text-transform: capitalize;\n  font-size: 2rem;\n  padding: 1rem;\n  border-radius: 2rem;\n  margin-left: 2rem;\n  background-color: snow;\n  &:hover,\n  &:focus {\n    background-color: #40c965;\n    color: snow;\n    border-color: #7a7a7a;\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n    outline: none;\n  }\n  &:active {\n    background-color: green;\n  }\n"]);return S=function(){return e},e}var T=d.a.button(S());var C=function(e){var n=e.options,t=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(T,{key:e,type:"button",onClick:function(){return t(e)}},e)})))};function J(){var e=Object(v.a)(["\n  margin-left: 3rem;\n  font-size: 2.4rem;\n"]);return J=function(){return e},e}var L=d.a.p(J());var q=function(e){var n=e.message;return r.a.createElement(L,null,n)},A=(t(25),{good:0,neutral:0,bad:0}),B=["good","neutral","bad"],G=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(b.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state=Object(l.a)({},A),t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(e,n){return e+n}),0)},t.countPositiveFeedbackPercentage=function(e,n){var t=100*n/e;isNaN(t)&&(t=0);var a=t.toFixed();return Number(a)},t.increment=function(e){t.setState((function(n){return Object(u.a)({},e,n[e]+1)}))},t}return Object(f.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.good,t=e.neutral,a=e.bad,o=this.countTotalFeedback(),c=this.countPositiveFeedbackPercentage(o,n);return r.a.createElement(E,null,r.a.createElement(F,{title:"Please leave feedback"},r.a.createElement(C,{options:B,onLeaveFeedback:this.increment})),r.a.createElement(F,{title:"Statistics"},0===o?r.a.createElement(q,{message:"No feedback given"}):r.a.createElement(N,{good:n,neutral:t,bad:a,total:o,positivePercentage:c})))}}]),n}(a.Component);c.a.render(r.a.createElement(G,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4375a639.chunk.js.map