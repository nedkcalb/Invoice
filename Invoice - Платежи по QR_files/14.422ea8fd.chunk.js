(this["webpackJsonpinvoice_v0.1"]=this["webpackJsonpinvoice_v0.1"]||[]).push([[14],{41:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return u}));var n=a(1),r=a(54),i=a.n(r),o=a(0),c=a.n(o),s=c.a.createContext({});s.Consumer,s.Provider;function l(e,t){var a=Object(o.useContext)(s);return e||a[t]||t}function u(e,t){"string"===typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,r=t,o=r.prefix,s=r.forwardRefAs,u=void 0===s?a?"ref":"innerRef":s;return i()((function(t,a){var r=Object(n.a)({},t);r[u]=a;var i=l(r.bsPrefix,o);return c.a.createElement(e,Object(n.a)({},r,{bsPrefix:i}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},477:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(73);t.default=function(e){var t=e.onSubmit,a=e.value,n=e.onChange,o=e.codeError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return t(e)},className:"text-center"},r.a.createElement("label",{className:"mt-3"},"\u0412\u0430\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e SMS \u0441 \u043a\u043e\u0434\u043e\u043c, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:"),r.a.createElement("div",{className:"row justify-content-center mb-3"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("input",{type:"text",name:"code",value:a,onChange:function(e){return n(e)},className:"request-input",placeholder:"\u041a\u043e\u0434 \u0438\u0437 SMS",style:{width:"150px"}}),r.a.createElement(i.a,{type:"submit",variant:"default-2",className:"ml-2",style:{width:"71px",height:"34px"}},"OK"))),o&&r.a.createElement("span",{className:"text-danger font-13"},o)))}},53:function(e,t,a){"use strict";var n=a(1),r=a(7),i=a(0),o=a.n(i),c=a(49);function s(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,l=e.disabled,u=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,a=f.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():a&&a(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},54:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,o=a.allowFallback,c=void 0!==o&&o,s=a.displayName,l=void 0===s?e.name||e.displayName:s,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:l,propTypes:n,defaultProps:i})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},73:function(e,t,a){"use strict";var n=a(1),r=a(7),i=a(40),o=a.n(i),c=a(0),s=a.n(c),l=a(41),u=a(53),f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,c=e.size,f=e.active,d=e.className,p=e.block,m=e.type,v=e.as,b=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.b)(a,"btn"),N=o()(d,y,f&&"active",y+"-"+i,p&&y+"-block",c&&y+"-"+c);if(b.href)return s.a.createElement(u.a,Object(n.a)({},b,{as:v,ref:t,className:o()(N,b.disabled&&"disabled")}));t&&(b.ref=t),v||(b.type=m);var h=v||"button";return s.a.createElement(h,Object(n.a)({},b,{className:N}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f}}]);
//# sourceMappingURL=14.422ea8fd.chunk.js.map