function createaccount1(){
    var a=fname.value;
    var b=lname.value;
    var c=password1.value;
    var d=repassword1.value;
    var f=country1.value;
    var g=bdate.value;
    var h=dmonth.value;
    var i=dyear.value;
    var j=Department1.value;
    var k=collage1.value;
    var l=city1.value;
    var i;
    var m;
    var n;
if(fname.value==""){
alert("enter your first name ");
}
else if(lname.value==""){
alert("enter your last name");
}
else if(password1.value==""){
alert("you forgot to fill passowrd");
}
else if(country1.value==""){
alert("please select your country");
}
else if(bdate.value==""){
alert("select your birth date");
}
else if(dmonth.value==""){
alert("enter your birth month");
}
else if(dyear.value==""){
alert(" enter your birth year");
}
else if(Department1.value==""){
alert("select your department");
}
else if(collage1.value==""){
alert("enter your collage name");
}
}
function reset1(){
    fname.value="";
    lname.value="";
    password1.value="";
    repassword1.value="";
}