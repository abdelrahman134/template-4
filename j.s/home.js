let store=document.querySelector(".store1")
var explore=document.querySelector(".sign-btn")

explore.addEventListener("click",()=>{
    if(localStorage.getItem("username")==null){
        location="login.html"
    }
    else{
        location="store.html"
    }
})
store.addEventListener('click',()=>{

    if(localStorage.getItem("username")==null){
        location="login.html"
    }else{
        location="store.html"
    }
})
