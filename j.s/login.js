let username=document.querySelector(".user")
let password=document.querySelector(".pass")
let erorM=document.querySelector(".eror-message")

let btn=document.querySelector(".btn-login")
let regPassword=localStorage.getItem('password')
let regUsername=localStorage.getItem('username')

btn.addEventListener('click',()=>{
   if(username.value.trim()!==regUsername || password.value.trim()!==regPassword){
    
    erorM.classList.remove("d-none")
   
   username.addEventListener('focus',()=>{
    erorM.classList.add("d-none")

   })
   password.addEventListener('focus',()=>{
    erorM.classList.add("d-none")
    
   })}
   else{
   setTimeout(()=>{
    location="store.html"
   },1000)
}
})