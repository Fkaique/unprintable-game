const canvas = document.createElement('canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
const ctx = canvas.getContext('2d')

const background = new ImageData(canvas.width,canvas.height)
const ground = new ImageData(canvas.width,100)
const obj = new ImageData(100,100)

document.body.append(canvas)

const SPEED = 5
const width = 100
const height = 100

let positionX = 10
let positionY = 10


let hspd = 0
let vspd = 0

let keys = new Set()

// document.addEventListener('click', ()=>{
//     const actx = new AudioContext()
//     const data = actx.createBuffer(2,actx.sampleRate*2,actx.sampleRate)
    
    
//     for (let c=0;c<data.numberOfChannels;c++){
//         const channelData = data.getChannelData(c)
//         for (let i=0; i<channelData.length;i++){
//             channelData[i]=(Math.random()*2-1)*0.2
//         }
//         console.log(channelData.buffer);
        
//     }
    
//     const audio = actx.createBufferSource()
//     audio.buffer = data
//     audio.connect(actx.destination)
    
//     audio.loop = true
//     audio.start()
// })

document.body.addEventListener('keydown',(event)=>{
    keys.add(event.key)
})

document.body.addEventListener('keyup',(event)=>{
    keys.delete(event.key)
})

console.log(background.data);

for (let p=0;p<ground.width*ground.height;p++){
    let rand = Math.round(Math.random()*255)
    let i=p*4
    ground.data[i] = rand*2
    ground.data[i+1] = rand*3
    ground.data[i+2] = rand*4
    ground.data[i+3] = 255
}

for (let p=0;p<obj.width*obj.height;p++){
    let rand = Math.round(Math.random()*255)
    let i=p*4
    obj.data[i] = rand*2
    obj.data[i+1] = rand*3
    obj.data[i+2] = rand*4
    obj.data[i+3] = 255
}



function loop(){
    requestAnimationFrame(loop)
    
    for (let p=0;p<background.width*background.height;p++){
        let rand = Math.round(Math.random()*255)
        let i=p*4
        background.data[i] = rand*2
        background.data[i+1] = rand*3
        background.data[i+2] = rand*4
        background.data[i+3] = 255
    }
    
    hspd=(Number(keys.has('d')) - Number(keys.has('a')))*SPEED
    vspd=(Number(keys.has('s')) - Number(keys.has('w')))*SPEED

    positionX+=hspd
    positionY+=vspd

    ctx.putImageData(background,0,0)
    ctx.putImageData(ground,0,canvas.height-ground.height)
    ctx.putImageData(obj,positionX,positionY)
}

loop()
// button.addEventListener('click', ()=>{
//     button.style.backgroundColor = 
// })