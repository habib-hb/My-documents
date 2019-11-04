//chapter one;;
for(i=0;i<6;i++){
    document.write(i+"<br>");
}
document.write("<br>")
//chapter two;;
let k=1;
for(;k<4;k++){
    document.write(k+"<br>")
}
document.write("<br>")

//chapter three;;
let f=0;
for(;f<7;){
    f++;
document.write(f+"<br>");
//By this , the number will be started from(1);

}
document.write("<br>")
//chapter four;;
let g=0;
function habib(){
    
for(;g<7;){
   
    
document.write(g+"<br>");
g++;
//By this , the number will be started from(0);

}
}
// with & without function-results the same...
habib();
document.write("<br>"+g)


document.write("<br>");
//apply for loop in Inner Html;;
let underA="";
let numberA=0;
for(r=1;r<5;r++){
  numberA=numberA+2;
  underA=underA+numberA+"<br>";//you have to put +"<br>" here because it
                    //finally renders only one time in (innerHTML); 
                         
}
document.getElementById("pA").innerHTML=underA;
//d.g inner & outer declare same result in this circumstance...
// If you put document.write outside of the loop, then it will alse declare the same result.
// If you put document.write inside of loop, Then the result will be diffrent...like(1121231234);
console.log("Done!!!");//Just for practise






















































