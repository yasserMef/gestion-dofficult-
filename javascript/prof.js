const tab = document.getElementsByClassName("tab")[0]
 const briefs = JSON.parse(localStorage.getItem("briefs"))
 const infoUser = JSON.parse(localStorage.getItem("login"))

    document.querySelector(".nameProf").innerHTML = infoUser.name

 
 if(briefs){
    const studentBrief = briefs.filter(item => item.role == "student")
        
        tab.innerHTML = studentBrief.map(item =>
            (`<tr><td>${item.name}</td>
          <td>${item.dateCreation}</td>
          <td><i class="fa-solid fa-eye"  id="openPopup" onClick=showData(${item.id})></i></td>
          <td><i class="fa-solid fa-square-xmark"></i></td>
          <td><img onClick="openPopupModel(${item.id})" id="openPopupModel" src="../images/chatting.png" style="width: 20px;"></td>
              </tr>`)).join("")
    
    
    }

    let getBriefOne;
    const showData = (x) =>{
       console.log(x)
       getBriefOne =   briefs.find(item=> item.id == x)
       getBriefOne.isValid = true
       getBriefOne.isDisabled =true
       localStorage.setItem("briefs",JSON.stringify(briefs))
       document.getElementById("titre").innerHTML = `${getBriefOne.titre}`
       }
       const allRadio = document.querySelectorAll("#radio")
       
    let namoModel = allRadio[0].value ;
     allRadio.forEach(item=> item.addEventListener("change" , changeRadio))
     function changeRadio (e){
        console.log(e.target.checked)
        namoModel = e.target.value
    }
    
    
    function addModol (x){
      let studentModelBrief = briefs.find(item => item.id == x)
        studentModelBrief.id = studentModelBrief.id
        studentModelBrief.typeModel = namoModel
        console.log(studentModelBrief)
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

   /* // Event listener for opening the popup
   const allOpenPoupModel = document.querySelectorAll("#openPopupModel")
   allOpenPoupModel.forEach(item=>item.addEventListener("click" , openPopupModel))*/
   
  

    // Event listener for closing the popup
    document.getElementById("closePopupModel").addEventListener("click", closePopupModel);