
    var maleNames = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenea","Akua","Yaa","Afua","Ama"];
    var daysOfBirth = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function getName(){
    var year=parseInt(document.getElementById("year").value);
    var month =parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    

    if(day<=0||day>31)
    alert("Please enter a valid day");
    else if(month<0||month>12 ||month ==2 && day>29)
    alert("Please enter a valid month");
    var day = new Date(year + "/" + month + "/" + day);
    var birthDay=day.getDay();
    if(male.checked==true){
       alert("You were born on " +daysOfBirth[birthDay]+ " and Your Akan name is " + maleNames[birthDay])
    }
    else if(female.checked==true){
       alert("You were born on " +daysOfBirth[birthDay]+ " and Your Akan name is " + femaleNames[birthDay])
    }
}
