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


// For getting Degree of transform

function getDeg(element)
{
    const computedStyle = window.getComputedStyle(element);
    const transformValue = computedStyle.getPropertyValue('transform');
    const matrixPattern = /matrix\((.+?)\)/;
    const match = transformValue.match(matrixPattern);
    if (match) {
      const matrixValues = match[1].split(',').map(parseFloat);
      const a = matrixValues[0];
      const b = matrixValues[1];
      const rotationRad = Math.atan2(b, a);
      const rotationDeg = (rotationRad * 180) / Math.PI;
      return rotationDeg; // Output: 45
    }
    // else {
    //   console.log("No rotation found.");
    // }   
}








var element = document.querySelector('.str1');

// Extracting the rotation value from the transform matrix

const getDeg1 = Math.round(getDeg(element));
// console.log(getDeg1)
element = document.querySelector('.str2');
const getDeg2 = Math.round(getDeg(element));
// console.log(getDeg2)

const diff = ((getDeg1*-1) - (getDeg2*-1))
// console.log(diff)




minicircles.forEach(function(miniC, index){
    miniC.addEventListener("click",function(){
        gsap.to(".circle", {
            rotate: (3 - (index + 1))*diff,
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
