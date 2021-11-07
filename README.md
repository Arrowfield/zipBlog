#### 开发个人博客
+ 前端：vue + vue-cli + vue-router + vuex + axios
+ 后端：springboot + mybatis + mysql
#### 前后端代码托管
+ [前台](https://gitee.com/mcan/zipBlog.git)
+ [后台](https://gitee.com/mcan/zipBlogServer.git)
#### 部署线上
如果有安装错误的node_modules依赖包，可以使用rimraf删除
```shell script
# 全局安装yarn
npm install -g yarn --registry=https://registry.npm.taobao.org
yarn install
yarn serve
# 打包
yarn build
```
#### 简介
+ 两个服务器：vps 阿里云 
#### tips
+ 快速删除node包
````shell script
#全局代理
npm config set registry https://registry.npm.taobao.org
cnpm install rimraf -g 
#使用命令删除 
rimraf node_modules # 也可以删除其它文件夹或文件
#jarb上传工具
yum -y install lrzsz
rz -y

````  
[node的版本太低的解决方式](https://segmentfault.com/a/1190000015302680)

#### 成功


#### 接入云评论
```shell script
#npm install --save vuepress-plugins-comment
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

+ 1、左侧菜单的过度效果【暂时不做了】

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

#### 2020.06.12篇

+ 文章的分页功能加上
+ 后端的图片上传功能要加上
+ 富文本编辑的时候2个字符的缩进
+ 单篇文章的浏览量以及评论的数量
+ 行高太高 字体太大

#### 2020.06.13篇

+ 后端的token鉴权的开发
+ 找到一个手机壁纸 与 电脑壁纸的网站

win:cnpm
mac:npm

