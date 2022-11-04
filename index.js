let index = 0;

//su kien lan chuot
const header = document.querySelector("header")
window.addEventListener("scroll", function()
{
    x = this.window.pageYOffset
    if(x>0)
        header.classList.add("sticky")
    else
        header.classList.remove("sticky")
})

 ///--------------------------Category-----------------------------------

const itemSlidebar = document.querySelectorAll(".category-left-li")
itemSlidebar.forEach(function(menu, index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})


//---------------------------product-----------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x)
{
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})


const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
const button = document.querySelector(".product-content-right-bottom-top")

if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block";
    })
}

if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}

if(button)
{
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-big").classList.toggle("active")
    })
}