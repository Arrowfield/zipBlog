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
    {txt:"00:40",position:""},
    {txt:"00:50",position:""},
    {txt:"00:60",position:""},
    {txt:"00:70",position:""},
]

const numArea = [
    {txt:"0",position:""},
    {txt:"10",position:""},
    {txt:"20",position:""},
    {txt:"30",position:""},
    {txt:"40",position:""},
    {txt:"50",position:""},
    {txt:"60",position:""},
    {txt:"70",position:""},
]

const yAxis = {
    title:"FPS"
}

const labelsArea = [
    {color:"#5A95F8",width:""},
    {color:"#7F52EE",width:""},
    {color:"#65AD93",width:""},
    {color:"#6C78CD",width:""},
    {color:"#B45FDF",width:""},
    {color:"#48A19D",width:""},
    {color:"#DC6068",width:""},
    {color:"#65AB93",width:""},
]

const linesArea = [
    {x:0,y:0},
    {x:10,y:100},
    {x:20,y:90},
    {x:30,y:90},
    {x:40,y:90},
    {x:50,y:90},
]

export const targetChart = function(options){
    if(!options.id) return
    let c = document.getElementById(options.id)
    c.style.width = canvasWidth + 'px'
    c.style.height = canvasHeight + 'px'
    c.width = canvasWidth * window.devicePixelRatio
    c.height = canvasHeight * window.devicePixelRatio
    let ctx = c.getContext('2d')
    ctx.scale(devicePixelRatio, devicePixelRatio) //设置缩放比例，防止高清屏模糊
    drawAxisX(ctx)
    drawAxisY(ctx)
    drawScrollbar(ctx)
    drawLables(ctx)
    drawLines(ctx)
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
    // console.log(window.devicePixelRatio)
    for(let i = 0;i<(step + 1);i++){
        if(!textArea[i]) continue
        ctx.fillText(textArea[i].txt,70 + (i * distance),317)
    }
}

function drawAxisY(ctx){
    ctx.beginPath()
    ctx.lineWidth = 1 
    ctx.strokeStyle = setting.axisColor
    ctx.moveTo(70,300)
    ctx.lineTo(70,100)

    let step = 10
    let distance = 200 / step
    for(let i = 0;i<(step + 1);i++){
        ctx.moveTo(70,300 - i * distance)
        ctx.lineTo(65,300 - i * distance)
    }
    ctx.stroke()
    ctx.beginPath()
    ctx.fillStyle = setting.textColor
    ctx.font = "normal 12px serif";
    ctx.textBaseline = 'middle'
    let widths = []
    // console.log(window.devicePixelRatio)
    for(let i = 0;i<(step + 1);i++){
        if(!textArea[i]) continue
        ctx.fillText(numArea[i].txt,55,300 - i * distance)
        widths.push(ctx.measureText(numArea[i].txt).width)
    }
    console.log(widths)
    //标题
    ctx.beginPath()
    ctx.translate(30,200)
    ctx.font = "bold 14px serif";
    ctx.rotate(-90 * Math.PI / 180)
    ctx.fillText(yAxis.title,0,0)
    //还原原点
    ctx.rotate(90 * Math.PI / 180)
    ctx.translate(-30,-200)

}

function drawScrollbar(ctx){
    ctx.beginPath()
    ctx.translate(70,330)
    ctx.fillStyle = "#5EB0F4"
    ctx.rect(0,0,1320,17)
    ctx.fill()
    //绘制按钮
    const image = new Image()
    image.src = require('../../assets/img/icons/btn_normal.png')
    ctx.drawImage(image, 0,0,22,20,0,-1.5,22,20)
    ctx.drawImage(image, 0,0,22,20,1320 - 22,-1.5,22,20)
    ctx.translate(-70,-330)

}

function drawLables(ctx){
    ctx.translate(70,60)
    let distance = 1320 / labelsArea.length
    for(let i = 0;i<labelsArea.length;i++){
        ctx.beginPath()
        ctx.fillStyle = labelsArea[i].color
        ctx.rect(i * distance,0,distance,20)
        ctx.fill()
    }
    ctx.translate(-70,-60)
}

function drawLines(ctx){
    ctx.translate(70,300)
    ctx.strokeStyle = labelsArea[0].color
    ctx.lineWidth = 2
    ctx.moveTo(linesArea[0].x,linesArea[0].y)
    for(let i = 1;i<linesArea.length;i++){
        ctx.lineTo(linesArea[i].x,-linesArea[i].y)
    }
    ctx.stroke()
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

