const nameFormat = document.getElementsByClassName("nameFotmateur")[0]
nameFormat.addEventListener("change" , changeNameForm)
let nameFotmateur;
function changeNameForm(e){
  nameFotmateur = e.target.value
}

const nameBoot = document.getElementsByClassName("bootcam")[0]
nameBoot.addEventListener("change" , changeNameBootcam)
let nameBootcam;
function changeNameBootcam(e){
    nameBootcam = e.target.value
}

const titreDocum = document.getElementsByClassName("titre")[0]
titreDocum.addEventListener("change" , titreFun)
let titreVar;
function titreFun(e){
   titreVar = e.target.value
}

const briefDocum = document.getElementsByClassName("brief")[0]
briefDocum.addEventListener("change" , briefFun)
let briefVar;
function briefFun(e){
   briefVar = e.target.value
}

const diffuclteDocum = document.getElementsByClassName("diffuclte")[0]
diffuclteDocum.addEventListener("change" , diffuclteFun)
let diffuclteVar;
function diffuclteFun(e){
    diffuclteVar = e.target.value
}

const addBrief = document.getElementsByClassName("add")[0]
addBrief.addEventListener("click" , ajouteBrief)
 let i = 0
 let addBriefArray = []
 const infoUser = JSON.parse(localStorage.getItem("login"))
function ajouteBrief(){
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
        role:infoUser.role,
        formateur : nameFotmateur,
        bootcam : nameBootcam,
        titre : titreVar,
        brief : briefVar,
        difficult : diffuclteVar,
        dateCreation : toDaya,
        isDisabled : false,
        isValid : false,
        typeModel:"",
        modal:"",
    }
    
    if(getBriefArray){
        addBriefArray =[...getBriefArray ,addBriefObjet ]
    }else{
        addBriefArray.push(addBriefObjet)
    }
    localStorage.setItem("briefs" , JSON.stringify(addBriefArray))
    window.location.href = "student.html"
}