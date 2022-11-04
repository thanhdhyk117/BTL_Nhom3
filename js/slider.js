const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
var numb = 0
let imgNumber = imgPosition.length
imgPosition.forEach(function(image, numb){
    console.log(imgPosition)
    image.style.left = numb * 100 + "%"
    dotItem[numb].addEventListener("click", function()
    {
        Slider(numb)
    })
    
})

function imgSlide(){
  numb++;
    if(numb >= imgNumber)
      numb = 0
    Slider(numb)
}

function Slider(numb){
    imgContainer.style.left = "-" + numb * 100 + "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[numb].classList.add("active")
}
setInterval(imgSlide, 5000)