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
    const auth =  JSON.parse(localStorage.getItem("auth"))
    if(auth){
        const verifParEmail = auth.find(item => item.email == emailUser)
        console.log(verifParEmail)
        if(!verifParEmail ){
           alert("passwor or email incorrect")
           return;
        }else if(verifParEmail.password != passwordUser){
            alert("passwor or email incorrect")
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
        alert("passwor or email incorrect")   
        return;
    }
  }
