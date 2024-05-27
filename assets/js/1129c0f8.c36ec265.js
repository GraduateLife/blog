"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1213],{7921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var r=t(216),s=t(3339);const c={},o="ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5",u={id:"\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",title:"ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5",description:"\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u901a\u8fc7 docker \u5b98\u65b9\u7684\u65b9\u6cd5\u83b7\u53d6 gpg \u5bc6\u94a5,\u9700\u8981\u7528\u56fd\u5185\u6e90",source:"@site/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker.md",sourceDirName:"\u8e29\u5751\u8bb0\u5f55",slug:"/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",permalink:"/blog/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716792535e3,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Translate your site",permalink:"/blog/docs/tutorial-extras/translate-your-site"}},d={},i=[];function a(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ubuntu-\u5b89\u88c5-docker-\u7684\u6b63\u786e\u65b9\u6cd5",children:"ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u901a\u8fc7 docker \u5b98\u65b9\u7684\u65b9\u6cd5\u83b7\u53d6 gpg \u5bc6\u94a5,\u9700\u8981\u7528\u56fd\u5185\u6e90"}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u63d0\u4e00\u5634,docker \u7684\u5b98\u65b9\u6587\u6863\u53ef\u4ee5\u8bf4\u5199\u7684\u6709\u70b9\u70c2, \u70b9\u8fdb download \u9875\u9762\u7adf\u7136\u8df3\u51fa\u6765\u7684\u662f docker desktop \u7684\u5b89\u88c5\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8bf4\u5e9f\u8bdd\u4e86, \u611f\u8c22",(0,r.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/588264423?utm_id=0",children:"\u8fd9\u4f4d\u77e5\u4e4e\u61c2\u54e5"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n## step 1\ncurl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/aliyun-docker.gpg\n\n## step 2\n\necho \\\n "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/aliyun-docker.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n## step 3\n\nsudo apt update\nsudo apt install -y docker-ce\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u770b\u4e00\u4e0b\u597d\u4e86\u6ca1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull nginx\ndocker run --name docker-nginx -p 80:80 nginx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u5178\u6b3e\u5927\u9e45\u95ee\u5019\n",(0,r.jsx)(n.img,{alt:"\u7ecf\u5178\u5927\u9e45\u95ee\u5019",src:t(1665).A+"",width:"820",height:"366"})]}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u6709\u4e9b\u7591\u95ee:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6309\u7167\u6559\u7a0b\u8bbe\u7f6e\u955c\u50cf\u62c9\u53d6\u6e90\u4ee5\u540e\u901f\u5ea6\u597d\u50cf\u6ca1\u6709\u63d0\u5347,\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u6211\u641e\u9519\u4e86"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0b\u9762\u8bc4\u8bba\u533a\u7684 docker \u4e0b\u8f7d\u811a\u672c\u6211\u4e5f\u6ca1\u6709\u8bd5\u8fc7,\u4ee5\u540e\u53ef\u4ee5\u8bd5\u8bd5\u770b"}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1665:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/nginx_welcome-95a8c618bfa3d339c07deac6795171fd.png"},3339:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var r=t(6372);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);