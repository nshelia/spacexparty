(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{192:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(102),a=n(84),u=n(78),s=n(9),c=n.n(s),l=n(7),f=n(101),p=n(443),d=n.n(p),b=n(444),h=n.n(b);function v(){var t=k(["\n\t\tbackground: url(",") no-repeat;\n\t"]);return v=function(){return t},t}function m(){var t=k(["\n\t\tbackground: url(",") no-repeat;\n\t"]);return m=function(){return t},t}function y(){var t=k(["\n\theight:25px;\n\twidth:25px;\n\t","\n\t","\n"]);return y=function(){return t},t}function w(){var t=k(["\n\t\tleft:-30px;\n\t"]);return w=function(){return t},t}function x(){var t=k(["\n\t\tright:-30px;\n\t"]);return x=function(){return t},t}function g(){var t=k(["\n\t\t\tdisplay:none;\n\t\t"]);return g=function(){return t},t}function O(){var t=k(["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tpadding:0;\n\tdisplay:flex;\n\talign-items:center;\n\theight:100%;\n\tborder:none;\n\tbackground:none;\n\tz-index:2;\n\t","\n\t","\n\t","\n"]);return O=function(){return t},t}function A(){var t=k(["\n\tdisplay:flex;\n\ttransform: translate3d(0,0,0);\n\twill-change: transform;\n\ttransition: all 0.5s;\n"]);return A=function(){return t},t}function _(){var t=k(["\n\tmargin-bottom:10px;\n\tbackground: transparent;\n"]);return _=function(){return t},t}function j(){var t=k(["\n\twidth:200px;\n\theight:100px;\n\ttransition: all 0.5s;\n\tbackground:",";\n\tborder-radius:5px;\n\tflex: 0 0 auto;\n\tmax-width: inherit;\n\tmargin-right:10px;\n\tdisplay:flex;\n\talign-items:center;\n\tjustify-content:center;\n\tcolor:white;\n\tbox-shadow: 0px 2px 3px ",";\n\t&:last-child {\n\t\tmargin:0;\n\t}\n"]);return j=function(){return t},t}function E(){var t=k(["\n\tposition:relative;\n"]);return E=function(){return t},t}function S(){var t=k(["\n\tdisplay:flex;\n\tflex-wrap:nowrap;\n\toverflow-x: hidden;\n\tposition:relative;\n\tmargin-bottom:10px;\n\tpadding:5px;\n\tborder-radius:5px;\n"]);return S=function(){return t},t}function k(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var P=l.default.div(S()),W=l.default.div(E()),R=l.default.div(j(),function(t){return t.theme.lightText},function(t){return t.theme.boxShadowLight}),C=Object(l.default)(f.a)(_()),T=l.default.div(A()),q=l.default.button(O(),function(t){return!t.visible&&Object(l.css)(g())},function(t){return t.nextArrow&&Object(l.css)(x())},function(t){return t.prevArrow&&Object(l.css)(w())}),L=l.default.div(y(),function(t){return t.nextArrow&&Object(l.css)(m(),d.a)},function(t){return t.prevArrow&&Object(l.css)(v(),h.a)});function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,t=!(r=z(e).call(this))||"object"!==D(r)&&"function"!=typeof r?F(n):r,H(F(F(t)),"state",{itemWidth:210,nextArrow:{visible:!0},prevArrow:{visible:!1},initialXPosition:0}),t.next=t.next.bind(F(F(t))),t.prev=t.prev.bind(F(F(t))),t.sliderWrapper=i.a.createRef(),t.sliderAnimator=i.a.createRef(),t}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,i.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){this.props.items.length*this.state.itemWidth<=this.getSliderWrapperWidth()&&this.setState({nextArrow:{visible:!1},prevArrow:{visible:!1}})}},{key:"getSliderWrapperWidth",value:function(){if(this.sliderWrapper.current)return this.sliderWrapper.current.clientWidth}},{key:"getSliderAnimator",value:function(){if(this.sliderAnimator.current)return getComputedStyle(this.sliderAnimator.current)}},{key:"next",value:function(){var t=this.sliderAnimator.current,e=this.state.initialXPosition-this.state.itemWidth,n=t.offsetWidth+e+10-this.getSliderWrapperWidth();n<this.state.itemWidth&&(e-=n,this.setState({nextArrow:{visible:!1}})),this.setTranslate(e,0,t),this.setState({initialXPosition:e,prevArrow:{visible:!0}})}},{key:"prev",value:function(){if(this.state.initialXPosition<0){var t=this.sliderAnimator.current,e=this.state.initialXPosition+this.state.itemWidth;e===Math.abs(e)&&(e=0),this.setTranslate(e,0,t),this.setState({initialXPosition:e,nextArrow:{visible:!0},prevArrow:{visible:0!==e}})}}},{key:"setTranslate",value:function(t,e,n){n.style.transform="translate3d(".concat(t,"px, ").concat(e,"px, 0)")}},{key:"renderList",value:function(){return this.props.items.map(function(t,e){return i.a.createElement(R,{key:e},i.a.createElement("span",null,t))})}},{key:"render",value:function(){var t=this.state,e=t.nextArrow,n=t.prevArrow;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null,this.props.title),i.a.createElement(W,null,i.a.createElement(P,{ref:this.sliderWrapper},i.a.createElement(T,{ref:this.sliderAnimator},this.renderList())),i.a.createElement(q,{visible:e.visible,onClick:this.next,nextArrow:!0},i.a.createElement(L,{nextArrow:!0})),i.a.createElement(q,{visible:n.visible,prevArrow:!0,onClick:this.prev},i.a.createElement(L,{prevArrow:!0}))))}}])&&M(n.prototype,r),o&&M(n,o),e}();H(B,"propTypes",{items:c.a.arrayOf(c.a.string).isRequired,title:c.a.string.isRequired});var K=n(431);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function G(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,I(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,i.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){this.props.fetchMissionsRequestAction()}},{key:"renderCarousels",value:function(){return this.props.isFetched?this.props.data.map(function(t,e){return i.a.createElement(B,{key:e,items:t.payload_ids,title:t.mission_name})}):i.a.createElement(K.a,{top:200})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.b,null,"Missions"),this.renderCarousels())}}])&&U(n.prototype,r),o&&U(n,o),e}();Q.propTypes={limit:c.a.number.isRequired,isFetched:c.a.bool.isRequired,clearStoreAction:c.a.func.isRequired,data:c.a.arrayOf(c.a.shape({})),fetchMissionsRequestAction:c.a.func.isRequired};var V=Q,Y={fetchMissionsRequestAction:u.c,clearStoreAction:u.a},Z=Object(o.connect)(function(t){return t[a.a]},Y)(V),$=n(430);function tt(){return i.a.createElement(i.a.Fragment,null,i.a.createElement($.Helmet,null,i.a.createElement("title",null,"Missions")),i.a.createElement(Z,null))}n.d(e,"default",function(){return tt})},431:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(7),i=n(432),o=n.n(i);function a(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  width: 50px;\n  height: 50px;\n  background: url(",") no-repeat;\n  background-size: 50px 50px;\n  position: absolute;\n  top: ",";\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return a=function(){return t},t}var u=r.default.div(a(),o.a,function(t){return t.top?"".concat(t.top,"px"):"50%"})},432:function(t,e,n){t.exports=n.p+"tail-spin-4bd6025ff0af5053b5f95ea13b762359.svg"},443:function(t,e,n){t.exports=n.p+"right-arrow-f0b97a233f308d0bdcc5a9fd564bd076.svg"},444:function(t,e,n){t.exports=n.p+"left-arrow-c8a77d14eaf96d5431ffabceef482b8d.svg"}}]);