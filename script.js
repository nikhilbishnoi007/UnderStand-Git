let btn=document.getElementById("btn")
let anchor=document.getElementById("anchor")
let a=false
function handleClick(){
    a=!a
    if (a==true){
       document.body.classList.add("dark")
       document.body.classList.remove("light")
      btn.textContent='light'
    }
    else{
      document.body.classList.add("light")
        document.body.classList.remove("dark")
      btn.textContent='dark'
    }
  if(document.body.classList=="dark"){
    btn.classList.add("dark")
    anchor.classList.add("dark")
  }
  else{
    btn.classList.remove("dark")
    anchor.classList.remove("dark")
    anchor.classList.add("light")
  }
  
 
}