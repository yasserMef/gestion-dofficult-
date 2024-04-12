 const tab = document.getElementsByClassName("tab")[0]
 const briefs = JSON.parse(localStorage.getItem("briefs"))
 const infoUser = JSON.parse(localStorage.getItem("login"))
 
 
 
 if(briefs && infoUser){
    console.log(briefs)
    const briefsFilter = briefs.filter(item=>(item.email == infoUser.email && item.role =="student"))
    tab.innerHTML = briefsFilter.map(item =>
                (`
             <td data-label ="Date">${item.dateCreation}</td>
             <td data-label ="difficulté"><i class="fa-solid fa-eye"  id="openPopup" onClick=showData(${item.id})></i></td>
             <td data-label ="validé"><i ${item.isValid==false ?'class="fa-solid fa-square-xmark"':'class="fa-solid fa-square-check"'}></i></td>
             <td data-label ="modifier"><i ${item.isDisabled == false ?'class="fa-solid fa-pen-to-square"':'class="fa-solid fa-pen-to-square disabledIcon"'} onClick=editData(${item.id})></i></td>
             <td data-label ="supprimé"><i ${item.isDisabled == false?'class="fa-solid fa-trash"':'class="fa-solid fa-trash disabledIcon"'} onClick=deleteOne(${item.id})></i></td></tr>`)).join("")
    }
  
if(infoUser){
    document.getElementsByClassName("nameUser")[0].innerHTML = infoUser.name
}
 

 let getBriefOne;
 const showData = (x) =>{
    console.log(x)
    getBriefOne =   briefs.find(item=> item.id == x)
    document.getElementById("method").innerHTML = `${getBriefOne.typeModel}`
    document.getElementById("solution").innerHTML = `${getBriefOne.modal}`
    if( getBriefOne.modal == "" || getBriefOne.typeModel=="" || getBriefOne.modal == undefined ||getBriefOne.typeModel==undefined ){
      document.getElementById("titre").innerHTML = `${getBriefOne.titre}`
      document.getElementById("bootcam").innerHTML = `${getBriefOne.bootcam}`
      document.getElementById("brief").innerHTML = `${getBriefOne.brief}`
      document.getElementById("description").innerHTML = `${getBriefOne.difficult}`
      document.getElementById("method").parentElement.style.display ="none"
      document.getElementById("solution").parentElement.style.display = "none"
     }else{
     console.log(getBriefOne.modal)
      document.getElementById("titre").innerHTML = `${getBriefOne.titre}`
      document.getElementById("bootcam").innerHTML = `${getBriefOne.bootcam}`
      document.getElementById("brief").innerHTML = `${getBriefOne.brief}`
      document.getElementById("description").innerHTML = `${getBriefOne.difficult}`
      document.getElementById("method").parentElement.style.display ="block"
      document.getElementById("solution").parentElement.style.display = "block"
    }
    }
    
    const editData = (x)=>{
        console.log("hello")
        getBriefOne =   briefs.find(item=> item.id == x)
        localStorage.setItem("getOneBrief", JSON.stringify(getBriefOne))
        window.location.href = "editBrief.html"
    }

    const deleteOne = (x) =>{
    let deletBrief = briefs.filter(item => item.id != x )
    localStorage.setItem("briefs" ,JSON.stringify(deletBrief))
    window.location.reload()
    }

    // Function to open the popup
    function openPopup() {
        console.log("hello")
        document.getElementById("popup").style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // Event listener for opening the popup
   const allOpenPoup = document.querySelectorAll("#openPopup")
   allOpenPoup.forEach(item=>item.addEventListener("click" , openPopup))
   
  

    // Event listener for closing the popup
    document.getElementById("closePopup").addEventListener("click", closePopup);

    
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