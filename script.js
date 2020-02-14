function validation(){
    var dateOfBirth = document.getElementById("date of birth").value;
    var DD = parseInt("date");
    var monthOfBirth = document.getElementById("month of birth").value;
    var MM = parseInt("month")
    var yearOfBirth = document.getElementById("year of birth").value;
    var YY = parseInt("year") 
    var CC = parseInt(YY-1)/100 + 1;
    var dayOfTheWeek = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    var maleNames = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleNames = ["Akosua","Adwoa","Abenea","Akua","Yaa","Afua","Ama"]
    var monthOfBirth = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
if(document.getElementById("gender").checked){
    var gender = "male";
}
else{
    var gender = "female";
}
if(MM <0||MM > 12){
    alert("not a month");
}
else if(DD < 0||DD > 31){
    alert("not a date");
}
else if(MM == 2 && DD > 29){
    alert("does not have those no of days");
}
else if(YY < 1000||YY>2020){
    alert("we are not yet there")
}

}
