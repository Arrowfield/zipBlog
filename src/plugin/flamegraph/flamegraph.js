const canvasWidth = 1000
const canvasHeight = 626
const gridLeft = 10
const gridBottom = 60
const rectHeight = 15

let series = [
    {
        rect:{x:10,y:566,width:980,height:15},
        color:"rgb(213,111,15)",
        text:"all"
    },
    {
        rect:{x:10,y:566 - rectHeight - 1,width:979.4,height:15},
        color:"rgb(217,213,48)",
        text:"mysqld`rec_get_status"
    },
    {
        rect:{x:989.4,y:566-rectHeight - 1,width:.6,height:15},
        color:"rgb(228,56,25)",
        text:"mysqld`Item::const_item"
    }
]
export const createCanvas = function(options){
    if(!options.id) return
    let c = document.getElementById(options.id)
    c.style.width = canvasWidth + 'px'
    c.style.height = canvasHeight + 'px'
    c.width = canvasWidth * window.devicePixelRatio
    c.height = canvasHeight * window.devicePixelRatio
    let ctx = c.getContext('2d')
    ctx.scale(devicePixelRatio, devicePixelRatio); //设置缩放比例，防止高清屏模糊
    drawBackground(ctx)
    for(let i=0;i<series.length;i++){  
        draw(ctx,series[i])
    }
    c.onmousemove = function(e){
        ctx.clearRect(0,0,canvasWidth,canvasHeight)
        drawBackground(ctx)
        // 得到鼠标的坐标
        var x = e.pageX * window.devicePixelRatio, y =e.pageY * window.devicePixelRatio
        for(let i=0;i<series.length;i++){
            draw(ctx,series[i],{x,y},c)
        }
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

