//this only shows the table and hide all the job description div 
document.getElementById ('TableAll').style.display ='block';
document.getElementById ('GocoJob').style.display ='none';
document.getElementById ('CacoJob').style.display ='none';
document.getElementById ('GoaaJob').style.display ='none';
document.getElementById ('LeaaJob').style.display ='none';
document.getElementById ('TraaJob').style.display ='none';
document.getElementById ('MaodJob').style.display ='none';
document.getElementById ('IkodJob').style.display ='none';
document.getElementById ('CoaaJob').style.display ='none';

// this checks if the users array is empty
if (localStorage.getItem('users') == null) {
  users = hardcodedUsers();
} else {
  users = JSON.parse(localStorage.getItem("users"))
}

var activeUser = JSON.parse(localStorage.getItem('activeUser'))
console.log(activeUser)

//this is made so people cant access the joblist site without first logging in
if (activeUser == null){
  window.location.href = "./Index.html";
}



var Aarhus = activeUser.Aarhus
var Copenhagen = activeUser.Copenhagen
var Odense = activeUser.Odense
var PartTime = activeUser.PartTime
var Internship = activeUser.Internship

Preferences = [Aarhus, Copenhagen, Odense, PartTime, Internship];

var filters = document.getElementsByName('tablefilter');


for (var i = 0; i < filters.length; i++) {
  if( Preferences.indexOf(filters[i].value)===-1){
      filters[i].checked =false;
  }
 else{ filters[i].checked =true;
 }
}



// this functions is for the "Restore" button. it just reloads the page.
 function reset(){
    window.localStorage.clear();
    document.location.reload(true);
}
var filtersc = document.getElementsByName('tablefilter');

/*This function is for the "Select all" button. It checks the text in the button. If it says "select all" then 
 it runs through the first 4 items of the table (the cities) and sets them all to true
 and changes the text of the button to "Deselect all" then vice versa.*/
function selectall(){
  
   var elem = document.getElementById("SelectButton");
    if (elem.innerHTML=="Select all") {
      for (var i = 0; i < 6; i++) {
        filtersc[i].checked =true;
      }
      elem.innerHTML = "Deselect all"}

    else {elem.innerHTML = "Select all";
    for (var i = 0; i < 6; i++) {
        filtersc[i].checked =false;
      }
}
}
        // filtering table using checkboxes. Filters against first td value */ /* Demo filtering table using checkboxes. Filters against first td value */
    
    /* Set 'ready' handler' */

    document.addEventListener('DOMContentLoaded', initFunc);
    /* When document ready, set click handlers for the filter boxes */
  function initFunc(event) {
     buildAndExecFilter();
      var filters = document.getElementsByName('tablefilter');
      for (var i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', buildAndExecFilter);
      }
    }
/* This section is looking for the jobs that have already been applied to and storing them in the "applied" array*/   
var Applied1 = activeUser.Applied1
var Applied2 = activeUser.Applied2
var Applied3 = activeUser.Applied3



// var applied = [Goco,Caco,TrAar,GooAar];
var applied = [Applied1,Applied2,Applied3]

var appliedrows = document.getElementById('myTable2').getElementsByTagName('tr');
var appliedcolumns = document.getElementById('myTable2').getElementsByTagName('tr');

for (var i = 1; i < appliedrows.length; i++) {
  var display = "none";
if (applied.indexOf(appliedrows[i].id)>-1){
  var display = "block";
}
appliedrows[i].style.display = display;
}


    /*
        This function gets called when clicking on table filter checkboxes.
        It builds a list of selected values and then filters the table based on that
    */
    function buildAndExecFilter() {
      var show = [];
      var filters = document.getElementsByName('tablefilter');
      for (var i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
          show.push(filters[i].value);
        }
      }
      execFilter(show); // Filter based on selected values
    }

    function execFilter(show) {
     
 /* For all rows of table, see if td 0 contains a selected value to filter */
      var rows = document.getElementById('tablebody').getElementsByTagName('tr');
      

      for (var i = 1; i < rows.length; i++) {
        var display = ""; // Default to display
        // If it is not found in the selected filter values, don't show it
        // and if it's at part of the applied array don't show it

        if (applied.indexOf(rows[i].id)>-1 || show.indexOf(rows[i].children[2].textContent) === -1 || show.indexOf(rows[i].children[3].textContent) === -1 ) {
            display = "none";
            }
            
        // Update the display accordingly
        rows[i].style.display = display;
       
      }
    }

    




// this function is for the Cities search bar
function myCities() {
  
    var input, table, tr, td, i, txtValue;
    input = document.getElementById("myCity").value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  // this function is for the Companies search bar
  function myNames() {
    var input, table, tr, td, i, txtValue;
    input = document.getElementById("myInput").value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
//Not sure what this function is for but it makes the table work so don't delete
//   if ('WebSocket' in window) {
//     (function () {
//         function refreshCSS() {
//             var sheets = [].slice.call(document.getElementsByTagName("link"));
//             var head = document.getElementsByTagName("head")[0];
//             for (var i = 0; i < sheets.length; ++i) {
//                 var elem = sheets[i];
//                 head.removeChild(elem);
//                 var rel = elem.rel;
//                 if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
//                     var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
//                     elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
//                 }
//                 head.appendChild(elem);
//             }
//         }
//         var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
//         var address = protocol + window.location.host + window.location.pathname + '/ws';
//         var socket = new WebSocket(address);
//         socket.onmessage = function (msg) {
//             if (msg.data == 'reload') window.location.reload();
//             else if (msg.data == 'refreshcss') refreshCSS();
//         };
//         if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//             console.log('Live reload enabled.');
//             sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
//         }
//     })();
// }
// else {
//     console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// }



function ShowGoco() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('myTable2').style.display ='none';
    document.getElementById ('GocoJob').style.display ='block';
    

  localStorage.setItem('Company',"Google")
  localStorage.setItem('City',"Copenhagen")
  localStorage.setItem('Code',"Goco")
    
    }

  function ShowCaco() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('CacoJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';

  localStorage.setItem('Company',"Carlsberg")
  localStorage.setItem('City',"Copenhagen")
  localStorage.setItem('Code',"Caco")


  }

  function ShowGoaa() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('GoaaJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';

  localStorage.setItem('Company',"Google")
  localStorage.setItem('City',"Aarhus")
  localStorage.setItem('Code',"Goaa")

  }

  function ShowTraa() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('TraaJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';
    localStorage.setItem('Company',"Trust Pilot")
  localStorage.setItem('City',"Aarhus")
  localStorage.setItem('Code',"Traa")

  }


  function ShowLeaa() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('LeaaJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';
    localStorage.setItem('Company',"Lego")
  localStorage.setItem('City',"Aarhus")
  localStorage.setItem('Code',"Leaa")

  }



  function ShowMaod() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('MaodJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';
    localStorage.setItem('Company',"Maersk")
  localStorage.setItem('City',"Odense")
  localStorage.setItem('Code',"Maod")

  }


  function ShowCoaa() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('CoaaJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';
    localStorage.setItem('Company',"Coop")
  localStorage.setItem('City',"Aarhus")
  localStorage.setItem('Code',"Coaa")

  }


  function ShowIkod() {
    document.getElementById ('TableAll').style.display ='none';
    document.getElementById ('IkodJob').style.display ='block';
    document.getElementById ('myTable2').style.display ='none';
    localStorage.setItem('Company',"Ikea")
  localStorage.setItem('City',"Odense")
  localStorage.setItem('Code',"Ikod")

  }

  function back() {
document.getElementById ('TableAll').style.display ='block';
document.getElementById ('GocoJob').style.display ='none';
document.getElementById ('CacoJob').style.display ='none';
document.getElementById ('GoaaJob').style.display ='none';
document.getElementById ('LeaaJob').style.display ='none';
document.getElementById ('TraaJob').style.display ='none';
document.getElementById ('MaodJob').style.display ='none';
document.getElementById ('IkodJob').style.display ='none';
document.getElementById ('CoaaJob').style.display ='none';
document.getElementById ('myTable2').style.display ='block';

  }


function applyany(){

  if (activeUser.Applied1 !== null && activeUser.Applied2 !== null && activeUser.Applied3 !== null){
    alert("You have already applied to three jobs today")
  }
  else{
    window.location="Apply.html";
  }
}

function bringback()
{
  activeUser.Applied1 = null
  activeUser.Applied2 = null
  activeUser.Applied3 = null
  localStorage.setItem('activeUser', JSON.stringify(activeUser))
  window.location="JobList.html";
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
  localStorage.setItem('isLoggedIn', isLoggedIn); // update local storage

  console.log(isLoggedIn);

  }
  window.location.href = "index.html";
}
