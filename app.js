const canvas = document.querySelector(".canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")
const frameCount = 89

const currentFrame = (index) => `${(index+1).toString().padStart(4,'0')}.jpg`
const images = []
let ball = {frame: 0}


for(let i = 0 ; i< frameCount; i++){
    const img = new Image()
    img.src = currentFrame(i)
    images.push(img)
}

gsap.to(ball,{
    frame: frameCount-1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: 'canvas',
        end: "500%",
        markers:true
    },
    onUpdate: render
})

gsap.fromTo(".ball-text",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '60%',
    end: '80%'
}, onComplete: ()=>{
    gsap.to(".ball-text",{opacity:0})
}

})


images[0].onload =render
function render(){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.drawImage(images[ball.frame],0,0)
}