# pnpm 镜像源报错怎么办?

今天代码的时候 pnpm 报了以下错误:

This modules directory was created using the following registries configuration: {"default":"https://registry.npmjs.org/"}. The current configuration is {"default":"https://registry.npmmirror.com/"}. To recreate the modules directory using the new settings, run "pnpm install".

根据 [相关 github issue](https://github.com/pnpm/pnpm/issues/3361),使用以下命令:

```bash
pnpm install -g
pnpm install -g pnpm
```

就...没用!😥

在项目最开始的时候确实是 npm 的官方源,但是之后下某个依赖的时候由于太卡换成了 npmmirror(不喜欢 nrm 这种侵入性太强的东西),结果就报了这个错误

这么一分析,那反向操作即可:

```bash
npm set registry https://registry.npmjs.org/
```

果然 🆗!
