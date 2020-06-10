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


docker run \
--name=nginx02 \
-p 80:80 \
-p 443:443 \
-v /nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /nginx/logs:/var/log/nginx \
-v /nginx/html:/usr/share/nginx/html \
-v /nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf \
-v /nginx/conf.d/cert/:/etc/nginx/cert \
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

### 安装node_module包的异常
+ 家里的网络和ecs阿里云服务器使用npm安装 前提安装windows运行工具包
+ 公司的网络使用yarn

#### 安装python2.7和初始化windows工具依赖环境

+ [神坑](https://www.jianshu.com/p/a48e061ae8fd)
```shell script
yum install libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc
```

#### 网站缺陷更新日志
##### 2020.06.03篇

+ 1、文章与浏览处的统计是写死的，目前没有调用接口
+ 2、文章的图片十分模糊，变形严重
+ 3、文章标题应该使用一行显示，溢出显示省略号
+ 4、[13寸电脑屏幕分辨率](https://zhidao.baidu.com/question/1050739764072908379.html)最小的是1280*800px，要保证这个尺寸下不显示滚动条；768px之下才隐藏侧边导航；
+ 5、日期不需要显示时分秒
+ 6、友盟的流量网站统计接入
+ 7、粤公网安备
+ 8、置顶字段的添加
+ 9、搜索功能的添加
+ 10、去掉底部与该网站无关的内容
+ 11、rss链接的添加
+ 12、第三方github的登录的添加
+ 13、标签处接口的调用，颜色的随机色
+ 14、所有的文章与标签应该均是原创
+ 15、分类表的创建
+ 16、存档表的创建
+ 17、没加载到图片之前的高度稍微加长点
+ 18、关于我处的部分内容需要修改
+ 19、添加鼠标悬浮，背景变小的效果
+ 20、需求完毕


##### 2020.06.04篇

+ 1、顶部加载进度条 【完成】
+ 2、所有的文章还是以markdown的形式输出

##### 2020.06.05篇

+ 1、移动端格式化时间错误
+ 2、底部的提示语换成自已的 【完成】
+ 3、获取数据的加载进度 【暂时不做了】
+ 4、文章详情页的title必须加上文章标题【已完成】
+ 5、优化样式

##### 2020.06.06篇

+ 1、左侧菜单的过度效果

##### 2020.06.07篇

+ 1、分页功能的添加
+ 2、样式缺陷

##### 2020.06.08篇

+ 页面添加动态效果 pc端显示小泡泡，移动端显示彩带动图；
+ 页面显示卡通人物；添加点击的功能，参考D的博客
+ 优化滚动条的样式
+ 移动端下滑的时候菜单要出现
+ 添加性能狗的专区

##### 2020.06.10篇

+ 添加Valine云评论
+ 云账号：768449566@qq.com
+ 云密码：76