"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1970],{2420:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var t=o(216),s=o(3339);const c={},r="\u5728 vscode \u4e0a\u4f7f\u7528 ubuntu \u7684 docker",d={id:"\u8e29\u5751\u8bb0\u5f55/\u5728vscode\u4e0a\u4f7f\u7528ubuntu\u7684docker",title:"\u5728 vscode \u4e0a\u4f7f\u7528 ubuntu \u7684 docker",description:"\u4e0a\u6b21\u5728 ubuntu22 \u4e0a\u88c5 docker \u4ee5\u540e\u5c31\u6109\u5feb\u5730\u53bb\u5b66 ubuntu \u4e86, \u5728\u8fdc\u7a0b\u8fde\u63a5\u7684\u65f6\u5019 vscode \u7684 docker extension \u62b1\u6028 is docker running(\u5177\u4f53\u7684\u8bdd\u8bb0\u4e0d\u5f97\u4e86),\u6211\u627e\u4e86\u4e00\u4e9b\u8d44\u6599\u5e0c\u671b\u80fd\u7ed9\u81ea\u5df1\u6216\u8005\u5176\u4ed6\u9047\u5230\u8fd9\u79cd\u95ee\u9898\u7684\u4f19\u4f34\u4e00\u70b9\u5e2e\u52a9",source:"@site/docs/\u8e29\u5751\u8bb0\u5f55/\u5728vscode\u4e0a\u4f7f\u7528ubuntu\u7684docker.md",sourceDirName:"\u8e29\u5751\u8bb0\u5f55",slug:"/\u8e29\u5751\u8bb0\u5f55/\u5728vscode\u4e0a\u4f7f\u7528ubuntu\u7684docker",permalink:"/blog/docs/\u8e29\u5751\u8bb0\u5f55/\u5728vscode\u4e0a\u4f7f\u7528ubuntu\u7684docker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1717142843e3,frontMatter:{},sidebar:"autoSidebar",previous:{title:"ubuntu \u5b89\u88c5 docker \u7684\u6b63\u786e\u65b9\u6cd5",permalink:"/blog/docs/\u8e29\u5751\u8bb0\u5f55/\u5728ubuntu22.04\u4e0a\u5b89\u88c5docker"}},u={},i=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5728-vscode-\u4e0a\u4f7f\u7528-ubuntu-\u7684-docker",children:"\u5728 vscode \u4e0a\u4f7f\u7528 ubuntu \u7684 docker"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u6b21\u5728 ubuntu22 \u4e0a\u88c5 docker \u4ee5\u540e\u5c31\u6109\u5feb\u5730\u53bb\u5b66 ubuntu \u4e86, \u5728\u8fdc\u7a0b\u8fde\u63a5\u7684\u65f6\u5019 vscode \u7684 docker extension \u62b1\u6028 is docker running(\u5177\u4f53\u7684\u8bdd\u8bb0\u4e0d\u5f97\u4e86),\u6211\u627e\u4e86\u4e00\u4e9b\u8d44\u6599\u5e0c\u671b\u80fd\u7ed9\u81ea\u5df1\u6216\u8005\u5176\u4ed6\u9047\u5230\u8fd9\u79cd\u95ee\u9898\u7684\u4f19\u4f34\u4e00\u70b9\u5e2e\u52a9"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u611f\u8c22\u8fd9\u4f4d sf \u7684\u5927\u54e5 ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/69530014/failed-to-connect-is-docker-running-vs-code",children:"Failed to connect. Is Docker running? (Vs Code)"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" # step 1, \u6253\u5f00docker\u7684\u914d\u7f6e\u6587\u4ef6\nsudo nano /usr/lib/systemd/system/docker.service\n\n# step 2, \u5728 [Service]\u8fd9\u4e00\u5757\u7684\u6700\u540e\u52a0\u4e0a\u8fd9\u4e9b\nSupplementaryGroups=docker\nExecStartPost=/bin/chmod 666 /var/run/docker.sock\n# \u4fdd\u5b58\u9000\u51fa\n\n# step 3 \u91cd\u542fdocker\u7684\u540e\u53f0\u8fdb\u7a0b\u4f7f\u914d\u7f6e\u751f\u6548\nsystemctl daemon-reload\nsystemctl restart docker.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f3c\u4e4e\u6ca1\u95ee\u9898\u4e86, \u4f46\u662f docker extension \u8fd9\u6b21\u7684\u62b1\u6028\u4f7f permission denied, \u8fd9\u662f\u7531\u4e8e\u6211\u4e0a\u6b21\u88c5 docker \u662f su root \u4ee5\u540e\u88c5\u7684,\u6ca1\u6709\u7ed9\u9ed8\u8ba4\u7528\u6237\u6743\u9650, \u65e2\u7136\u8fd9\u7bc7\u5e16\u5b50\u91cc\u4e5f\u8bf4\u4e86\u6211\u4eec\u4e5f\u505a\u4e00\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo gpasswd -a $USER docker\nnewgrp docker\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518d\u6b21\u67e5\u770b docker extension,\u8fd9\u6b21\u5c31\u6ca1\u6709\u95ee\u9898\u4e86"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3339:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(6372);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);