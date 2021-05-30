(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(8),a=n.n(i),s=(n(13),n(6)),o=n(2),d=n(3),l=n(5),u=n(4),j=(n(14),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",id:"drum-machine",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("p",{children:"Drum Machine"})}),Object(j.jsx)("body",{children:Object(j.jsx)(h,{})})]})}}]),n}(r.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={displayContent:"Initial value",drumKeys:[{triggerKey:"Q",id:"bellHigh"},{triggerKey:"W",id:"bellLow"},{triggerKey:"E",id:"closedHat"},{triggerKey:"A",id:"crash"},{triggerKey:"S",id:"openHat"},{triggerKey:"D",id:"rimShot"},{triggerKey:"Z",id:"snareHigh"},{triggerKey:"X",id:"snareLow"},{triggerKey:"C",id:"tamborine"}]},c.handleClick=c.handleClick.bind(Object(s.a)(c)),c.handleKeyDown=c.handleKeyDown.bind(Object(s.a)(c)),c}return Object(d.a)(n,[{key:"handleKeyDown",value:function(e){switch(e.key.toUpperCase()){case"Q":console.log("Q pressed");break;case"W":console.log("W pressed");break;case"E":console.log("E pressed");break;case"A":console.log("A pressed");break;case"S":console.log("S pressed");break;case"D":console.log("D pressed");break;case"Z":console.log("Z pressed");break;case"X":console.log("X pressed");break;case"C":console.log("C pressed")}document.getElementById(e.key.toUpperCase()).play(),this.setState({displayContent:e.key})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleClick",value:function(e){console.log(e.target),document.getElementById(e.target.innerText).play(),this.setState({displayContent:e.target.id})}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"drumMachine",children:[Object(j.jsx)("div",{id:"display",children:Object(j.jsx)(p,{content:this.state.displayContent})}),Object(j.jsx)("div",{id:"drumPads",children:Object(j.jsx)(y,{keyColl:this.state.drumKeys,clickHandler:this.handleClick})})]})}}]),n}(r.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("p",{children:this.props.content})}}]),n}(r.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.keyColl.map((function(t){return Object(j.jsx)(g,{clickHandler:e.props.clickHandler,keyObj:t})}));return Object(j.jsx)("div",{className:"drum-key-container",children:t})}}]),n}(r.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"drum-pad",id:this.props.keyObj.id,onClick:this.props.clickHandler,children:[Object(j.jsx)("p",{children:this.props.keyObj.triggerKey}),Object(j.jsx)("audio",{id:this.props.keyObj.triggerKey,className:"clip",type:"audio/wav",src:"/fcc-drum-machine"+"/drum-sounds/".concat(this.props.keyObj.id,".wav")})]})}}]),n}(r.a.Component),O=b,k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.c06b74b5.chunk.js.map