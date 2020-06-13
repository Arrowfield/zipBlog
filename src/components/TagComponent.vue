<template>
  <div class="tags">
    <a v-waves href="javascript:">
      <i class="iconfont iconrili"></i>
      <span> {{tagDetail.articleCreated | truncation}} </span>
    </a>
    <a v-waves href="javascript:"><i class="iconfont iconredu"></i>{{ tagDetail.articleViewCount }} °C</a>
    <a v-waves href="javascript:"><i class="iconfont iconxx"></i>{{"-" }}</a>
    <Fragment v-if="tagDetail.articleTags">
      <a class="tag" :key="i" v-for="(tmp,i) in tagDetail.articleTags.split(',')" v-waves href="#">
        <i class="iconfont icondaohang1"></i>
        <span>{{tmp}}</span>
      </a>
    </Fragment>
  </div>
</template>

<script>
  // import waves from "@/directive/waves/waves";
  import {
    Fragment
  } from 'vue-fragment'

  export default {
    name: "Tags",
    directives: {
      // waves
    },
    components: {Fragment},
    filters: {
      truncation(val) {
        if (!val) return "-"
        let date = new Date(val.replace(/-/g, "/"))
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        month = month < 10 ? "0" + month : month
        return `${year}年${month}月${day}日`
      }
    },
    props: {
      tagDetail: [Object]
    }
  }
</script>

<style lang="scss" scoped>

  .tags {
    margin: 10px 0;
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

</style>
