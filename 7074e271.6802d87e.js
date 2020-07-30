(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(216)),o={id:"debian10",title:"Debian 10"},l={id:"installation/debian10",title:"Debian 10",description:"These steps explain how to install Erxes on Debian 10.",source:"@site/docs/installation/debian10.md",permalink:"/installation/debian10",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/debian10.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1596095060,sidebar:"docs",previous:{title:"Ubuntu 18.04",permalink:"/installation/ubuntu"},next:{title:"CentOS 8",permalink:"/installation/centos8"}},c=[{value:"Installing erxes on Debian 10",id:"installing-erxes-on-debian-10",children:[]},{value:"Create an admin user",id:"create-an-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]},{value:"SSL integration",id:"ssl-integration",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These steps explain how to install Erxes on Debian 10."),Object(i.b)("h2",{id:"installing-erxes-on-debian-10"},"Installing erxes on Debian 10"),Object(i.b)("p",null,"To have erxes up and running quickly, you can follow the following steps."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Provision a new server running Debian 10.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to your new server as ",Object(i.b)("inlineCode",{parentName:"p"},"root")," account and run the following command."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'bash -c "$(wget -O - https://raw.githubusercontent.com/erxes/erxes/develop/scripts/install/debian10.sh)"')),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note"),": you will be asked to provide a domain for nginx server to set up config for erxes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to your domain DNS and create A record with your new server IP."))),Object(i.b)("h2",{id:"create-an-admin-user"},"Create an admin user"),Object(i.b)("p",null,"Switch to user ",Object(i.b)("inlineCode",{parentName:"p"},"erxes")," and run the following commands."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'su erxes\ncd ~/erxes.io/erxes-api/dist\nexport MONGO_URL="API_MONGO_URL"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"API_MONGO_URL")," - copy and paste the value of the ",Object(i.b)("inlineCode",{parentName:"li"},"MONGO_URL")," env var from erxes-api in the ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes.io/ecosystem.json"))),Object(i.b)("p",null,"The following will create an admin user ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")," with a random password. The password will be printed into your terminal."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"node commands/initProject\n")),Object(i.b)("h2",{id:"load-initial-data"},"Load initial data"),Object(i.b)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"node commands/loadPermissionData\n")),Object(i.b)("p",null,"Finally, you will need to restart erxes by running the following command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ~/erxes.io/\nnvm use default\npm2 restart ecosystem.json\n")),Object(i.b)("p",null,"Now you have erxes up and running!"),Object(i.b)("h2",{id:"ssl-integration"},"SSL integration"),Object(i.b)("p",null,"If you want to use ",Object(i.b)("inlineCode",{parentName:"p"},"erxes")," with HTTPS, please go to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-debian-10"}),"this article")," written by Digital Ocean, where you can install letsencrypt, free SSL certificate, to secure your nginx. But, it is up to you if you want to use different SSL provider."),Object(i.b)("p",null,"Once you have installed your ssl certificate, you need to update env vars."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to your server as ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," via ",Object(i.b)("inlineCode",{parentName:"li"},"ssh"),"."),Object(i.b)("li",{parentName:"ol"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"erxes/build/js/env.js")," file where env vars for frontend app are stored.\nThe content of the file should be as follows:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'window.env = {\n  PORT: 3000,\n  NODE_ENV: "production",\n  REACT_APP_API_URL: "https://your_domain/api",\n  REACT_APP_API_SUBSCRIPTION_URL: "wss://your_domain/api/subscriptions",\n  REACT_APP_CDN_HOST: "https://your_domain/widgets",\n};\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Update all env vars with HTTPS url in the ",Object(i.b)("inlineCode",{parentName:"li"},"ecosystem.json")," file."),Object(i.b)("li",{parentName:"ol"},"Finally, you need to restart pm2 erxes processes by running the following command:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pm2 restart ecosystem.json\n")),Object(i.b)("p",null,"If you need more information about pm2, please go to official documentation ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/"}),"here"),"."))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);