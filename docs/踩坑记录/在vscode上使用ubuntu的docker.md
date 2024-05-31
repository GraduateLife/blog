# 在 vscode 上使用 ubuntu 的 docker

上次在 ubuntu22 上装 docker 以后就愉快地去学 ubuntu 了, 在远程连接的时候 vscode 的 docker extension 抱怨 is docker running(具体的话记不得了),我找了一些资料希望能给自己或者其他遇到这种问题的伙伴一点帮助

> 感谢这位 sf 的大哥 [Failed to connect. Is Docker running? (Vs Code)](https://stackoverflow.com/questions/69530014/failed-to-connect-is-docker-running-vs-code)

```bash
 # step 1, 打开docker的配置文件
sudo nano /usr/lib/systemd/system/docker.service

# step 2, 在 [Service]这一块的最后加上这些
SupplementaryGroups=docker
ExecStartPost=/bin/chmod 666 /var/run/docker.sock
# 保存退出

# step 3 重启docker的后台进程使配置生效
systemctl daemon-reload
systemctl restart docker.service
```

似乎没问题了, 但是 docker extension 这次的抱怨使 permission denied, 这是由于我上次装 docker 是 su root 以后装的,没有给默认用户权限, 既然这篇帖子里也说了我们也做一下

```bash
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
```

再次查看 docker extension,这次就没有问题了
