let username=document.querySelector(".user")
let password=document.querySelector(".pass")
let email=document.querySelector(".email")
let confirm1=document.querySelector(".confrim")
let btn=document.querySelector(".btn-register")
let eror_p=document.querySelector(".eror-password")
let eror_M=document.querySelector(".eror")

btn.addEventListener('click',()=>{
    if(username.value.trim()===""||password.value.trim()===""||email.value.trim()===""||confirm1.value.trim()===""){
        eror_M.classList.remove("d-none")
        password.addEventListener("focus",()=>{
            eror_M.classList.add("d-none")
        })
            username.addEventListener("focus",()=>{
                eror_M.classList.add("d-none")
                   })     
                    email.addEventListener("focus",()=>{
                    eror_M.classList.add("d-none")
                   } )
confirm1.addEventListener("focus",()=>{
                        eror_M.classList.add("d-none")
                   }  )                                  
    }else if(password.value.trim()!==confirm1.value.trim()){
eror_p.classList.remove("d-none")
password.addEventListener("focus",()=>{
    eror_p.classList.add("d-none")

})
confirm1.addEventListener("focus",()=>{
    eror_p.classList.add("d-none")

})
    }
    
else{
    localStorage.setItem("username",username.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("email",email.value)
    setTimeout(()=>{
        location="login.html"

    },1000)

}})



