let number=document.querySelector(".number")
let decrease = document.querySelector(".decrease")
let reset =document.querySelector(".reset")
let increase = document.querySelector(".increase")
console.log(decrease)
let num = 0



number.innerHTML=num
decrease.addEventListener("click", function(){
    num--
    console.log(num)
    number.innerHTML=num
    number.style.color = "red"
})


reset.addEventListener("click", function(){
    num=0
    number.innerHTML = num
    number.style.color = "black"
})

increase.addEventListener("click", function(){
    num++
    console.log(num)
    number.innerHTML=num
    number.style.color = "green"
})
