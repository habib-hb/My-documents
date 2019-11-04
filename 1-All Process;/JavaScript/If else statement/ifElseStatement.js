

document.getElementById("pA").innerHTML="<p style=color:yellow>"+"Done!!!"+"</p>"

/*
var num=Math.random();
num=num*100;
num=Math.floor(num);
*/


document.getElementById("bt").onclick=function(){
    var num=document.getElementById("inp").value;


if(num<=32){
    document.getElementById("pA").innerHTML="Fail!!!";
}
else if(num<=40){
    document.getElementById("pA").innerHTML="Grade='D'(Passed)";
}
else if(num<=49){
    document.getElementById("pA").innerHTML="Grade='C'";
}
else if(num<=59){
    document.getElementById("pA").innerHTML="Grade='B'";
}
else if(num<=69){
    document.getElementById("pA").innerHTML="Grade='A-'";
}
else if(num<=79){
    document.getElementById("pA").innerHTML="Grade='A'";
}
else if(num<=89){
    document.getElementById("pA").innerHTML="Grade='A+'";
}
else if(num<=100){
    document.getElementById("pA").innerHTML="Golden";
}
else{
    alert("Type Perfect number from (1 to 100) ")
    document.getElementById("pA").innerHTML="Wrong Input";
    num="";
}

document.getElementById("pB").innerHTML=num;

}























