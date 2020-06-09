const initData = {}

export const drawBubble = function (ctx,opt) {


  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  let originX = opt.originX, originY = opt.originY , radius = opt.radius, distance = opt.distance
  let offset = radius + distance
  let num = opt.num


  for (let i = 0; i < num; i++) {
    ctx.beginPath()
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.globalAlpha = 0.2;
    ctx.arc(originX + offset * i * 2, originY[i]  , Math.random() * radius, 0, 2 * Math.PI);
    ctx.fill()
  }
}
