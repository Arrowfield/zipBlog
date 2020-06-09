const initData = {}

export const drawBubble = function (ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  let originX = 10, originY = ctx.canvas.height - 10 , radius = 7, distance = 3
  let offset = radius + distance
  let num = Math.floor(ctx.canvas.width / (offset))
  for (let i = 0; i < num; i++) {
    ctx.beginPath()
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.globalAlpha = 0.2;
    ctx.arc(originX + offset * i * 2, originY - Math.random() * 200 , Math.random() * radius, 0, 2 * Math.PI);
    ctx.fill()
  }
}
