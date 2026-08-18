let btn=document.getElementById("btn")

let a=false
function handleClick(){
    a=!a
    if (a==true){
       document.body.classList.add("dark")
      btn.textContent='light'
    }
    else{
          document.body.classList.remove("dark")
      btn.textContent='dark'
    }

  
 
}