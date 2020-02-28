var activeUser = JSON.parse(localStorage.getItem('activeUser'));
console.log(activeUser)

if (localStorage.getItem('users') == null) {
  users = hardcodedUsers();

} else {
  users = JSON.parse(localStorage.getItem("users"))
}
if (activeUser == null){
  window.location.href = "./Index.html";
}
var Linkedinurl = activeUser.LinkedinUrl
if (  Linkedinurl !==  null)
{
 
  document.getElementById("linkedinurl").style.display = "none";
    document.getElementById("linkedinbtn").style.display = "none";
    document.getElementById("linkedinUrl").innerHTML = activeUser.LinkedinUrl;
}

var Phone = activeUser.Phone;
if (  Phone !== null)
{
  document.getElementById("phone").style.display = "none";
    document.getElementById("phonebtn").style.display = "none";
    document.getElementById("Phonenum").innerHTML = activeUser.Phone;
}
console.log(users)

document.getElementById("username").innerHTML = activeUser.fname;
document.getElementById("userEMail").innerHTML = activeUser.EMail;


document.getElementById("city1").innerHTML = activeUser.Aarhus;
document.getElementById("city2").innerHTML = activeUser.Copenhagen;
document.getElementById("city3").innerHTML = activeUser.Odense;

document.getElementById("type1").innerHTML = activeUser.Internship;
document.getElementById("type2").innerHTML = activeUser.PartTime;

function edit(){
  window.location.href="./Collectinginfo.html";

}


function SeeJobs(){
  window.location.href="./JobList.html";
}

function Savelinkedin(){
  var Linkedin = document.getElementById('linkedinurl').value;
    activeUser.LinkedinUrl = Linkedin
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    //window.location.href="./newprofile.html";
    document.getElementById("linkedinurl").style.display = "none";
    document.getElementById("linkedinbtn").style.display = "none";
    document.getElementById("linkedinUrl").innerHTML = activeUser.LinkedinUrl;
   
}

function Savephone(){
  var phone = document.getElementById('phone').value;
    activeUser.Phone = phone
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    
    document.getElementById("phone").style.display = "none";
    document.getElementById("phonebtn").style.display = "none";
   

    document.getElementById("Phonenum").innerHTML = activeUser.Phone; 
}


var isLoggedIn = localStorage.getItem('isLoggedIn'); 

function btnLogoutUser(){


  for (let i = 0; i < users.length; i++) {
    if (activeUser.EMail == users[i].EMail) {
      var currentUser = users.indexOf(users[i]);
      break;
    }
  }
    if (currentUser > -1) {
      users.splice(currentUser, 1);
   }
   console.log(currentUser);
  
    users.push(activeUser)
    localStorage.setItem('users', JSON.stringify(users))
    if (isLoggedIn === true){
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', isLoggedIn); 
  
    console.log(isLoggedIn);
  
    }
    window.location.href = "index.html";
  }