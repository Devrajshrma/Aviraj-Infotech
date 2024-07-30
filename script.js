window.addEventListener("scroll",function(){
document.querySelector("nav").classList.toggle("stiky", window.scrollY>0)
})

window.addEventListener("load", function(){
    document.querySelector(".ldr").style.display='none'
  })
  