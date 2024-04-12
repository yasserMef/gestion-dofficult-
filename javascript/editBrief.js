const editBrief = JSON.parse(localStorage.getItem("getOneBrief"))
console.log(editBrief.bootcam)

let titreValue = document.getElementsByClassName("titre")[0]
titreValue.value = editBrief.titre
let briefValue = document.getElementsByClassName("brief")[0]
briefValue.value = editBrief.brief
let difficultValue = document.getElementsByClassName("diffuclte")[0]
difficultValue.value = editBrief.difficult



document.getElementsByClassName("edit")[0].addEventListener("click" , editOneBrief)
function editOneBrief(){
    if(titreValue.value ==""){
        document.querySelector(".errTitre").style.display = "block"
        document.querySelector(".errTitre").innerHTML = "Titre est un obligatoire"
        return;
     }

     if(briefValue.value ==""){
        document.querySelector(".errBrief").style.display = "block"
        document.querySelector(".errBrief").innerHTML = "Brief est un obligatoire"
        return;
     }

     if(difficultValue.value ==""){
        document.querySelector(".errDifficult").style.display = "block"
        document.querySelector(".errDifficult").innerHTML = "Diffuculté est un obligatoire"
        return;
     }
    const briefs = JSON.parse(localStorage.getItem("briefs"))
   let editOne = briefs.find(item => item.id == editBrief.id)
   let toDaya = new Date()
    let day = `${toDaya.getDay() < 10 ? "0":""}${toDaya.getDay()}`
    let month = `${toDaya.getMonth()+1 < 10 ? "0":""}${toDaya.getMonth()+1}`
    let years = toDaya.getFullYear()
     toDaya = `${day}/${month}/${years}`
    editOne.id = editBrief.id
   titreValue.value==editBrief.titre?editOne.titre = editBrief.titre:editOne.titre = titreValue.value
   difficultValue.value == editBrief.difficult ? editOne.difficult = editBrief.difficult:editOne.difficult=difficultValue.value
   briefValue.value == editBrief.brief ? editOne.brief = editBrief.brief :editOne.brief=briefValue.value
   editOne.dateCreation = toDaya
   localStorage.setItem("briefs",JSON.stringify(briefs))
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