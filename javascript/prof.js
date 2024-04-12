const tab = document.getElementsByClassName("tab")[0]
const briefs = JSON.parse(localStorage.getItem("briefs"))
const infoUser = JSON.parse(localStorage.getItem("login"))

document.querySelector(".nameProf").innerHTML = infoUser.name
    
 
 if(briefs){
  

   const studentBrief = briefs.filter(item => (item.role == "student" && item.emailAdmin == infoUser.email ))
   
    tab.innerHTML = studentBrief.map(item =>
            (`<tr>
            <td data-label ="Nom">${item.name}</td>
          <td data-label ="Date">${item.dateCreation}</td>
          <td data-label ="Difficulté"><i class="fa-solid fa-eye"  id="openPopup" onClick=showData(${item.id})></i></td>
          <td data-label ="Validé"><i ${item.isValidFormat==false ?'class="fa-solid fa-square-xmark"':'class="fa-solid fa-square-check"'}></i></td>
          <td data-label ="Solution"><img onClick="openPopupModel(${item.id})" id="openPopupModel" src="../images/chatting.png" style="width: 20px;"></td>
              </tr>`)).join("")
    }

    let getBriefOne;
    const showData = (x) =>{
       console.log(x)
       getBriefOne =   briefs.find(item=> item.id == x)
       getBriefOne.isValid = true
       getBriefOne.isDisabled =true
       localStorage.setItem("briefs",JSON.stringify(briefs))
      document.getElementById("method").innerHTML = `${getBriefOne.typeModel}`
      document.getElementById("solution").innerHTML = `${getBriefOne.modal}`
      if( getBriefOne.modal == "" || getBriefOne.typeModel=="" || getBriefOne.modal == undefined ||getBriefOne.typeModel==undefined ){
        console.log(getBriefOne.modal)
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
    const allRadio = document.querySelectorAll("#radio")
    let namoModel = allRadio[0].value ;
     allRadio.forEach(item=> item.addEventListener("change" , changeRadio))
     function changeRadio (e){
        namoModel = e.target.value
    }
      let solutionModel ;
      const solutionVal = document.querySelector(".solution")
      solutionVal.addEventListener("change" , changeSolution)
    function changeSolution (e){
      solutionModel = e.target.value
      }
    
    function addModol (x){
       console.log(solutionModel)
     if(solutionVal.value == "" ){
         document.querySelector(".errSolution").innerHTML = "Solution est obligatoire"
         document.querySelector(".errSolution").style.display = "block"
         document.getElementById("popupModel").style.display = "block";
         return;
      }else{
        let studentModelBrief = briefs.find(item => item.id == x)
        studentModelBrief.id = studentModelBrief.id
        studentModelBrief.typeModel = namoModel
        studentModelBrief.modal = solutionModel
        studentModelBrief.isValidFormat = true
        localStorage.setItem("briefs" ,JSON.stringify( briefs))
        document.querySelector(".errSolution").style.display = "none"
        //document.getElementById("popupModel").style.display = "none";
       // solutionVal.value =""
        window.location.reload()
      }
      
      
       
       
    }

    
    
    // Function to open the popup
    function openPopup(x) {
        
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

    



     // Function to open the popup
     function openPopupModel(x) {
        document.querySelector(".btnModel").addEventListener("click" ,()=>addModol(x))
        document.getElementById("popupModel").style.display = "block";
    }

    // Function to close the popup
    function closePopupModel() {
       document.getElementById("popupModel").style.display = "none";
    }

   // Event listener for closing the popup
    document.getElementById("closePopupModel").addEventListener("click", closePopupModel);

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