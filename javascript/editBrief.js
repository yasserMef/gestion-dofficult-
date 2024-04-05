const editBrief = JSON.parse(localStorage.getItem("getOneBrief"))
console.log(editBrief.bootcam)
let titreValue = document.getElementsByClassName("titre")[0]
titreValue.value = editBrief.titre
let bootcamValue = document.getElementsByClassName("bootcam")[0]
bootcamValue.value = editBrief.bootcam
let briefValue = document.getElementsByClassName("brief")[0]
briefValue.value = editBrief.brief
let difficultValue = document.getElementsByClassName("diffuclte")[0]
difficultValue.value = editBrief.difficult
let formateurValue = document.getElementsByClassName("nameFotmateur")[0]
  formateurValue.value = editBrief.formateur


document.getElementsByClassName("edit")[0].addEventListener("click" , editOneBrief)
function editOneBrief(){
    const briefs = JSON.parse(localStorage.getItem("briefs"))
   let editOne = briefs.find(item => item.id == editBrief.id)
   let toDaya = new Date()
    let day = `${toDaya.getDay() < 10 ? "0":""}${toDaya.getDay()}`
    let month = `${toDaya.getMonth()+1 < 10 ? "0":""}${toDaya.getMonth()+1}`
    let years = toDaya.getFullYear()
     toDaya = `${day}/${month}/${years}`
    editOne.id = editBrief.id
   titreValue.value==editBrief.titre?editOne.titre = editBrief.titre:editOne.titre = titreValue.value
   bootcamValue.value == editBrief.bootcam ? editOne.bootcam = editBrief.bootcam :editOne.bootcam = bootcamValue.value
   formateurValue.value==editBrief.formateur ? editOne.formateur = editBrief.formateur : editOne.formateur = formateurValue.value
   difficultValue.value == editBrief.difficult ? editOne.difficult = editBrief.difficult:editOne.difficult=difficultValue.value
   briefValue.value == editBrief.brief ? editOne.brief = editBrief.brief :editOne.brief=briefValue.value
   editOne.dateCreation = toDaya
   localStorage.setItem("briefs",JSON.stringify(briefs))
   window.location.href = "student.html"
}