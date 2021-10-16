<template>
  <g v-if="dataZoom"
     @mousedown="downScrollBar"
     @mouseup="upScrollBar"
  >
    <rect
      :x="grid.left"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth"
      :height="dataZoom.height"
      :fill="dataZoom.backgroundColor"
    />
    <rect
      :x="grid.left + moveBtnX"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth - moveBtnX"
      :height="dataZoom.height"
      :fill="dataZoom.fillerColor"
    />

    <defs>
      <clipPath id="myClip">
        <rect x="0" y="0" :width="dataZoom.handleSize" height="20"/>
      </clipPath>
    </defs>


    <svg xmlns="http://www.w3.org/2000/svg" :x="grid.left + moveBtnX" :y="grid.top + grid.height + dataZoom.top - 3">
      <image
        clip-path="url(#myClip)"
        :xlink:href="dataZoom.handleIcon" :x="leftX" y="0"
      />
      <rect cursor="e-resize" fill="transparent" x="0" y="0" height="20" :width="dataZoom.handleSize" class="left-btn"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" :x="grid.left + dataAreaWidth - dataZoom.handleSize"
         :y="grid.top + grid.height + dataZoom.top - 3">
      <image clip-path="url(#myClip)" :xlink:href="dataZoom.handleIcon" :x="rightX" y="0"/>
      <rect cursor="e-resize" fill="transparent" x="0" y="0"
            height="20"
            :width="dataZoom.handleSize"
            class="right-btn"
      />
    </svg>

  </g>
</template>

<script>
  import {EventCenter} from "../../../utils/utils";

  export default {
    name: "ChartScrollBar",
    data() {
      return {
        leftX: 0,
        rightX: 0,
        clickX:0,
        moveBtnX:0
      }
    },
    props: {
      dataZoom: Object,
      dataAreaWidth: [Number, String],
      grid: {
        type: Object,
      },
    },
    methods: {
      moveScrollBar(e) {
        let el = e.target
        // hover态
        if (el.getAttribute('class') === 'left-btn') {
          this.leftX = -this.dataZoom.handleSize
        } else if (el.getAttribute('class') === 'right-btn') {
          this.rightX = -this.dataZoom.handleSize
        } else {
          this.leftX = 0
          this.rightX = 0
        }

        let distance = e.clientX - this.clickX
        if(this.clickX) {
          this.moveBtnX = distance < 0 ? 0 :distance
        }
      },
      downScrollBar(e){
        this.clickX = e.clientX
      },
      upScrollBar(e){
        let el = e.target
        this.clickX = 0
      }
    },
    mounted() {
      EventCenter.on(this.$el.parentElement, 'mousemove', this.moveScrollBar)
      EventCenter.on(this.$el.parentElement, 'mouseup', this.upScrollBar)
    },
    beforeDestroy() {
      EventCenter.off(this.$el.parentElement, 'mousemove', this.moveScrollBar)
      EventCenter.off(this.$el.parentElement, 'mouseup', this.upScrollBar)
    }
  }
</script>

