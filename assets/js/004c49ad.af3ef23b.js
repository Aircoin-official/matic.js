(self.webpackChunkmatic_js_docs=self.webpackChunkmatic_js_docs||[]).push([[3314],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2082:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:5},p="Deposit Ethers",l={unversionedId:"pos/depositEtherForUser",id:"version-2.0.x/pos/depositEtherForUser",isDocsHomePage:!1,title:"Deposit Ethers",description:"`js",source:"@site/versioned_docs/version-2.0.x/pos/depositEtherForUser.md",sourceDirName:"pos",slug:"/pos/depositEtherForUser",permalink:"/matic.js/docs/pos/depositEtherForUser",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/versioned_docs/version-2.0.x/pos/depositEtherForUser.md",version:"2.0.x",lastUpdatedBy:"ujjwalgupta94",lastUpdatedAt:1628081349,formattedLastUpdatedAt:"8/4/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-2.0.x/docs",previous:{title:"Exit ERC1155",permalink:"/matic.js/docs/pos/ERC1155/exitERC1155"}},c=[],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deposit-ethers"},"Deposit Ethers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"maticPOSClient.depositEtherForUser(rootToken, user, amount, options)\n")),(0,i.kt)("p",null,"Deposit given ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"rootToken")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," via POS Portal."),(0,i.kt)("p",null,"Deposit given ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," of ETH for ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," via POS Portal.\nETH is an ERC20 token on Matic chain, follow ERC20 ",(0,i.kt)("a",{parentName:"p",href:"#pos-burnERC20"},"burn")," and ",(0,i.kt)("a",{parentName:"p",href:"#pos-exitERC20"},"exit")," to withdraw it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," must be valid account address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," must be ETH amount in wei (string, not in Number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,i.kt)("p",null,"This returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const user = <your-address> or <any-account-address>\n\nmaticPOSClient.depositEtherForUser(user, '1000000000000000000', {\n  from: '0xABc578455...'\n})\n")),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);