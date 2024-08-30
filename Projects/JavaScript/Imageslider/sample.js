let scroolcontainer = document.querySelector(".gallery")
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")

scroolcontainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    scroolcontainer.scrollLeft += evt.deltaY
    scroolcontainer.style.scrollBehavior = "auto"

})

nextbtn.addEventListener("click", ()=>{
    scroolcontainer.style.scrollBehavior = "smooth"
    scroolcontainer.scrollLeft += 300
})

backbtn.addEventListener("click", ()=>{
    scroolcontainer.style.scrollBehavior = "smooth"
    scroolcontainer.scrollLeft -= 900
})