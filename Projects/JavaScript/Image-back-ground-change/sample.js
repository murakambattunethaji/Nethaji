var imgbox = document.querySelector(".img-box")
var imgwrape = document.querySelector(".img-wrape")
var originalimg = document.getElementById("originalimg")
var line = document.getElementById("line")

originalimg.style.width = imgbox.offsetwidth + "px"

var leftspace = imgbox.offsetleft

imgbox.onmousemove = function(e){
    var boxwidth = (e.pageX - leftspace) + "px"
    imgwrape.style.width = boxwidth
    line.style.left = boxwidth
}