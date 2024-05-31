# 使用 git 的样板戏

在老机子上代码写惯了换成 linux 环境我又啥也不会了, 慎之,省之!

> 按照惯例感谢这些老哥:
> [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
>
> [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
>
> [How to save a file in vscode-remote SSH with a non-root user privileges](https://stackoverflow.com/questions/56291492/how-to-save-a-file-in-vscode-remote-ssh-with-a-non-root-user-privileges)

```bash
# step 1, -C 代表是注释, 里面随便填什么都行
ssh-keygen -t ed25519 -C "<邮箱>"
# 然后一路 enter 摁过去
```

> step 2
> 在.ssh 文件夹下找到密钥对的公钥文件, 然后复制下来

> step 3
> [github key settings](https://github.com/settings/keys)

按照文档的说法就已经好了,在 github 上新建 repo pull 过来也 ok, 但是在 vscode 上还有个小插曲

> 在 vscode ssh 连接使用非 root 用户由于权限不足不允许 save 文件
> VS Code: NoPermissions (FileSystemError): Error: EACCES: permission denied

简单粗暴解决一下

```bash
su root
chmod -R 777 .
```

这样就能保存文件了
