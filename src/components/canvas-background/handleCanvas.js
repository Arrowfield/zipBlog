export default class HandleCanvas {
  constructor(options, ctx) {
    const canvas = ctx || document.getElementById(options.id)
    this.ctx = canvas.getContext('2d')
    this.canvasWidth = this.ctx.canvas.width //画布的宽
    this.canvasHeight = this.ctx.canvas.height //画布的高
  }

  init() {
    this.drawBg()
  }

  drawBg() {
    console.log(this.drawBg)
    // window.requestAnimationFrame(this.drawBg)
    console.log(this.canvasHeight,this.canvasWidth)
    let ctx = this.ctx
    ctx.beginPath()
    ctx.moveTo(0,100)
    ctx.lineTo(0,200)
    ctx.stroke()
  }
}