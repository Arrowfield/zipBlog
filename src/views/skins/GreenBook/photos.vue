<template>
  <div class="start-page">
    <div class="top-nav">
      <button
        :style="{color:topNavColor[index]}"
        v-for="(item,index) of photoCategory">
        {{ item.name }}
      </button>
      <div class="startpage-search-frame">
        <input type="search" name="q" id="search-text" placeholder="Search...">
      </div>
    </div>
    <div class="images-wrap">
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
      <span class="sm-thumb"><img src="https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg" alt=""></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "photos",
    data() {
      return {
        photoCategory: [
          {name: "最新", id: ""},
          {name: "热门", id: ""},
          {name: "上传", id: ""},
          {name: "随机", id: ""},
          {name: "论坛", id: ""},
        ],
        topNavColor: ['#ad3', '#b760f0', '#e73', '#d55', '#fb3']
      }
    },
  }
</script>

<style lang="scss" scoped>
  //http://www.h-ui.net/Hui-1-cssReset.shtml
  .start-page {
    border-top-width: 0;
    padding: 30px 19px 30px;
    text-align: center;
    background: url(//static.wallhaven.cc/images/layout/blue-gradients.020-wh.jpg) top center/cover no-repeat fixed, #171717 url(//static.wallhaven.cc/images/layout/bg-dark-grain.png) top left repeat;

    .top-nav {
      text-align: center;

      button {
        width: 100px;
        background: linear-gradient(to top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .1) 100%);
        border-radius: 3px;
        padding: 20px;
        margin-left: 10px;
        cursor: pointer;
        font-size: 1em;

        &:hover {
          background: rgba(0, 0, 0, .1);
          box-shadow: 0 0 3px rgb(0 0 0 / 50%) inset;
        }
      }

      .startpage-search-frame {
        width: 50%;
        margin: 30px auto 0;
        background: rgba(255, 255, 255, .1);
        transition-property: background-color, box-shadow;
        transition-duration: .3s;
        border-radius: 2px;
        padding: 0 .5em;
        box-shadow: 2px 2px 4px rgb(0 0 0 / 60%);

        input {
          padding: 0;
          height: 46px;
          line-height: 46px;
          background: 0 0;
          box-shadow: none;
          color: #fff;
          text-shadow: 1px 1px 0 rgb(0 0 0 / 50%);
          width: 100%;
          font-size: 20px;
        }
      }
    }
  }





  .images-wrap {

    max-width: 1560px;
    margin: 26px auto 0;
    /*display: flex;*/
    /*align-items: center;*/

    span.sm-thumb {
      width: 20%;
      padding: 4px 6px;
      display: inline-block;
    }

    img {
      max-width: 100%;
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgb(0 0 0 / 50%);
      height: 200px;
      cursor: pointer;

      &:hover {
        filter: brightness(130%);
        box-shadow: 2px 2px 8px rgb(0 0 0 / 80%);
      }
    }
  }

  @media screen and (max-width: 1680px) {
    .images-wrap {
      span.sm-thumb {
        width: 33%;
      }
    }
  }

  @media screen and (max-width:  1280px) {
    .images-wrap {
      span.sm-thumb {
        width: 50%;
      }
    }
  }

  @media screen and (max-width:  980px) {
    .images-wrap {
      span.sm-thumb {
        width: 100%;
      }
    }
    .start-page .top-nav .startpage-search-frame {
      width: 60%;
    }
    .start-page .top-nav button{
      width: 60px;

    }
  }

  @media screen and (max-width:  480px) {
    .start-page .top-nav button{
      width: 40px;
      padding: 10px;
    }
  }

</style>

