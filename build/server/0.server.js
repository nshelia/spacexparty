exports.ids=[0],exports.modules={50:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),u=t(31),i=t(13),c=t(23),a=t(30),f=t.n(a),l=t(58),s=t(57),p=t(55);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return!n||"object"!==b(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var v=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,d(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,o.a.Component),function(e,n,t){n&&y(e.prototype,n),t&&y(e,t)}(n,[{key:"renderList",value:function(){return this.props.isFetched?this.props.data.map(function(e,n){return o.a.createElement(l.a,{key:n,item:e})}):o.a.createElement(s.a,{count:this.props.limit})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.b,null,"Recent launches"),this.renderList())}}]),n}();!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(v,"defaultProps",{limit:10}),v.propTypes={limit:f.a.number.isRequired,isFetched:f.a.bool.isRequired,clearStoreAction:f.a.func.isRequired,data:f.a.arrayOf(f.a.shape({})),fetchRecentLaunchesRequestAction:f.a.func.isRequired};var g=v,O=t(18),w={fetchRecentLaunchesRequestAction:c.c,clearStoreAction:c.a},j=Object(u.connect)(function(e){return e[i.a]},w)(Object(O.frontloadConnect)(function(e){return e.fetchRecentLaunchesRequestAction(3)},{noServerRender:!1,onMount:!0,onUpdate:!1})(function(e){return o.a.createElement(g,e)})),x=t(12),E=t(49),_=t.n(E),S=t(33),R=t(3),P=t.n(R);function k(){var e=q(["\n  color: ",";\n  font-size: 30px;\n"]);return k=function(){return e},e}function C(){var e=q(["\n  min-height: 85px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return e},e}function T(){var e=q(["\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > span { display: block; }\n"]);return T=function(){return e},e}function q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var L=P()(p.a)(T()),z=P()(p.c)(C()),A=P.a.span(k(),function(e){return e.theme.blue});function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,n){return(N=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var M=function(e){function n(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=function(e,n){return!n||"object"!==F(n)&&"function"!=typeof n?I(e):n}(this,D(n).call(this))).countdownRenderer=e.countdownRenderer.bind(I(I(e))),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&N(e,n)}(n,o.a.PureComponent),function(e,n,t){n&&U(e.prototype,n),t&&U(e,t)}(n,[{key:"countdownRenderer",value:function(e){var n=e.hours,t=e.minutes,r=e.seconds;return e.completed?"You can watch live here":o.a.createElement(A,null,n,":",t,":",r)}},{key:"renderCountdown",value:function(){return this.props.isFetched?this.props.launchDateUTC?o.a.createElement(_.a,{date:this.props.launchDateUTC,renderer:this.countdownRenderer}):"TBC":o.a.createElement(S.a,null)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.b,null,"Upcoming launch"),o.a.createElement(L,null,o.a.createElement(z,null,this.renderCountdown())))}}]),n}();M.propTypes={clearStoreAction:f.a.func.isRequired,fetchNextLaunchRequestAction:f.a.func.isRequired,isFetched:f.a.bool.isRequired,launchDateUTC:f.a.string};var B=M,G=t(22),H={fetchNextLaunchRequestAction:G.c,clearStoreAction:G.a},Y=Object(u.connect)(function(e){return e[x.a]},H)(Object(O.frontloadConnect)(function(e){return e.fetchNextLaunchRequestAction()},{noServerRender:!1,onMount:!0,onUpdate:!1})(function(e){return o.a.createElement(B,e)})),J=t(19),K=t(56);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,n){return!n||"object"!==Q(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,n){return(Z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var $=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),W(this,X(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Z(e,n)}(n,o.a.Component),function(e,n,t){n&&V(e.prototype,n),t&&V(e,t)}(n,[{key:"render",value:function(){return o.a.createElement(K.a,null,o.a.createElement(J.Row,null,o.a.createElement(J.Col,{col:8},o.a.createElement(Y,null))),o.a.createElement(J.Row,null,o.a.createElement(J.Col,{col:8},o.a.createElement(j,null))))}}]),n}();t.d(n,"Home",function(){return $})},54:function(e,n,t){"use strict";t.d(n,"a",function(){return f}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return s});var r=t(3),o=t.n(r);function u(){var e=a(["\n  padding: 10px;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  p { text-align: center; }\n"]);return u=function(){return e},e}function i(){var e=a(["\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 120px;\n    height: 120px;\n    object-fit: cover;\n  }\n"]);return i=function(){return e},e}function c(){var e=a(["\n  display: flex;\n  overflow: hidden;\n  min-height: 130px;\n  background: #181c1f;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0 rgba(31, 39, 43);\n"]);return c=function(){return e},e}function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=o.a.div(c()),l=o.a.div(i()),s=o.a.div(u())},55:function(e,n,t){"use strict";t.d(n,"a",function(){return f}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return s});var r=t(3),o=t.n(r);function u(){var e=a(["\n  box-shadow: 0 3px 0 ",";\n  margin-bottom: 10px;\n  font-weight: bold;\n"]);return u=function(){return e},e}function i(){var e=a(["\n  background: ",";\n"]);return i=function(){return e},e}function c(){var e=a(["\n  position: relative;\n  padding: 10px;\n  border-radius: 5px;\n  background: ",";\n"]);return c=function(){return e},e}function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=o.a.div(c(),function(e){return e.theme.boxColor}),l=o()(f)(i(),function(e){return e.theme.black}),s=o()(f)(u(),function(e){return e.theme.boxShadowLight})},56:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(3),o=t.n(r);function u(){var e=c(["\n  animation: "," 0.3s forwards;\n"]);return u=function(){return e},e}function i(){var e=c(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]);return i=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=Object(r.keyframes)(i()),f=o.a.div(u(),a)},57:function(e,n,t){"use strict";var r=t(48),o=t.n(r),u=t(0),i=t.n(u),c=t(3),a=t.n(c),f=t(54);function l(){var e=b(["\n  padding: 10px;\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n\n  p { text-align: center; }\n"]);return l=function(){return e},e}function s(){var e=b(["\n  background: ",";\n  margin-bottom: 10px;\n\n  &:first-child {\n    width: 40%;\n    height: 10px;\n  }\n\n  &:last-child {\n    width: 70%;\n    height: 10px;\n  }\n"]);return s=function(){return e},e}function p(){var e=b(["\n  height: 130px;\n  width: 120px;\n  background: rgba(31, 39, 43);\n"]);return p=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y=a()(f.c)(p()),m=a.a.div(s(),function(e){return e.theme.darkGrey}),d=a.a.div(l()),h=function(e){return o()(0,e.count).map(function(e){return i.a.createElement(f.a,{className:"d-flex",key:e},i.a.createElement(y,null),i.a.createElement(d,null,i.a.createElement(m,null),i.a.createElement(m,null)))})};t.d(n,"a",function(){return h})},58:function(e,n,t){"use strict";var r=t(0),o=t.n(r),u=t(30),i=t.n(u),c=t(54);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,s(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,o.a.PureComponent),function(e,n,t){n&&f(e.prototype,n),t&&f(e,t)}(n,[{key:"renderLaunchImage",value:function(){var e=this.props.item;return e.links&&e.links.mission_patch_small?o.a.createElement(c.c,null,o.a.createElement("img",{src:e.links.mission_patch_small,alt:e.mission_name})):null}},{key:"renderLaunchDetails",value:function(){var e=this.props.item,n=e.details||e.description;return o.a.createElement("p",null,n)}},{key:"render",value:function(){var e=this.props.item;return o.a.createElement(c.a,null,this.renderLaunchImage(),o.a.createElement(c.b,null,o.a.createElement("h3",null,e.mission_name),this.renderLaunchDetails()))}}]),n}();b.propTypes={item:i.a.shape({mission_name:i.a.string.isRequired,links:i.a.shape({mission_patch_small:i.a.string})})},t.d(n,"a",function(){return b})}};