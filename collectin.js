var activeUser = JSON.parse(localStorage.getItem('activeUser'))
users = hardcodedUsers();

console.log(users)

console.log(activeUser)

if (activeUser == null){
  window.location.href = "./Index.html";
}

// this section checks the boxes of the cities stored in the properties for when the user wants to edit them
document.getElementById ('preferedcities').style.display ='block';
document.getElementById ('preferedtype').style.display ='none';

if (activeUser.Aarhus === "Aarhus"){
    document.getElementById("Aar").checked = true;

}


if (activeUser.Copenhagen === "Copenhagen"){
    document.getElementById("Cph").checked =true;;
    
}

if (activeUser.Odense === "Odense"){
    document.getElementById("Ode").checked =true;
}


if (activeUser.Internship === "Internship"){
    document.getElementById("internship").checked =true;;
}


if (activeUser.PartTime === "Part Time"){
    document.getElementById("parttime").checked =true;;
}



// this function stores a string in the activeUSer object if the box is checked
function nextbtn1(){

  document.getElementById ('preferedcities').style.display ='none';
  document.getElementById ('preferedtype').style.display ='block';

var Aarhus = document.getElementById("Aar");
var Copenhagen = document.getElementById("Cph");
var Odense = document.getElementById("Ode");


if (Aarhus.checked === true){
    activeUser.Aarhus = "Aarhus"
    
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  else {
    activeUser.Aarhus = null
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  if (Copenhagen.checked === true){
    activeUser.Copenhagen = "Copenhagen"
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  else {
    activeUser.Copenhagen = null
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  
  if (Odense.checked === true){
    activeUser.Odense = "Odense"
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  else {
    activeUser.Odense = null
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  
  }


}

// this function stores a string in the activeUSer object if the box is checked
function nextbtn2(){

  document.getElementById ('preferedcities').style.display ='none';
  document.getElementById ('preferedtype').style.display ='none';


  var PartTime = document.getElementById("parttime");
  var Internship = document.getElementById("internship");



if (PartTime.checked === true){
    activeUser.PartTime = "Part Time"
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  else {
    activeUser.PartTime = null
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  
  }
  
  if (Internship.checked === true){
    activeUser.Internship = "Internship"
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }
  else {
    activeUser.Internship = null
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  
  }
      window.location.href="./newprofile.html";

}
