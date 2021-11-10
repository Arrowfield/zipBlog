<template>
  <layout-slot>
    <RightPanelContainer class="main-content-right" title="心情随笔">
      <div class="mood">
        <span><i class="iconfont iconrili icon"></i>2020-06-13</span>
        <p class="content">出来混，迟早会还的</p>
      </div>
      <div class="mood">
        <span><i class="iconfont iconrili icon"></i>2020-06-12</span>
        <p class="content">当你老了，白发苍苍，睡意朦胧，在炉前打盹，慢慢吟诵，梦见你当年的双眼，那柔美的光芒与青幽的晕影。 </p>
      </div>
      <div class="mood">
        <span><i class="iconfont iconrili icon"></i>2020-06-11</span>
        <p class="content">你问我那么拼干嘛，我说我是一个惜时惜命的人。</p>
      </div>
      <div class="mood">
        <span><i class="iconfont iconrili icon"></i>2020-06-10</span>
        <p class="content">年轻吗？不要紧，听过几首歌，爱过几个人，就老了。</p>
      </div>
    </RightPanelContainer>
  </layout-slot>
</template>

<script>
  import RightPanelContainer from './slot/RightPanelContainer'
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "Mood",
    components: {
      LayoutSlot,
      RightPanelContainer
    }
  }
</script>

<style scoped lang="scss">
  .mood {
    width: 100%;
    background: #fafafa;
    border: 1px solid #e0e0e0;
    color: #4d4d4d;
    line-height: 22px;
    /*padding-top: 21px;*/
    /*padding-left: 20px;*/
    /*padding-right: 77px;*/
    /*padding-bottom: 27px;*/
    padding: 21px 77px 27px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;

    .icon {
      margin-right: 3px;
    }

    &:hover {
      background: #f4f2f2;
      color: #333;
    }
  }
</style>
