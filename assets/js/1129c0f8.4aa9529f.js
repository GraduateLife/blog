"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1213],{7921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var r=t(216),c=t(3339);const s={},o="ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5",u={id:"\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",title:"ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5",description:"\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u901a\u8fc7 docker \u5b98\u65b9\u7684\u65b9\u6cd5\u83b7\u53d6 gpg \u5bc6\u94a5,\u9700\u8981\u7528\u56fd\u5185\u6e90",source:"@site/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker.md",sourceDirName:"\u8e29\u5751\u8bb0\u5f55",slug:"/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",permalink:"/blog/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1720777711e3,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Translate your site",permalink:"/blog/docs/tutorial-extras/translate-your-site"},next:{title:"\u4e24\u53e5\u547d\u4ee4\u5728 ubuntu \u4e0a\u4e0b\u8f7d go",permalink:"/blog/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu\u4e0a\u4e0b\u8f7dgo"}},d={},i=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ubuntu-\u5b89\u88c5-docker-\u7684\u6b63\u786e\u65b9\u6cd5",children:"ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u901a\u8fc7 docker \u5b98\u65b9\u7684\u65b9\u6cd5\u83b7\u53d6 gpg \u5bc6\u94a5,\u9700\u8981\u7528\u56fd\u5185\u6e90"}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u63d0\u4e00\u5634,docker \u7684\u5b98\u65b9\u6587\u6863\u53ef\u4ee5\u8bf4\u5199\u7684\u6709\u70b9\u70c2, \u70b9\u8fdb download \u9875\u9762\u7adf\u7136\u8df3\u51fa\u6765\u7684\u662f docker desktop \u7684\u5b89\u88c5\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8bf4\u5e9f\u8bdd\u4e86, \u611f\u8c22",(0,r.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/588264423?utm_id=0",children:"\u8fd9\u4f4d\u77e5\u4e4e\u61c2\u54e5"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n## step 1\ncurl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/aliyun-docker.gpg\n\n## step 2\n\necho \\\n "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/aliyun-docker.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n## step 3\n\nsudo apt update\nsudo apt install -y docker-ce\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u770b\u4e00\u4e0b\u597d\u4e86\u6ca1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull nginx\ndocker run --name docker-nginx -p 80:80 nginx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u5178\u6b3e\u5927\u9e45\u95ee\u5019\n",(0,r.jsx)(n.img,{alt:"\u7ecf\u5178\u5927\u9e45\u95ee\u5019",src:t(1665).A+"",width:"820",height:"366"})]}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u6709\u4e9b\u7591\u95ee:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0b\u9762\u8bc4\u8bba\u533a\u7684 docker \u4e0b\u8f7d\u811a\u672c\u6211\u6ca1\u6709\u8bd5\u8fc7,\u4ee5\u540e\u53ef\u4ee5\u8bd5\u8bd5\u770b"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["6/12/2024 \u8865\u5145\n\u4f7f\u7528\u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f\n\u611f\u8c22\u8fd9\u4f4d\u5927\u54e5 ",(0,r.jsx)(n.a,{href:"https://www.cnblogs.com/eddyz/p/17168828.html",children:"docker \u8bbe\u7f6e\u56fd\u5185\u955c\u50cf\u6e90"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53bb\u4e0b\u9762\u7684\u7f51\u5740>\u955c\u50cf\u5de5\u5177>\u955c\u50cf\u52a0\u901f\u5668\u6309\u7167\u624b\u518c\u64cd\u4f5c\u5373\u53ef, \u9700\u8981\u963f\u91cc\u4e91\u8d26\u53f7\ncr.console.aliyun.com"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u662f\u5426\u751f\u6548\ndocker info | grep ali\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1665:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/nginx_welcome-95a8c618bfa3d339c07deac6795171fd.png"},3339:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var r=t(6372);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);