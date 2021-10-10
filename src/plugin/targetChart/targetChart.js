const canvasWidth = 1460 
const canvasHeight = 400
const gridLeft = 10
const gridBottom = 60
const rectHeight = 15

const setting = {
    textColor:"#505050",
    axisColor:"#ACB2BF"
}

const textArea = [
    {txt:"00:00",position:""},
    {txt:"00:10",position:""},
    {txt:"00:20",position:""},
    {txt:"00:30",position:""},
]

export const targetChart = function(options){
    if(!options.id) return
    let c = document.getElementById(options.id)
    c.style.width = canvasWidth + 'px'
    c.style.height = canvasHeight + 'px'
    c.width = canvasWidth * window.devicePixelRatio
    c.height = canvasHeight * window.devicePixelRatio
    let ctx = c.getContext('2d')
    ctx.scale(devicePixelRatio, devicePixelRatio); //设置缩放比例，防止高清屏模糊
    drawAxisX(ctx)
}
function drawAxisX(ctx){
    ctx.beginPath()
    ctx.lineWidth = 1 
    ctx.strokeStyle = setting.axisColor
    ctx.moveTo(70,300)
    ctx.lineTo(1390,300)
    let step = 20
    let distance = 1320 / step
    for(let i = 0;i<(step + 1);i++){
        ctx.moveTo(70 + (i * distance),300)
        ctx.lineTo(70 + (i * distance),305)
    }
    ctx.stroke()
    ctx.beginPath()
    ctx.fillStyle = setting.textColor
    ctx.font = "normal 12px serif";
    ctx.textAlign = 'center'
    console.log(window.devicePixelRatio)
    for(let i = 0;i<(step + 1);i++){
        ctx.fillText(textArea[i].txt,70 + (i * distance),317)
    }
}
function drawBackground(ctx){
    // 创建渐变
    ctx.beginPath()
    let grd = ctx.createLinearGradient(0,0,0,626)
    grd.addColorStop(0.05,'#eee')
    grd.addColorStop(0.95,'#eeeeb0')
    ctx.fillStyle = grd
    ctx.fillRect(0,0,canvasWidth,canvasHeight)
}
function draw(ctx,option,page,canvas){
    let rect = option.rect
    // 创建矩形
    ctx.beginPath();
    ctx.fillStyle = option.color
    ctx.strokeStyle = 'white'
    ctx.rect(rect.x,rect.y,rect.width,rect.height)
    // 判断坐标
    
    if(page && ctx.isPointInPath(page.x,page.y)){
        ctx.strokeStyle = 'black'
    }
    ctx.stroke()
    ctx.fill()
    // ctx.closePath()
    if(rect.width > 10){
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.font = "normal 12px serif";
        ctx.textBaseline = 'top';
        ctx.fillText(option.text,rect.x + 2,rect.y)
    }
}

