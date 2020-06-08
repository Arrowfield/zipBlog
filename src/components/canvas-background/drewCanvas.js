export const drawBubble = function (ctx) {

  console.log(ctx)
  ctx.beginPath()
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.moveTo(5, 10)
  ctx.lineTo(5, 1000)
  ctx.strokeStyle = "red"
  ctx.stroke()
  // window.requestAnimationFrame(drawBubble(ctx))
  // ctx.save()
}
