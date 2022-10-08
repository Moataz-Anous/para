
let next = document.getElementById("next")
let prev = document.getElementById("prev")





let main = document.querySelector("#main-image")
let first = document.querySelector("#img")
let sec = document.querySelector("#img2")

let slider = Array.from(document.querySelectorAll("#kake img"))
let i = 0
slider[0]= "image-tanya.jpg"
slider[1]= "image-john.jpg"

console.log(slider[i])

function changeImg(){
    if(i < slider.length - 2){
        i++
    }else {
        i =0
    }
    
    main.src = slider[i]
}

next.onclick = function(){
    changeImg()
}
prev.onclick = function(){
    changeImg()
}

