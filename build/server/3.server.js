exports.ids=[3],exports.modules={44:function(e,n,t){"use strict";t.r(n);var r=t(31),i=t(20),o=t(0),a=t.n(o),c=t(53),u=t(48),l=t.n(u),s=t(32),f=t(25),p=t(52);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,n){return!n||"object"!==d(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var v=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,b(n).apply(this,arguments))}var t,r,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,a.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){return this.props.fetchVehiclesRequestAction()}},{key:"renderShips",value:function(){if(this.props.isFetched)return this.props.ships.map(function(e,n){return a.a.createElement(c.a,{title:e.ship_name,details:e.home_port,image:e.image,key:n})})}},{key:"renderRockets",value:function(){if(this.props.isFetched)return this.props.rockets.reverse().map(function(e,n){return a.a.createElement(c.a,{title:e.rocket_name,details:e.description,image:e.flickr_images[0],key:n})})}},{key:"renderRoadster",value:function(){if(this.props.isFetched){var e=this.props.roadster;return a.a.createElement(c.a,{title:e.name,details:e.details,image:e.flickr_images[0]})}}},{key:"renderPlaceholders",value:function(){if(!this.props.isFetched)return a.a.createElement(p.a,{count:10})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.Helmet,null,a.a.createElement("title",null,"Vehicles")),a.a.createElement(f.b,null,"Vehicles"),this.renderPlaceholders(),this.renderRoadster(),this.renderRockets(),this.renderShips())}}])&&m(t.prototype,r),i&&m(t,i),n}();v.propTypes={isFetched:l.a.bool.isRequired,ships:l.a.arrayOf(l.a.object),rockets:l.a.arrayOf(l.a.object),roadster:l.a.object};var g=v,x=t(14),E={fetchVehiclesRequestAction:x.c,clearStoreAction:x.a};n.default=Object(r.connect)(function(e){return e[i.a]},E)(g)},51:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return f});var r=t(2),i=t.n(r);function o(){var e=u(["\n  padding: 10px;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  p { text-align: center; }\n"]);return o=function(){return e},e}function a(){var e=u(["\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    border-radius:5px;\n  }\n"]);return a=function(){return e},e}function c(){var e=u(["\n  display: flex;\n  overflow: hidden;\n  min-height: 130px;\n  background: #181c1f;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  box-shadow: 0 3px 0 rgba(31, 39, 43);\n"]);return c=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l=i.a.div(c()),s=i.a.div(a()),f=i.a.div(o())},52:function(e,n,t){"use strict";var r=t(49),i=t.n(r),o=t(0),a=t.n(o),c=t(2),u=t.n(c),l=t(51);function s(){var e=d(["\n  padding: 10px;\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n\n  p { text-align: center; }\n"]);return s=function(){return e},e}function f(){var e=d(["\n  background: ",";\n  margin-bottom: 10px;\n\n  &:first-child {\n    width: 40%;\n    height: 10px;\n  }\n\n  &:last-child {\n    width: 70%;\n    height: 10px;\n  }\n"]);return f=function(){return e},e}function p(){var e=d(["\n  height: 130px;\n  width: 120px;\n  background: rgba(31, 39, 43);\n"]);return p=function(){return e},e}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var m=u()(l.c)(p()),h=u.a.div(f(),function(e){return e.theme.darkGrey}),b=u.a.div(s()),y=function(e){return i()(0,e.count).map(function(e){return a.a.createElement(l.a,{className:"d-flex",key:e},a.a.createElement(m,null),a.a.createElement(b,null,a.a.createElement(h,null),a.a.createElement(h,null)))})};t.d(n,"a",function(){return y})},53:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=(t(48),t(51)),a=i.a.memo(function(e){var n,t,r;return i.a.createElement(o.a,null,(t=e.image,r=e.title,t?i.a.createElement(o.c,null,i.a.createElement("img",{src:t,alt:r})):null),i.a.createElement(o.b,null,i.a.createElement("h3",null,e.title),(n=e.details,i.a.createElement("p",null,n))))});t.d(n,"a",function(){return a})}};