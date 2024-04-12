const email = document.getElementsByClassName("email")[0]
email.addEventListener("change", ChangeEmail)
let emailUser ;
function ChangeEmail (e){
    emailUser = e.target.value
}
const password = document.getElementsByClassName("password")[0]
password.addEventListener("change", ChangePassword)
let passwordUser ;
function ChangePassword (e){
    passwordUser = e.target.value
}
const login = document.getElementsByClassName("login")[0]
login.addEventListener("click" , sumbit)

  function  sumbit (){
    if(email.value == ""){
        document.querySelector(".errEmail").style.display = "block"
        document.querySelector(".errEmail").innerHTML = "Email est obligatoire" 
         return;
        }else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
          document.querySelector(".errEmail").style.display = "block"
          document.querySelector(".errEmail").innerHTML = "Email invalide"
          return;
      }else{
        document.querySelector(".errEmail").style.display = "none"
      }
        
      if(password.value == ""){
        document.querySelector(".errPassword").style.display = "block"
        document.querySelector(".errPassword").innerHTML = "Mot de passe est obligatoire" 
         return;
        }else{
        document.querySelector(".errPassword").style.display = "none"
    }
    
    const auth =  JSON.parse(localStorage.getItem("auth"))
    if(auth){
        const verifParEmail = auth.find(item => item.email == emailUser)
        console.log(verifParEmail)
        if(!verifParEmail ){
           alert("Vous n'étes pas enregestré")
           return;
        }else if(verifParEmail.password != passwordUser){
            alert("password or email incorrect")
            return;
        }
        if(verifParEmail.role == "prof"){
            window.location.href = "prof.html"
            localStorage.setItem("login" , JSON.stringify(verifParEmail))
        }else{
            window.location.href ="student.html"
            localStorage.setItem("login" , JSON.stringify(verifParEmail))
        }
       }else{
        alert("Vous n'étes pas enregestré")   
        return;
    }
  }
