<template>
  <g v-if="dataZoom"

  >
    <rect
      :x="grid.left"
      :y="grid.top + grid.height + dataZoom.top"
      :width="dataAreaWidth"
      :height="dataZoom.height"
      :fill="dataZoom.backgroundColor"
    />
    <rect
      @mousedown="downScrollBar"
      cursor="e-resize"
      :x="centerBtnX"
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
         @mousedown="downScrollBar"
         :x="leftBtnX"
         :y="grid.top + grid.height + dataZoom.top - 3">
      <image
        clip-path="url(#myClip)"
        :xlink:href="dataZoom.handleIcon" :x="leftX" y="0"
      />
      <rect cursor="e-resize" fill="transparent" x="0" y="0" height="20" :width="dataZoom.handleSize" class="left-btn"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
         @mousedown="downScrollBar"
         :x="rightBtnX"
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
  import {mapState} from "vuex";

  export default {
    name: "ChartScrollBar",
    data() {
      return {
        leftX: 0,
        rightX: 0,
        clickX: 0,
        handleType: -1,

        originLeft: 0,
        originRight: 0,
        originCenter: 0,
        max: 1,
        min: 0
      }
    },
    props: {
      dataZoom: Object,
      dataAreaWidth: [Number, String],
      grid: {
        type: Object,
      },
    },
    computed: {
      ...mapState({
        scrollParams: state => state.caseDetail.scrollParams
      }),
      rectWidth() {
        return this.dataAreaWidth - this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnRight
      },
      leftBtnX(){
        return this.grid.left + this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnCenter
      },
      rightBtnX(){
        return (this.scrollParams.moveBtnCenter +
          this.scrollParams.moveBtnRight +
          this.grid.left +
          this.dataAreaWidth -
          this.dataZoom.handleSize)
      },
      centerBtnX(){
        return this.grid.left + this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnCenter
      }
    },
    methods: {
      btnType(el) {
        if (el.getAttribute('class') === 'left-btn') {
          return 'left'
        }
      },
      moveScrollBar(e) {
        let el = e.target,scrollParams = this.$store.state.caseDetail.scrollParams
        // 1.hover态
        if (this.btnType(el) === 'left') {
          this.leftX = -this.dataZoom.handleSize
        } else if (el.getAttribute('class') === 'right-btn') {
          this.rightX = -this.dataZoom.handleSize
        }
        // 2.拖动
        let distance = ""
        if (this.handleType === 'left') {
          distance = e.clientX - this.originLeft
          let temp = 0
          if (distance > this.scrollParams.moveBtnRight + this.dataAreaWidth - this.dataZoom.handleSize) {
            temp = this.scrollParams.moveBtnRight + this.dataAreaWidth - this.dataZoom.handleSize
          } else if (distance < -this.scrollParams.moveBtnCenter) {
            temp = -this.scrollParams.moveBtnCenter
          } else {
            temp = distance
          }
          scrollParams.moveBtnLeft = temp

          this.$store.commit('setStoreValue',{
            scrollParams,
            min:(this.leftBtnX - this.grid.left)/(this.dataAreaWidth - this.dataZoom.handleSize)
          })
        } else if (this.handleType === 'right') {
          distance = e.clientX - this.originRight
          let temp = 0
          if (distance < this.scrollParams.moveBtnLeft - this.dataAreaWidth + this.dataZoom.handleSize) {
            temp = this.scrollParams.moveBtnLeft - this.dataAreaWidth + this.dataZoom.handleSize
          } else if (distance > -this.scrollParams.moveBtnCenter) {
            temp = - this.scrollParams.moveBtnCenter
          } else {
            temp = distance
          }
          scrollParams.moveBtnRight = temp
          this.$store.commit('setStoreValue',{
            scrollParams,
            max:(this.rightBtnX - this.grid.left) / (this.dataAreaWidth - this.dataZoom.handleSize)
          })
        } else if (this.handleType === 'center') {
          distance = e.clientX - this.originCenter
          let temp = 0
          if (distance < -this.scrollParams.moveBtnLeft) {
            temp = -this.scrollParams.moveBtnLeft
          } else if (distance > -this.scrollParams.moveBtnRight) {
            temp = -this.scrollParams.moveBtnRight
          } else {
            temp = distance
          }
          scrollParams.moveBtnCenter = temp // 偏移量 有正值 有负值
          console.log(
            this.rightBtnX,
            (this.leftBtnX - this.grid.left) / (this.dataAreaWidth - this.dataZoom.handleSize),
            (this.rightBtnX - this.grid.left) / (this.dataAreaWidth - this.dataZoom.handleSize)
          )

          this.$store.commit('setStoreValue',{
            scrollParams,
            min:(this.leftBtnX - this.grid.left) / (this.dataAreaWidth - this.dataZoom.handleSize),
            max:(this.rightBtnX - this.grid.left) / (this.dataAreaWidth - this.dataZoom.handleSize)
          })
        }
        // 3. 缩放
      },
      downScrollBar(e) {
        let el = e.target
        if (el.getAttribute('class') === 'left-btn') {
          this.handleType = 'left'
          this.originLeft = e.clientX - this.scrollParams.moveBtnLeft
        } else if (el.getAttribute('class') === 'right-btn') {
          this.handleType = 'right'
          this.originRight = e.clientX - this.scrollParams.moveBtnRight
        } else if (el.getAttribute('class') === 'center-btn') {
          this.handleType = 'center'
          this.originCenter = e.clientX - this.scrollParams.moveBtnCenter
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

