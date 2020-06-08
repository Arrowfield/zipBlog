export const drawBubble = function(ctx){
  console.log(ctx)
  ctx.moveTo(5,10)
  ctx.lineTo(5,1000)
  ctx.strokeStyle = "red"
  ctx.stroke()

}