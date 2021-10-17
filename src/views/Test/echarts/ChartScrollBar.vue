<template>
  <g v-if="dataZoom"
     @mousedown="downScrollBar"
  >
    <rect
      :x="grid.left"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth"
      :height="dataZoom.height"
      :fill="dataZoom.backgroundColor"
    />
    <rect
      cursor="e-resize"
      :x="grid.left + moveBtnLeft + moveBtnCenter"
      :y="grid.top + grid.height + dataZoom.top"
      :width="rectWidth"
      :height="dataZoom.height"
      :fill="dataZoom.fillerColor"
      class="center-btn"
    />

    <defs>
      <clipPath id="myClip">
        <rect x="0" y="0" :width="dataZoom.handleSize" height="20"/>
      </clipPath>
    </defs>


    <svg xmlns="http://www.w3.org/2000/svg"
         :x="grid.left + moveBtnLeft + moveBtnCenter"
         :y="grid.top + grid.height + dataZoom.top - 3">
      <image
        clip-path="url(#myClip)"
        :xlink:href="dataZoom.handleIcon" :x="leftX" y="0"
      />
      <rect cursor="e-resize" fill="transparent" x="0" y="0" height="20" :width="dataZoom.handleSize" class="left-btn"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
         :x="moveBtnCenter + moveBtnRight + grid.left + dataAreaWidth - dataZoom.handleSize"
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
        clickX: 0,
        handleType: -1,
        moveBtnLeft: 0,
        moveBtnRight: 0,
        moveBtnCenter: 0,
        originLeft: 0,
        originRight: 0,
        originCenter:0
      }
    },
    props: {
      dataZoom: Object,
      dataAreaWidth: [Number, String],
      grid: {
        type: Object,
      },
    },
    computed:{
      rectWidth(){
        return this.dataAreaWidth - this.moveBtnLeft + this.moveBtnRight
      }
    },
    methods: {
      moveScrollBar(e) {
        let el = e.target
        // 1.hover态
        if (el.getAttribute('class') === 'left-btn') {
          this.leftX = -this.dataZoom.handleSize
        } else if (el.getAttribute('class') === 'right-btn') {
          this.rightX = -this.dataZoom.handleSize
        }
        // 2.拖动
        let distance = ""
        if (this.handleType === 'left') {
          distance = e.clientX - this.originLeft
          if (distance > this.moveBtnRight + this.dataAreaWidth - this.dataZoom.handleSize) {
            this.moveBtnLeft = this.moveBtnRight + this.dataAreaWidth - this.dataZoom.handleSize
          } else if (distance < -this.moveBtnCenter) {
            this.moveBtnLeft = -this.moveBtnCenter
          } else {
            this.moveBtnLeft = distance
          }
          // 更新x轴的text

        } else if (this.handleType === 'right') {
          distance = e.clientX - this.originRight
          if (distance < this.moveBtnLeft - this.dataAreaWidth + this.dataZoom.handleSize) {
            this.moveBtnRight = this.moveBtnLeft-this.dataAreaWidth + this.dataZoom.handleSize
          } else if (distance > -this.moveBtnCenter) {
            this.moveBtnRight =  -this.moveBtnCenter
          } else {
            this.moveBtnRight = distance
          }
        }else if(this.handleType === 'center') {
          distance = e.clientX - this.originCenter
          if(distance < -this.moveBtnLeft){
            this.moveBtnCenter = -this.moveBtnLeft
          }else if(distance > -this.moveBtnRight){
            this.moveBtnCenter = -this.moveBtnRight
          }else{
            this.moveBtnCenter = distance
          }
        }
        // 3.
      },
      downScrollBar(e) {
        let el = e.target

        // if(e.offsetX <= this.grid.left + this.moveBtnLeft + this.moveBtnCenter) {
        //   this.moveBtnLeft = e.offsetX - this.grid.left - this.dataZoom.handleSize / 2
        // }
        if (el.getAttribute('class') === 'left-btn') {
          this.handleType = 'left'
          this.originLeft = e.clientX - this.moveBtnLeft
        } else if (el.getAttribute('class') === 'right-btn') {
          this.handleType = 'right'
          this.originRight = e.clientX - this.moveBtnRight
        } else if(el.getAttribute('class') === 'center-btn'){
          this.handleType = 'center'
          this.originCenter = e.clientX - this.moveBtnCenter
        }
        document.onmousemove = this.moveScrollBar
        document.onmouseup = this.upScrollBar
      },
      upScrollBar(e) {
        this.leftX = 0
        this.rightX = 0
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
</script>

