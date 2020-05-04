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
3. 打包成jar包
java -jar zip-blog-serve-1.0-SNAPSHOT.jar --server.port=80 > log.file 2>&1 &

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

docker run -p 80:80 --name nginx01 -d docker.io/nginx
```

#### 简介
+ 两个服务器
  + vps
  + 阿里云 
