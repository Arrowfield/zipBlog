<template>
  <g v-if="dataZoom">
    <rect
      :x="grid.left"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth"
      :height="dataZoom.height"
      :fill="dataZoom.backgroundColor"
    />
    <rect
      :x="grid.left"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth"
      :height="dataZoom.height"
      :fill="dataZoom.fillerColor"
    />

    <defs>
      <clipPath id="myClip">
        <rect x="0" y="0" width="22" height="20"/>
      </clipPath>
    </defs>


    <svg xmlns="http://www.w3.org/2000/svg" :x="grid.left" :y="grid.top + grid.height + dataZoom.top - 3">
      <image
        clip-path="url(#myClip)"
        :xlink:href="dataZoom.handleIcon"
        x="0"
        y="0"
        cursor="e-resize"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" :x="grid.left + dataAreaWidth - 22" :y="grid.top + grid.height + dataZoom.top - 3">
      <image
        clip-path="url(#myClip)"
        :xlink:href="dataZoom.handleIcon"
        x="0"
        y="0"
        cursor="e-resize"
      />
    </svg>

  </g>
</template>

<script>
  export default {
    name: "ChartScrollBar",
    props: {
      dataZoom: Object,
      dataAreaWidth: [Number, String],
      grid: {
        type: Object,
      },
    },
  }
</script>

<style lang="sass" scoped>

</style>