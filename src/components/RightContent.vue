<template>
  <div class="right-content">
    <div class="header">
      <a v-waves href="javascript:" @click="showMenuFun"><i class="iconfont icondaohang"></i></a>
      <a href="#"><img src="../assets/img/index/avatar.gif" alt=""></a>
    </div>
    <router-view/>
    <div class="footer">凡打不倒我的，必使我强大！！！—— Z 技术博客</div>
  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";

  export default {
    name: "RightContent",
    directives: {
      waves
    },
    props:['showMenu'],
    watch:{

    },
    methods:{
      showMenuFun(){
        this.$emit('update:showMenu',!this.showMenu)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .right-content {
    margin-top: 20px;
    position: absolute;
    left: 260px;
    width: 940px;
    .header {

      align-items: center;
      justify-content: space-between;
      padding:0 10px;
      display: none;
      a {
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 4px;
        i{
          font-size: 24px;
        }
      }

      img {
        width: 100%;
      }
    }

    li {

      margin: 20px auto;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px 20px 0;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);

      .link {
        display: block;
        overflow: hidden;
        margin-bottom: 10px;
        border-radius: 10px;
      }

      .image-cont {
        width: 100%;
        overflow: hidden;
        border-radius: 10px;

        max-height: 500px;
        min-height: 65px;
        background-color: #eee;
        position: relative;

        img {
          max-height: 350px;
          width: 100%;
          display: block;
          opacity: 1;
          object-fit: cover;
        }

        .title {
          position: absolute;
          bottom: 0;
          padding: 15px;
          color: #fff;
          font-size: 2em;
          width: 100%;
          font-weight: 400;
          cursor: auto;
          z-index: 5;
        }

        i {
          position: absolute;
          color: #fa8d14;
          top: -3px;
          right: 0;
          font-size: 48px;
        }
      }

      article {
        color: #444;
        font-family: microsoft yahei, serif;
        margin-bottom: 20px;
        padding: 10px 0;

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }

      .tags {
        margin-bottom: 10px;
      }

      .tags a {
        display: inline-flex;
        border-radius: 10px;
        padding: 5px 10px;
        color: #fff;
        font-size: 14px;
        margin-bottom: 5px;
        margin-right: 10px;
        overflow: hidden;
        align-items: center;

        i {
          margin-right: 5px;
          font-size: 14px;
        }

        &:nth-child(1) {
          background: #ff4e6a;
        }

        &:nth-child(2) {
          background: #ffaa73;
        }

        &:nth-child(3) {
          background: #fed466;
        }

        &:nth-child(4) {
          background: #3cdc82;
        }

        &:nth-child(5) {
          background: #64dcf0;
        }

        &:nth-child(6) {
          background: #64b9ff;
        }
      }
    }


    .footer {
      padding: 21.5px 20px;
      text-align: center;
      background-color: #f5f6f5;
      color: #777;

      bottom: 0;
      width: 100%;
      height: 56px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
</style>
