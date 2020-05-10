<template>
  <div class="left-content " :class="{'screen-change':showMenu}">
    <div class="avatar">
      <a href="#">
        <img src="../assets/img/index/avatar.gif" title="Z 的技术博客" alt="">
      </a>
    </div>
    <div class="intro">
      <div class="article">
        <p>文章</p>
        <p>34</p>
      </div>
      <div class="views">
        <p>浏览</p>
        <p>59630</p>
      </div>
    </div>
    <div class="intro menu-list">
      <a href="#" v-waves><i class="iconfont iconshouye"></i>回到首页</a>
      <a href="#" v-waves><i class="iconfont icondaohang"></i>友情链接</a>
      <a href="#" v-waves><i class="iconfont iconbianqian"></i>标签</a>
      <a href="#" v-waves><i class="iconfont iconguanyu"></i>关于我</a>
    </div>
    <div class="intro fun-list">
      <h3>功能按钮</h3>
      <div class="fun-items">
        <a v-waves href="#"><i class="iconfont iconhuabanfuben"></i></a>
        <a v-waves href="#"><i class="iconfont iconwifi"></i></a>
        <a v-waves href="#"><i class="iconfont iconshuji"></i></a>
      </div>
    </div>

    <div class="intro fun-list">
      <h3>社交功能</h3>
      <div class="fun-items">
        <a v-waves href="//github.com/Arrowfield" title="https://github.com/Arrowfield" target="_blank"><i class="iconfont icongithub"></i></a>
        <a v-waves href="//qm.qq.com/cgi-bin/qm/qr?k=RmZQeDHL_tjQIKwib_rmvEFa7AsOMSj-&noverify=0#" title="768449566" target="_blank"><i class="iconfont iconqq"></i></a>
        <a v-waves href="#"><i class="iconfont iconweixin"></i></a>
      </div>
    </div>

    <div class="intro fun-list tags-list">
      <h3>标签</h3>
      <div class="tags">
        <a># 随笔</a>
        <a># golang</a>
        <a># 算法</a>
        <a># 关于我</a>
        <a># 随笔</a>
        <a># 随笔</a>
      </div>
    </div>

    <div class="intro fun-list">
      <h3>分类</h3>
      <ul class="category-list">
        <li>
          <a href="">环境搭建</a>
          <span>10</span>
        </li>
        <li>
          <a href="">杂谈与随笔</a>
          <span>0</span>
        </li>
      </ul>
    </div>

    <div class="intro fun-list">
      <h3>存档</h3>
      <ul class="category-list">
        <li>
          <a href="">2020年5月10号</a>
          <span>10</span>
        </li>
        <li>
          <a href="">2020年5月9号</a>
          <span>0</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";
  export default {
    name: "LeftContent",
    directives:{
      waves
    },
    props:{
      showMenu:{
        default:false
      }
    }
  }
</script>

<style lang="scss" scoped>

  .left-content{
    position: fixed;
    top:0;
    bottom:0;
    width: 260px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 0;
      height: 0;
    }
    .intro{
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 1rem rgba(161,177,204,.4);
      margin: 20px;
      padding: 15px;
      display: flex;

      .category-list{
        li{
          border-bottom: 1px solid #eee;
          position: relative;
          &:last-child{
            border-bottom: none;
          }
          a{
            padding: 14px 10px;
            display: block;
            color: #606266;
            font-size: 15px;
          }
          span{
            background-color: rgba(255,78,106,.8);
            display: inline-block;
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            border-radius: 100%;
            color: #fff;
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }

      &.tags-list{
        .tags {
          padding: 10px 10px 5px;
        }
        a{
          border-radius: 10px;
          padding: 5px 10px;
          color: #fff;
          font-size: 12px!important;
          display: inline-block;
          margin-bottom: 5px;
          background: rgba(255,78,106,.15);
          color: rgba(255,78,106,.8);
          margin-right:5px;
        }
      }

      &.fun-list{
        display: block;
        padding: 0;
        h3{
          font-size: 1.2em;
          font-weight: 400;
          padding: 12px 10px 10px;
          border-bottom: 1px solid #eee;
          margin: 0;
        }

        .fun-items{
          display: flex;
          align-items: center;
        }

        .fun-items a{
          width: 40px;
          height: 40px;
          margin: 6px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          color: #9ca2a8;
          line-height: 40px;
          background-color: rgba(180,180,255,.15);
        }
      }

      .article,.views{
        p:nth-child(1){
          color: #363636;
          margin-bottom: 3px;
        }
        width: 50%;
        text-align: center;
        color: #a3a8ae;
      }

      &.menu-list{
        display: block;
        a{
          padding: 0 36px;
          color: #9ca2a8;
          transition: all .35s;
          border-radius: 10px;
          margin: 10px 0;
          display: block;

          width: 100%;
          height: 48px;
          line-height: 48px;
          overflow: hidden;

          &:nth-child(1){
            color: #fff;
            opacity: .9;
            background: #ff4e6a;
            box-shadow: 0 2px 12px #ff4e6a;
            &:hover{
              color: #fff;
              opacity: .9;
              background: #ff4e6a;
              box-shadow: 0 2px 12px #ff4e6a;
            }
          }

          &:hover{
            background-color: rgba(0,0,0,.08);
          }
          i{
            font-size: 22px;
            margin-right:7px;
          }
        }
      }
    }
  }

  .avatar{
    z-index: 4;
    position: relative;
    font-size: 0;
    overflow: hidden;
    border-radius: 100%;
    width: 170px;
    height: 170px;
    margin:45px auto 0;
    box-shadow: 0 0.3rem 2rem rgba(161,177,204,.6);
    img{
      width: 170px;
      height: 170px;
    }
  }
</style>
