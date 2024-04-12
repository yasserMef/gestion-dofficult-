const name = document.getElementsByClassName("name")[0]
name.addEventListener("change", ChangeName)
let nameUser ;
function ChangeName (e){
    nameUser = e.target.value
}
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


const enregestrer = document.getElementsByClassName("enregestrer")[0]
enregestrer.addEventListener("click" , sumbit)

let authData = []
 async function  sumbit (){
  if(name.value == ""){
    console.log("ggg")
    document.querySelector(".errName").style.display = "block"
    document.querySelector(".errName").innerHTML = "Nom est obligatoire" 
     return;
    }else{
      document.querySelector(".errName").style.display = "none"
    }
    
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
    }else if(password.value.length < 6){
      document.querySelector(".errPassword").style.display = "block"
      document.querySelector(".errPassword").innerHTML = "Mot de passe est trop court"
      return;
  }else{
    document.querySelector(".errPassword").style.display = "none"
}
    const authStorage = JSON.parse(localStorage.getItem("auth"))
    console.log(authStorage)
     if(authStorage){
      const filterUser = authStorage.find(item => item.email == emailUser)
      console.log(filterUser)
      if(filterUser){
        alert(`this email ${emailUser} already exist`)
        return ;
      }else{
        addUser()
      }
      }else{
        addUser()
     }
     
}
const addUser = ()=>{

    let enregestrerObject = {
        name :nameUser,
        email : emailUser,
        password : passwordUser,
        role : "student"
    }
    
    const authStorag = JSON.parse(localStorage.getItem("auth"))
    if(authStorag){
      authData = [...authStorag, enregestrerObject]  
    }else{
      authData.push(enregestrerObject)
    }
    
    localStorage.setItem("auth",JSON.stringify(authData))
    name.value = ""
    email.value=""
    password.value=""
    window.location.href ="login.html"
}