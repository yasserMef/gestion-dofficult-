const auth = JSON.parse(localStorage.getItem("auth"))

let nameFormat = document.getElementsByClassName("nameFotmateur")[0]


if(auth){
    const authForma = auth.filter(item =>item.role == "prof")
    nameFormat.innerHTML = `<option value=0>Formateur</option>${authForma.map(item =>`<option value=${item.email}>${item.name}</option>`).join("")}`
   
}



nameFormat.addEventListener("change" , changeNameForm)

let emailAdmin ;
function changeNameForm(e){
    if(e.target.value != "0" && e.target.value != ""){
    document.querySelector(".errNameProf").style.display = "none"
  }
   emailAdmin = e.target.value
  
}

const nameBoot = document.getElementsByClassName("bootcam")[0]
nameBoot.addEventListener("change" , changeNameBootcam)
let nameBootcam;
function changeNameBootcam(e){
    if(nameBoot.value != "0" || nameBoot.value !=""){
        document.querySelector(".errNameBoot").style.display = "none"
    }
    nameBootcam = e.target.value
}

const titreDocum = document.getElementsByClassName("titre")[0]
titreDocum.addEventListener("change" , titreFun)
let titreVar;
function titreFun(e){
    if(titreDocum.value !=""){
        document.querySelector(".errTitre").style.display = "none"
        }
   titreVar = e.target.value
}

const briefDocum = document.getElementsByClassName("brief")[0]
briefDocum.addEventListener("change" , briefFun)
let briefVar;
function briefFun(e){
    if(briefDocum.value !=""){
        document.querySelector(".errBrief").style.display = "none"
    }
   briefVar = e.target.value
}

const diffuclteDocum = document.getElementsByClassName("diffuclte")[0]
diffuclteDocum.addEventListener("change" , diffuclteFun)
let diffuclteVar;
function diffuclteFun(e){
    if(diffuclteDocum.value !=""){
        document.querySelector(".errDifficult").style.display = "none"
    }
    diffuclteVar = e.target.value
}

const addBrief = document.getElementsByClassName("add")[0]
addBrief.addEventListener("click" , ajouteBrief)
 let i = 0
 let addBriefArray = []
 const infoUser = JSON.parse(localStorage.getItem("login"))

 function ajouteBrief(){
     if(nameFormat.value == "0" || nameFormat.value ==""){
        document.querySelector(".errNameProf").style.display = "block"
        document.querySelector(".errNameProf").innerHTML = "Choisissez un nom de formateur"
        return;
     }

     if(nameBoot.value == "0" || nameBoot.value ==""){
        document.querySelector(".errNameBoot").style.display = "block"
        document.querySelector(".errNameBoot").innerHTML = "Choisissez un nom de bootcam"
        return;
     }

     if(titreDocum.value ==""){
        document.querySelector(".errTitre").style.display = "block"
        document.querySelector(".errTitre").innerHTML = "Titre est un obligatoire"
        return;
     }

     if(briefDocum.value ==""){
        document.querySelector(".errBrief").style.display = "block"
        document.querySelector(".errBrief").innerHTML = "Brief est un obligatoire"
        return;
     }

     if(diffuclteDocum.value ==""){
        document.querySelector(".errDifficult").style.display = "block"
        document.querySelector(".errDifficult").innerHTML = "Diffuculté est un obligatoire"
        return;
     }

    const getBriefArray = JSON.parse(localStorage.getItem("briefs"))
    if(getBriefArray && getBriefArray.length != 0 ){
        i = getBriefArray[getBriefArray.length -1].id + 1
    }else {
        i++
    }
    console.log(i)
    let toDaya = new Date()
    let day = `${toDaya.getDay() < 10 ? "0":""}${toDaya.getDay()}`
    let month = `${toDaya.getMonth()+1 < 10 ? "0":""}${toDaya.getMonth()+1}`
    let years = toDaya.getFullYear()
     toDaya = `${day}/${month}/${years}`
    let addBriefObjet = {
        id:i,
        email :infoUser.email,
        name :infoUser.name,
        emailAdmin :emailAdmin,
        role:infoUser.role,
        bootcam : nameBootcam,
        titre : titreVar,
        brief : briefVar,
        difficult : diffuclteVar,
        dateCreation : toDaya,
        isDisabled : false,
        isValid : false,
        isValidFormat :false,
        typeModel:"",
        modal:"",
    }
    console.log(addBriefObjet)
    if(getBriefArray){
        addBriefArray =[...getBriefArray ,addBriefObjet ]
    }else{
        addBriefArray.push(addBriefObjet)
    }
    localStorage.setItem("briefs" , JSON.stringify(addBriefArray))
    window.location.href = "student.html"
}

let profilDropdown = false
    document.querySelector(".profil").addEventListener('click' , dropdownEvent)
    
    function dropdownEvent (){
         profilDropdown = !profilDropdown
         if(profilDropdown){
            document.querySelector(".disconnect").style.visibility = "visible"
         }else{
            document.querySelector(".disconnect").style.visibility = "hidden"
         }
    }

    document.querySelector(".disconnect").addEventListener('click' , deconnectApp)
    function deconnectApp(){
        localStorage.removeItem("login")
        window.location.href = "login.html"
    }