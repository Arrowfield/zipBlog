export default class HandleCanvas {
  constructor(options, ctx) {
    const canvas = ctx || document.getElementById(options.id)
    this.ctx = canvas.getContext('2d')
    this.canvasWidth = this.ctx.canvas.width //画布的宽
    this.canvasHeight = this.ctx.canvas.height //画布的高
    this.drawBg()
  }

  init() {
    this.drawBg()
  }

  drawBg() {

    let ctx = this.ctx
    let originX = 10, originY = this.canvasHeight - 10

    // ctx.beginPath()
    // ctx.moveTo(originX, originY)
    // ctx.arc(100,100,50,0,2 * Math.PI)
    // ctx.fillStyle = "red"
    // ctx.fill()
    ctx.moveTo(0,0,)
    ctx.lineTo(0,100)

    ctx.stroke()
    console.log(ctx)
  }
}