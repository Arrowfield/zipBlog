<template>
  <layout-slot>
    <RightPanelContainer class="main-content-right" title="相册">
      <ul class="link-list">

        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/index/kenan_avatar.png"
              alt="">
            <p>2020.02.07</p>
          </a>
        </li>


        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/photo/avatar.jpg"
              alt="">
            <p>2020.05.10</p>
          </a>
        </li>

        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/index/avatar.gif"
              alt="">
            <p>2020.05.08</p>
          </a>
        </li>


        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/photo/time.png"
              alt="">
            <p>2020.02.08</p>
          </a>
        </li>

        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/photo/jinmu.png"
              alt="">
            <p>2020.02.08</p>
          </a>
        </li>

        <li>
          <a href="javascript:" title="">
            <img
              src="../../../assets/images/photo/me.jpg"
              alt="">
            <p>2020.02.07</p>
          </a>
        </li>


      </ul>
    </RightPanelContainer>
  </layout-slot>
</template>

<script>
  import RightPanelContainer from './slot/RightPanelContainer'
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "Photo",
    components: {
      LayoutSlot,
      RightPanelContainer
    },
  }
</script>

<style lang="scss" scoped>
  .link-list {
    display: flex;
    flex-wrap: wrap;

    li {
      transition: all .03s;
      width: 100px;
      margin: 5px;
      border-radius: 4px;
      border: 1px solid #eee;
      /*font-size: 0;*/
      overflow: hidden;

      p {
        text-align: center;
        font-size: 13px;
        color: #606266;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 3px 10px 5px;
      }
    }
  }
</style>
