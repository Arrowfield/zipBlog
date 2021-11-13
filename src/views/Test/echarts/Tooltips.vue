<template>
  <div v-show="show" :style="{left:left}" class="tooltips">
    <p>{{ data.time }}</p>
    <div v-for="(item,index) of data.data" style="display: flex;justify-content: space-between">
      <div>
        <span :style="{backgroundColor:options.series[index % options.series.length].lineStyle.color}"
              class="circles"></span>
        <span>{{ item.key }}</span>
      </div>
      <span style="margin-left: 20px;float: right;white-space: nowrap">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tooltips",
    props: {
      show: [Boolean, Number, String],
      left: [String, Number],
      data: Object,
      options: {
        type: Object,
      },
    }
  }
</script>

<style lang="scss" scoped>
  .tooltips {
    position: absolute;
    top: 100px;
    left: 100px;
    display: block;
    border-style: solid;
    white-space: nowrap;
    z-index: 9999999;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px;
    transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-radius: 4px;
    color: rgb(102, 102, 102);
    font: 14px / 21px "Microsoft YaHei";
    padding: 10px;
    border-color: rgb(255, 255, 255);
    pointer-events: none;
    font-size: 12px;
    /*visibility: hidden;*/
    //opacity: 0;
    p{margin:0}
  }

  .circles {
    display: inline-block;
    margin-right: 4px;
    border-radius: 10px;
    width: 10px;
    height: 10px;
  }
</style>