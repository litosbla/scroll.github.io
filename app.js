const canvas = document.querySelector(".canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d")
const frameCount = 265

const currentFrame = (index) => `assets3/scene${(index+1).toString().padStart(5,'0')}.png`
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
        /*markers:true*/
    },
    onUpdate: render
})

gsap.fromTo("#h_1",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '3%',
    end: '22%'
}, onComplete: ()=>{
    gsap.to("#h_1",{opacity:0})
}

})

gsap.fromTo("#p_1",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '5%',
    end: '22%'
}, onComplete: ()=>{
    gsap.to("#p_1",{opacity:0})
}

})
gsap.fromTo("#h_2",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '25%',
    end: '48%'
}, onComplete: ()=>{
    gsap.to("#h_2",{opacity:0})
}

})

gsap.fromTo("#p_2",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '27%',
    end: '48%'
}, onComplete: ()=>{
    gsap.to("#p_2",{opacity:0})
}

})
gsap.fromTo("#h_3",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '50%',
    end: '90%'
}, onComplete: ()=>{
    gsap.to("#h_2",{opacity:0})
}

})
gsap.fromTo("#p_3",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '50%',
    end: '60%'
}, onComplete: ()=>{
    gsap.to("#p_3",{opacity:0})
}

})
gsap.fromTo("#p_4",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '60%',
    end: '70%'
}, onComplete: ()=>{
    gsap.to("#p_4",{opacity:0})
}

})
gsap.fromTo("#p_5",{opacity: 0 }, 
{opacity:1,scrollTrigger:{
    scrub: true,
    start: '70%',
    end: '90%'
}, onComplete: ()=>{
    gsap.to("#p_5",{opacity:0})
}

})


images[0].onload =render
function render(){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.drawImage(images[ball.frame],0,0,canvas.width,canvas.height)
}