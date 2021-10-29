<template>
  <g v-if="dataZoom"

  >
    <rect
      ref="event"
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
        // max: 1,
        // min: 0
        rect: {}
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
        scrollParams: state => state.caseDetail.scrollParams,
        min: state => state.caseDetail.min,
        max: state => state.caseDetail.max,
      }),
      rectWidth() {
        //return this.dataAreaWidth - this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnRight
        return (this.max - this.min) * this.dataAreaWidth
      },
      leftBtnX() {
        //return this.grid.left + this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnCenter
        return this.grid.left + this.min * this.dataAreaWidth
      },
      rightBtnX() {
        // return (this.scrollParams.moveBtnCenter +
        //   this.scrollParams.moveBtnRight +
        //   this.grid.left +
        //   this.dataAreaWidth -
        //   this.dataZoom.handleSize)
        return this.grid.left + this.max * this.dataAreaWidth - this.dataZoom.handleSize
      },
      centerBtnX() {
        //return this.grid.left + this.scrollParams.moveBtnLeft + this.scrollParams.moveBtnCenter
        return this.leftBtnX
      }
    },
    methods: {
      btnType(el) {
        if (el.getAttribute('class') === 'left-btn') {
          return 'left'
        }
      },
      moveScrollBar(e) {
        let el = e.target, scrollParams = this.$store.state.caseDetail.scrollParams
        let min = this.min, max = this.max
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
          min = distance / this.dataAreaWidth
          if (min < 0) {
            min = 0
          } else if (min > max - this.dataZoom.handleSize / this.dataAreaWidth) {
            min = max - this.dataZoom.handleSize / this.dataAreaWidth
          }
        } else if (this.handleType === 'right') {
          distance = e.clientX - this.originRight //得到该矩形距离offsetX
          max = distance / this.dataAreaWidth
          if (max < min + this.dataZoom.handleSize / this.dataAreaWidth) {
            max = min + this.dataZoom.handleSize / this.dataAreaWidth
          } else if (max > 1) {
            max = 1
          }

        } else if (this.handleType === 'center') {
          let distance1 = e.clientX - this.originLeft
          let distance2 = e.clientX - this.originRight
          if (distance1 < 0) {
            distance1 = 0
            distance2 = this.rectWidth
          }
          if (distance2 > this.dataAreaWidth) {
            distance2 = this.dataAreaWidth
            distance1 = this.dataAreaWidth - this.rectWidth
          }
          min = distance1 / this.dataAreaWidth
          max = distance2 / this.dataAreaWidth
        }
        // 3. 缩放

        if (this.handleType !== -1 && min < max) {
          this.$store.commit('setStoreValue', {
            scrollParams,
            min,
            max
          })
          this.$store.dispatch('reCalcDatalist')
        }
      },
      downScrollBar(e) {
        let el = e.target
        this.rect = this.$refs.event.getBoundingClientRect()
        if (el.getAttribute('class') === 'left-btn') {
          this.handleType = 'left'
          this.originLeft = e.clientX - this.min * this.dataAreaWidth // 鼠标在方块中的偏移量
          //console.log(this.originLeft)
        } else if (el.getAttribute('class') === 'right-btn') {
          this.handleType = 'right'
          this.originRight = e.clientX - this.max * this.dataAreaWidth // 鼠标在方块中的偏移量
          //console.log(this.originRight)
        } else if (el.getAttribute('class') === 'center-btn') {
          this.handleType = 'center'
          this.originLeft = e.clientX - this.min * this.dataAreaWidth // 鼠标在方块中的偏移量
          this.originRight = e.clientX - this.max * this.dataAreaWidth // 鼠标在方块中的偏移量
        }
        document.onmousemove = this.moveScrollBar
        document.onmouseup = this.upScrollBar
      },
      upScrollBar(e) {
        this.leftX = 0
        this.rightX = 0
        this.handleType = -1
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
</script>

