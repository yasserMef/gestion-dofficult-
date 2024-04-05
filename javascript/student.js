 const tab = document.getElementsByClassName("tab")[0]
 const briefs = JSON.parse(localStorage.getItem("briefs"))
 const infoUser = JSON.parse(localStorage.getItem("login"))
 
 
 
 if(briefs && infoUser){
    console.log(briefs)
    const briefsFilter = briefs.filter(item=>(item.email == infoUser.email && item.role =="student"))
    tab.innerHTML = briefsFilter.map(item =>
                (`<tr><td>${infoUser.name}</td>
             <td>${item.dateCreation}</td>
             <td><i class="fa-solid fa-eye"  id="openPopup" onClick=showData(${item.id})></i></td>
             <td><i ${item.isValid==false ?'class="fa-solid fa-square-xmark"':'class="fa-solid fa-square-check"'}></i></td>
             <td><i ${item.isDisabled == false ?'class="fa-solid fa-pen-to-square"':'class="fa-solid fa-pen-to-square disabledIcon"'} onClick=editData(${item.id})></i></td>
             <td><i ${item.isDisabled == false?'class="fa-solid fa-trash"':'class="fa-solid fa-trash disabledIcon"'} onClick=deleteOne(${item.id})></i></td></tr>`)).join("")
    }
  
if(infoUser){
    document.getElementsByClassName("nameUser")[0].innerHTML = infoUser.name
}
 

 let getBriefOne;
 const showData = (x) =>{
    console.log(x)
    getBriefOne =   briefs.find(item=> item.id == x)
    document.getElementById("titre").innerHTML = `${getBriefOne.titre}`
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