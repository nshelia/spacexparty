exports.ids=[2],exports.modules={42:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(31),a=n(17),u=n(11),s=n(48),c=n.n(s),l=n(2),f=n.n(l),p=n(25),d=n(57),b=n.n(d),h=n(58),v=n.n(h);function m(){var t=_(["\n\t\tbackground: url(",") no-repeat;\n\t"]);return m=function(){return t},t}function y(){var t=_(["\n\t\tbackground: url(",") no-repeat;\n\t"]);return y=function(){return t},t}function x(){var t=_(["\n\theight:25px;\n\twidth:25px;\n\t","\n\t","\n"]);return x=function(){return t},t}function g(){var t=_(["\n\t\tleft:-30px;\n\t"]);return g=function(){return t},t}function w(){var t=_(["\n\t\tright:-30px;\n\t"]);return w=function(){return t},t}function O(){var t=_(["\n\t\t\tdisplay:none;\n\t\t"]);return O=function(){return t},t}function A(){var t=_(["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tpadding:0;\n\tdisplay:flex;\n\talign-items:center;\n\theight:100%;\n\tborder:none;\n\tbackground:none;\n\tz-index:2;\n\t","\n\t","\n\t","\n"]);return A=function(){return t},t}function j(){var t=_(["\n\tdisplay:flex;\n\ttransform: translate3d(0,0,0);\n\twill-change: transform;\n\ttransition: all 0.5s;\n"]);return j=function(){return t},t}function E(){var t=_(["\n\tmargin-bottom:10px;\n\tbackground: transparent;\n"]);return E=function(){return t},t}function k(){var t=_(["\n\twidth:200px;\n\theight:100px;\n\ttransition: all 0.5s;\n\tbackground:",";\n\tborder-radius:5px;\n\tflex: 0 0 auto;\n\tmax-width: inherit;\n\tmargin-right:10px;\n\tdisplay:flex;\n\talign-items:center;\n\tjustify-content:center;\n\tcolor:white;\n\tbox-shadow: 0px 2px 3px ",";\n\t&:last-child {\n\t\tmargin:0;\n\t}\n"]);return k=function(){return t},t}function S(){var t=_(["\n\tposition:relative;\n"]);return S=function(){return t},t}function P(){var t=_(["\n\tdisplay:flex;\n\tflex-wrap:nowrap;\n\toverflow-x: hidden;\n\tposition:relative;\n\tmargin-bottom:10px;\n\tpadding:5px;\n\tborder-radius:5px;\n"]);return P=function(){return t},t}function _(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var W=f.a.div(P()),R=f.a.div(S()),T=f.a.div(k(),function(t){return t.theme.lightText},function(t){return t.theme.boxShadowLight}),q=f()(p.a)(E()),C=f.a.div(j()),M=f.a.button(A(),function(t){return!t.visible&&Object(l.css)(O())},function(t){return t.nextArrow&&Object(l.css)(w())},function(t){return t.prevArrow&&Object(l.css)(g())}),z=f.a.div(x(),function(t){return t.nextArrow&&Object(l.css)(y(),b.a)},function(t){return t.prevArrow&&Object(l.css)(m(),v.a)});function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,t=!(r=L(e).call(this))||"object"!==X(r)&&"function"!=typeof r?H(n):r,B(H(H(t)),"state",{itemWidth:210,nextArrow:{visible:!0},prevArrow:{visible:!1},initialXPosition:0}),t.next=t.next.bind(H(H(t))),t.prev=t.prev.bind(H(H(t))),t.sliderWrapper=i.a.createRef(),t.sliderAnimator=i.a.createRef(),t}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,i.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){this.props.items.length*this.state.itemWidth<=this.getSliderWrapperWidth()&&this.setState({nextArrow:{visible:!1},prevArrow:{visible:!1}})}},{key:"getSliderWrapperWidth",value:function(){if(this.sliderWrapper.current)return this.sliderWrapper.current.clientWidth}},{key:"getSliderAnimator",value:function(){if(this.sliderAnimator.current)return getComputedStyle(this.sliderAnimator.current)}},{key:"next",value:function(){var t=this.sliderAnimator.current,e=this.state.initialXPosition-this.state.itemWidth,n=t.offsetWidth+e+10-this.getSliderWrapperWidth();n<this.state.itemWidth&&(e-=n,this.setState({nextArrow:{visible:!1}})),this.setTranslate(e,0,t),this.setState({initialXPosition:e,prevArrow:{visible:!0}})}},{key:"prev",value:function(){if(this.state.initialXPosition<0){var t=this.sliderAnimator.current,e=this.state.initialXPosition+this.state.itemWidth;e===Math.abs(e)&&(e=0),this.setTranslate(e,0,t),this.setState({initialXPosition:e,nextArrow:{visible:!0},prevArrow:{visible:0!==e}})}}},{key:"setTranslate",value:function(t,e,n){n.style.transform="translate3d(".concat(t,"px, ").concat(e,"px, 0)")}},{key:"renderList",value:function(){return this.props.items.map(function(t,e){return i.a.createElement(T,{key:e},i.a.createElement("span",null,t))})}},{key:"render",value:function(){var t=this.state,e=t.nextArrow,n=t.prevArrow;return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null,this.props.title),i.a.createElement(R,null,i.a.createElement(W,{ref:this.sliderWrapper},i.a.createElement(C,{ref:this.sliderAnimator},this.renderList())),i.a.createElement(M,{visible:e.visible,onClick:this.next,nextArrow:!0},i.a.createElement(z,{nextArrow:!0})),i.a.createElement(M,{visible:n.visible,prevArrow:!0,onClick:this.prev},i.a.createElement(z,{prevArrow:!0}))))}}])&&F(n.prototype,r),o&&F(n,o),e}();B(G,"propTypes",{items:c.a.arrayOf(c.a.string).isRequired,title:c.a.string.isRequired});var I=n(54);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var V=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,Q(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(e,i.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){this.props.fetchMissionsRequestAction()}},{key:"renderCarousels",value:function(){return this.props.isFetched?this.props.data.map(function(t,e){return i.a.createElement(G,{key:e,items:t.payload_ids,title:t.mission_name})}):i.a.createElement(I.a,{top:200})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.b,null,"Missions"),this.renderCarousels())}}])&&K(n.prototype,r),o&&K(n,o),e}();V.propTypes={limit:c.a.number.isRequired,isFetched:c.a.bool.isRequired,clearStoreAction:c.a.func.isRequired,data:c.a.arrayOf(c.a.shape({})),fetchMissionsRequestAction:c.a.func.isRequired};var Y=V,Z={fetchMissionsRequestAction:u.c,clearStoreAction:u.a},$=Object(o.connect)(function(t){return t[a.a]},Z)(Y),tt=n(32);function et(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(tt.Helmet,null,i.a.createElement("title",null,"Missions")),i.a.createElement($,null))}n.d(e,"default",function(){return et})},54:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(2),i=n.n(r),o=n(55),a=n.n(o);function u(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  width: 50px;\n  height: 50px;\n  background: url(",") no-repeat;\n  background-size: 50px 50px;\n  position: absolute;\n  top: ",";\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return u=function(){return t},t}var s=i.a.div(u(),a.a,function(t){return t.top?"".concat(t.top,"px"):"50%"})},55:function(t,e,n){t.exports=n.p+"tail-spin-4bd6025ff0af5053b5f95ea13b762359.svg"},57:function(t,e,n){t.exports=n.p+"right-arrow-f0b97a233f308d0bdcc5a9fd564bd076.svg"},58:function(t,e,n){t.exports=n.p+"left-arrow-c8a77d14eaf96d5431ffabceef482b8d.svg"}};