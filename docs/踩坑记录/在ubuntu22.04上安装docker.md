# ubuntu 安装 docker 的正确方法

由于网络原因无法通过 docker 官方的方法获取 gpg 密钥,需要用国内源

另外提一嘴,docker 的官方文档可以说写的有点烂, 点进 download 页面竟然跳出来的是 docker desktop 的安装方法

不说废话了, 感谢[这位知乎懂哥](https://zhuanlan.zhihu.com/p/588264423?utm_id=0)

```bash

## step 1
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/aliyun-docker.gpg

## step 2

echo \
 "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/aliyun-docker.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
 $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

## step 3

sudo apt update
sudo apt install -y docker-ce
```

看一下好了没

```bash
docker pull nginx
docker run --name docker-nginx -p 80:80 nginx
```

经典款大鹅问候
![经典大鹅问候](./nginx_welcome.png)

另外有些疑问:

- 下面评论区的 docker 下载脚本我没有试过,以后可以试试看

> 6/12/2024 补充
> 使用阿里云镜像加速
> 感谢这位大哥 [docker 设置国内镜像源](https://www.cnblogs.com/eddyz/p/17168828.html)

去下面的网址>镜像工具>镜像加速器按照手册操作即可, 需要阿里云账号
cr.console.aliyun.com

```bash
# 查看是否生效
docker info | grep ali
```
