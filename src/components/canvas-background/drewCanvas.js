export const drawBubble = function (ctx, opt) {


  bubbleMonitor(opt, ctx)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  if (ctx.canvas.width < 768) {
    //drawRibbon(opt, ctx)
    return
  }
  let originX = opt.originX, originY = opt.originY, distance = opt.distance, num = opt.num
  for (let i = 0; i < num; i++) {
    if (opt.alive[i]) {
      let offset = opt.radius[i]
      ctx.beginPath()
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.globalAlpha = 0.2;
      originY[i] -= opt.speed[i] * 15
      ctx.arc(originX + offset * i * 2, originY[i], opt.radius[i], 0, 2 * Math.PI);
      ctx.fill()
      if (originY[i] < opt.destory[i]) {
        opt.alive[i] = false
      }
    }
  }

}

function drawRibbon(opt, ctx) {

  ctx.beginPath()
  ctx.moveTo(0,350)
  ctx.lineTo(60,300)
  ctx.lineTo(90,330)
  ctx.lineTo(120,325)
  ctx.lineTo(150,345)
  ctx.lineTo(180,305)
  ctx.lineTo(210,360)
  ctx.lineTo(240,360)
  // ctx.lineTo(35,350)
  // ctx.closePath()
  ctx.stroke()
  // console.log(123)
}

function bubbleMonitor(opt, ctx) {
  let sum = 0;
  for (let i = 0; i < opt.num; i++) {
    if (opt.alive[i]) sum++;
    if (sum < opt.num) {
      sendBubble(opt, ctx);
      return;
    }
  }
}


function sendBubble(opt, ctx) {
  for (let i = 0; opt.num; i++) {
    if (!opt.alive[i]) {
      born(i, opt, ctx);
      return;
    }
  }
}

function born(i, opt, ctx) {
  opt.alive[i] = true
  opt.originY[i] = ctx.canvas.height

}
