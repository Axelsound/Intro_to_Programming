class Users {
    constructor (fname, lname, EMail, password, LinkedinUrl = null ,Phone = null, Aarhus= null, Copenhagen= null, Odense=null, Internship=null, PartTime= null, Applied1 = null, Applied2 = null, Applied3 = null) {
    this.fname = fname;
    this.lname =lname;
    this.EMail = EMail;
    this.password =password;
    this.LinkedinUrl = LinkedinUrl;
    this.Phone = Phone;
    this.Aarhus = Aarhus;
    this.Copenhagen = Copenhagen;
    this.Odense = Odense;
    this.PartTime = PartTime;
    this.Internship = Internship;
    this.Applied1 = Applied1;
    this.Applied2 = Applied2;
    this.Applied3 = Applied3;
    
    }

}



class Jobs {
  constructor (JobTitle, Company, City, JobType) {
  this.JobTitle = JobTitle;
  this.Company =Company;
  this.City = City;
  this.JobType = JobType;
  }
}


function hardcodedUsers() {

  var users=[]
  users.push(new Users ("Peter", "Parker", "Peter@cbs.edu.dk",window.btoa("Homecoming1"),"www.linkedin.com/peter" , "+455331873", "Aarhus", "Copenhagen", "Odense","Internship","Part Time", "Goco","Caco","Leaa"))
  users.push(new Users ("Tony", "Stark", "tony@cbs.edu.dk", window.btoa("Ironman1"),"www.linkedin.com/tony" ,"+455331874", "", "Copenhagen", "Odense","","Part Time", "Goco","Caco",null));
  users.push(new Users ("Steve", "Rogers", "steve@cbs.edu.dk", window.btoa("Allday123"), "www.linkedin.com/amelie" ,"+455331874","", "Copenhagen", "","","Part Time", "Goco","Caco",null));
  

  return users;
}
  

