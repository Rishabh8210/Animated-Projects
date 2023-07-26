const active = 3;

const minicircles = document.querySelectorAll(".minicircle");
const secondHalf = document.querySelectorAll(".second-half");
const semicircleSpan = document.querySelectorAll(".semicircle span");
const sound = document.querySelector("audio");

gsap.to(minicircles[active-1], {
    opacity:1.3
})

gsap.to(secondHalf[active-1],{
    opacity:1.3
})

gsap.to(semicircleSpan[active-1],{
    opacity:1.3
})

minicircles.forEach(function(miniC, index){
    miniC.addEventListener("click",function(){
        gsap.to(".circle", {
            rotate: (3 - (index + 1))*10,
            ease:Expo.easeInOut,
            duration:1
        })

        setTimeout(playSound(),2000)

        greyOut();
        gsap.to(this, {
            opacity:1.3
        })
        gsap.to(secondHalf[index],{
            opacity:1.3,
        })
        gsap.to(semicircleSpan[index],{
            opacity:1.3,
        })
    })
})

function greyOut()
{
    gsap.to(minicircles, {
        opacity:0.3
    })
    gsap.to(secondHalf,{
        opacity:0.3
    })
    gsap.to(semicircleSpan,{
        opacity:0.3
    })
}

function playSound()
{
    sound.play();
}

gsap.to(".circle",{
    rotate:0,
    ease : Expo.easeInOut,
    duration:1.5
})
