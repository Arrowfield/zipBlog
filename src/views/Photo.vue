<template>
  <RightPanelContainer class="link-page" title="相册">
    <ul class="link-list">

      <li>
        <a href="javascript:" title="" >
          <img
            src="../assets/img/photo/avatar.jpg"
            alt="">
          <p>2020.05.10</p>
        </a>
      </li>

      <li>
        <a href="javascript:" title="" >
          <img
            src="../assets/img/index/avatar.gif"
            alt="">
          <p>2020.05.08</p>
        </a>
      </li>


      <li>
        <a href="javascript:" title="" >
          <img
            src="../assets/img/photo/time.png"
            alt="">
          <p>2020.02.08</p>
        </a>
      </li>

      <li>
        <a href="javascript:" title="" >
          <img
            src=""
            alt="">
          <p>2020.02.08</p>
        </a>
      </li>

      <li>
        <a href="javascript:" title="" >
          <img
            src=""
            alt="">
          <p>2020.02.07</p>
        </a>
      </li>

    </ul>
  </RightPanelContainer>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'
  export default {
    name: "Photo",
    components: {
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
