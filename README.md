# zipBlog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 项目名称
+ zipBlog

#### 开发个人博客
+ 前端：vue + vue-cli + vue-router + vuex + axios
+ 后端：springboot + mybatis + mysql

#### 前后端代码托管

+ [前台](https://gitee.com/mcan/zipBlog.git)
+ [后台](https://gitee.com/mcan/zipBlogServer.git)

#### 部署线上

```shell script
1. 购买云虚拟主机
CentOS 7.3 64位
2. 配置java运行环境以及docker
java
yum install java-1.8.0-openjdk 运行环境
yum install java-1.8.0-openjdk-devel.x86_64 开发环境
docker
yum update
yum install docker

终止8080端口
netstat -tunlp|grep 8080
kill 01 pid

3. 打包成jar包
nohup java -jar zip-blog-serve-0.0.1-SNAPSHOT.jar --server.port=8080 &

4. 运行即可
5. 检查防火墙
systemctl status firewalld
service firewalld stop
6.配置入方向安全组
121.199.58.113
3306
7. 静态资源放在nginx下
8. 后端接口放在tomcat下
9. 云服务器需要装的node,git,nginx环境
yum install -y nodejs
yum install -y git
docker pull nginx
10. 将静态资源部署到nginx上

docker run \
--name=nginx01 \
-p 80:80 \
-v /nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /nginx/logs:/var/log/nginx \
-v /nginx/html:/usr/share/nginx/html \
-v /nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf \
-d nginx
```

#### 简介
+ 两个服务器
  + vps
  + 阿里云 
#### tips

+ 快速删除node包
````shell script
全局代理
npm config set registry https://registry.npm.taobao.org
cnpm install rimraf -g 
// 使用命令删除 
rimraf node_modules // 也可以删除其它文件夹或文件
jarb上传工具
yum -y install lrzsz
rz -y

````  
[node的版本太低的解决方式](https://segmentfault.com/a/1190000015302680)

#### 成功


#### 接入云评论
```shell script
#npm install --save vuepress-plugin-comment
npm install valine --save

git config --global https.proxy 127.0.0.1:12639
git config --global http.proxy 127.0.0.1:12639
```

#### 强制复制的命令
```shell script
\cp -rf dist/* /nginx/html/web/ 
success
 yarn serve --port 8000
```


