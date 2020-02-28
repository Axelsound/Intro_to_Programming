
let activeUser;
let users;

document.getElementById ('registration').style.display ='block';
document.getElementById ('login2').style.display ='none';


if (localStorage.getItem('users') == null) {
  users = hardcodedUsers();
} else {
  users = JSON.parse(localStorage.getItem("users"))
}
console.log(users)

var isLoggedIn = false;
console.log(isLoggedIn);

    
    var isLoggedInStringified = JSON.stringify(isLoggedIn);
    localStorage.setItem('isLoggedIn', isLoggedInStringified);

function register(){

  document.getElementById ('registration').style.display ='block';
document.getElementById ('login2').style.display ='none';
}

function login(){

  document.getElementById ('registration').style.display ='none';
document.getElementById ('login2').style.display ='block';
}



// This constant will be used to add users to the users array 
const fnameUI = document.getElementById('first-name')
const lnameUI = document.getElementById('last-name')
const passwordUI = document.getElementById('password')
const password2UI = document.getElementById('password2')
const EMailUI = document.getElementById('e-mail')
const submitUI = document.getElementById('submit')
const loginUI = document.getElementById('login')


function   Signup() {
  var fname = fnameUI.value
  var lname = lnameUI.value
  var password = passwordUI.value 
  
  var password2 = password2UI.value
  var EMail = EMailUI.value


  if (fname.length === 0) {
    alert("You need to fill out your First Name");
    fnameUI.focus();
    return false;
  }
  if (lname.length === 0) {
    alert("You need to fill out your Last Name");
    lnameUI.focus();
    return false;
  }
  

  if(EMail.includes("cbs.edu") === false && EMail.includes("dtu.edu") === false)
  {
    alert("Please insert an official university EMail");
    EMailUI.focus();
    return false;
}

for (let i = 0; i < users.length; i++) {
  if (EMailUI.value == users[i].EMail) {
    alert("This EMail is already in use");
   
    document.getElementById ('registration').style.display ='none';
document.getElementById ('login2').style.display ='block';
document.getElementById('EMaillogin').value = EMailUI.value;

    return false;
  }
}

if (password != "" && password == password2) {
  if(password.length < 6) {
    alert("Error: Password must contain at least six characters!");
    passwordUI.focus();
    passwordUI.value="";
    return false;
  }

  re = /[0-9]/;
  if(!re.test(password)) {
    alert("Error: password must contain at least one number (0-9)!");
    passwordUI.focus();
    passwordUI.value="";
    return false;
  }
  re = /[a-z]/;
  if(!re.test(password)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    passwordUI.focus();
    passwordUI.value="";
    return false;
  }
  re = /[A-Z]/;
  if(!re.test(password)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    passwordUI.focus();
    passwordUI.value="";
    return false;
  }
} else {
  alert("Error: Please check that you've entered and confirmed your password correctly!");
  password2UI.focus();
  password2UI.value="";
  return false;
}

//this code creates a new user and then pushes it to the users array. It then defines that new user as the currentUser, the one that is going to be navigating the rest of the site.
  password = window.btoa(passwordUI.value);
  let newUser = new Users(fname, lname, EMail, password)
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users))

  activeUser = newUser
  localStorage.setItem('activeUser', JSON.stringify(activeUser))
  window.location.href = "./Collectinginfo.html";

}
function LogIn() {


  let inputEMail = document.getElementById('EMaillogin').value;
  let inputPassword = document.getElementById('passwordLogin').value;

  if (inputPassword.length === 0 || inputEMail.length === 0) {
    alert(" Either the Password or EMail you inserted are incorrect");
    return false;
  }
  
//this for loop checks the entry fields agains the user array and if it finds a match sets that user the activeUser

  for (let i = 0; i < users.length; i++) {
    if (inputEMail == users[i].EMail && inputPassword == window.atob(users[i].password)) {
      activeUser = users[i]
      localStorage.setItem('activeUser', JSON.stringify(users[i]));
      isLoggedIn = true;
      localStorage.setItem('isLoggedIn', isLoggedIn); 
      window.location.href = "./JobList.html";
      return true;
    }

  }


  alert('Incorrect EMail or password');
  return false;
}
