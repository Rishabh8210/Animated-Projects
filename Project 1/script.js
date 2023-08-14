

const crsr = document.querySelector("#cursor");
const crsrBlr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x-11+"px";
    crsr.style.top = dets.y-11+"px";
    crsrBlr.style.left = dets.x-250 +"px";
    crsrBlr.style.top = dets.y-250+"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height: "105px",
    duration:0.4,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

const h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.border = "1px solid #fff";
        crsr.style.scale = 4
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E"
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})

gsap.from("#card-container",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#main2",{
    y:90,
    opacity:0,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#main2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#inverted-comma1 img",{
    y:-40,x:-20,
    opacity:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#inverted-comma1 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:1
    }
})
gsap.from("#inverted-comma2 img",{
    y:-40,x:-20,
    opacity:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#inverted-comma2 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:1
    }
})

