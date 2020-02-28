

if (localStorage.getItem('users') == null) {
    users = hardcodedUsers();
  
  } else {
    users = JSON.parse(localStorage.getItem("users"))
  }
  console.log(users)
  
  var activeUser = JSON.parse(localStorage.getItem('activeUser'))
  console.log(activeUser)


    
var company= localStorage.getItem('Company')
var city= localStorage.getItem('City')
var code = localStorage.getItem('Code')
console.log(code)
console.log(city)
console.log(company)
document.getElementById("COMPANY").innerHTML = company;
document.getElementById("CITY").innerHTML = city;


  document.getElementById("fname").innerHTML = activeUser.fname;
  document.getElementById("lname").innerHTML = activeUser.lname;
  
  document.getElementById("userEMail").innerHTML = activeUser.EMail;
  document.getElementById("Phonenum").innerHTML = activeUser.Phone;
  document.getElementById("linkedinUrl").innerHTML = activeUser.LinkedinUrl;
  
//checks to see if they have applied to three jobs and if they havent it stores the code into it.
function Apply(){ 
  checkbox = document.getElementById("concent").checked
  console.log(checkbox)

  if(checkbox == true){
    if (activeUser.Applied1 === null){
        activeUser.Applied1 = code
        localStorage.setItem('activeUser', JSON.stringify(activeUser))
      }
      else if(activeUser.Applied2 === null ){
          activeUser.Applied2 = code
      localStorage.setItem('activeUser', JSON.stringify(activeUser))
    }
    else if (activeUser.Applied3 === null )
    {
      activeUser.Applied3 = code
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    }
    window.location="JobList.html";
  }
  else {
    alert("Your concent is required in order to submit your application")
  }
}

function back() {
  window.location="JobList.html";
  
    }