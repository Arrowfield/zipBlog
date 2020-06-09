let deltaTime = 0, lastTime = Date.now()
let speed = 0, rate = 0

export const drawBubble = function (ctx, opt) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  let originX = opt.originX, originY = opt.originY, distance = opt.distance
  let num = opt.num
  for (let i = 0; i < num; i++) {
    let offset = opt.radius[i] + distance
    ctx.beginPath()
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.globalAlpha = 0.2;
    originY[i] -= opt.speed[i] * 15
    if(originY[i] < 0){
      originY[i] = (ctx.canvas.height - 10) - Math.floor(100 * Math.random())
    }
    ctx.arc(originX + offset * i * 2, originY[i], opt.radius[i], 0, 2 * Math.PI);
    ctx.fill()
  }
}
