document.write("1.positive or negative"+"<br>");
document.write("-------------------------"+"<br>");
var a=4;
if(a>0){
    document.write("this is positive number"+"<br>");
}
else if(a<0){
    document.write("This is negative number");
}
else{
    document.write("This is Zero"+"<br>");
}


document.write("2.Even or Odd"+"<br>");
document.write("-------------------------"+"<br>");
var a=20
if(a/2%0){
    document.write("This is even number"+"<br>")
}
else{
    document.write("This is odd number"+"<br>");
}
document.write("3.Two digit number"+"<br>");
document.write("-------------------------"+"<br>");
var a=9;
if(a>9){
    document.write("This number is Two digit number"+"<br>");
}
else{
    document.write("This number is one digit number"+"<br>");
}
document.write("4.Check the person is eligible for vote"+"<br>");
document.write("-------------------------"+"<br>");
var vage=17;
if(vage>=18){
    document.write("Your are eligible for vote"+"<br>")
}
else if(vage<18){
    document.write("Your are not eligible for vote"+"<br>")
}
document.write("5.Check the person is eligible for license"+"<br>");
document.write("-------------------------"+"<br>");
var lage=18;
if(lage>=18){
    document.write("Your eligible for a licence"+"<br>")
}
else if(lage<18){
    document.write("Your do not eligible for a licence"+"<br>")
}
document.write("6.Check any two numbers are equal or grater than or less than"+"<br>");
document.write("------------------------------------------------------------"+"<br>")
var a=19,b=19;
if(a==b){
    document.write("Two number are equal"+"<br>")
}
else if(a!==b){
    document.write("Two number are not equal"+"<br>");
}
document.write("7.Check password is correct or not"+"<br>");
document.write("----------------------------------"+"<br>")
var regpass="a6un";
var leginpass="a6u";
if(regpass===leginpass){
    document.write("your password correct welcome"+"<br>");
}
else{
    document.write("Enter the correct password"+"<br>");
}
document.write("8.Check password length(8) is strong or weak"+"<br>");
document.write("----------------------------------"+"<br>");
var regpass="Arunkumar";
var leginpass="Arunku";
if(regpass.length){
    document.write("Your password is strong"+"<br>");
}
else{
    document.write("Your password is weak"+"<br>");
}
document.write("9.Student Grade"+"<br>");
document.write("-------------"+"<br>");
var sm=31;
if(sm>=90){
    document.write("Your grade A"+"<br>")
}
else if(sm>=80){
    document.write("Your grade B"+"<br>")
}
else if(sm>=60){
    document.write("Your grade C"+"<br")
}
else if(sm>=40){
    document.write("Your grade D"+"<br")
}
else if(sm<=40){
    document.write("Your fail"+"<br>")
}
document.write("10.Saving Amount:"+"<br>")
document.write("-----------------"+"<br>")
var sa=10000;
if(sa<=2000){
    document.write("You can buy only basic mobile"+"<br>");
}
else if(sa<=20000){
    document.write("You can buy only Android Mobile"+"<br>");  
}
else if(sa<=50000){
    document.write("You can buy only IPAD"+"<br>");  
}
else if(sa>50000){
    document.write("You can buy only Apple"+"<br>"); 
}
document.write("11.Marriage eligibility"+"<br>")
document.write("--------------------"+"<br>")
var age=11;
var gender="female";
if(gender=="male"){
    if(age>=21){
        document.write("Male-----Your are eligible for marriage" +"<br>")
    }
    else{
        document.write("Male-----Your are eligible for marriage"+"<br>")
    }
}
else if(gender=="female"){
    if(age>=18){
        document.write("female-----Your are eligible for marriage" +"<br>")
    }
    else{
        document.write("female-----Your not are eligible for marriage" +"<br>")
    }
}
document.write("12.Check the given number is divisible by 6"+"<br>");
document.write("---------------------------------------"+"<br>")
var a=1;
if(a/6){
    document.write("A is divisiable"+"<br>")
}
else{
    document.write("A didn't divisiable"+"<br>")
}
document.write("Find the largest between two numbers in JavaScript."+"<br>")     
document.write("---------------------------------------------------"+"<br>")
var a=30,b=20;
if(a>b){
    document.write("A greater than b"+"<br>")
}
else if(a<b){
    document.write("B greater than A"+"<br>")
}
document.write("Find the largest of three numbers in JavaScript."+"<br>");
document.write("----------------------------------------------- "+"<br>")
var a=40,b=20,c=30;
if(a>b){
    document.write("A greater than B"+"<br>")
}
else{
    document.write("B greater than A"+"<br>")
}
if(b>c){
    document.write("B greater than c"+"<br>")
}
else{
    document.write("C greater than B"+"<br>")
}
if(a>c){
    document.write("A greater than C"+"<br>")
}
else{
    document.write("C greater than A"+"<br>")
}
