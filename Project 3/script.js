gsap.to(".scroll-down-for-more",{
    y:-60,
    duration:.3,
    repeat:-1,
    yoyo:true
})

gsap.from(".page1, .animation, .main-animation ",{
    scale: 2,
    duration: 1,
    transform:"rotate(0deg)",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        markers:true,
        start:"top -2%",
        end:"top -3%",
        scrub:2,
        pin:true

   }
})


const div = document.getElementsByClassName("main-animation")[0];
console.log(div)
const page1 = document.getElementById("page1");
page1.addEventListener("mousemove", function(dets){
    var xval = gsap.utils.mapRange(0, window.innerWidth, -100+div.getBoundingClientRect().width/2, window.innerWidth-(950+div.getBoundingClientRect().width/2), dets.clientX);
    var yval = gsap.utils.mapRange(0, window.innerHeight, -100+div.getBoundingClientRect().height/2, window.innerHeight-(80+div.getBoundingClientRect().height/2), dets.clientY);
    
    gsap.to(".main-animation",{
        left: xval+"px",
        top: yval + "px",
        duration:1,
        ease: Power3
    })
    console.log(dets.clientX);
})


function changekr()
{
    document.getElementsByClassName("animation")[0].style.display = "none";
    div.style.display = "none";
}
gsap.to(".animation, .main-animation, .page2",{
   scrollTrigger:{
        trigger:".page1-main-heading",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top 5%",
        scrub:2,
   }
})

