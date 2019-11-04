


//By document.write;

let num=0;
while(num<5)
{
    document.write(num+"<span style='color:red'> Main</span><br>");
    num++;
    var numB=0;
    while(numB<5){
        document.write("<span style='color:green'>"+numB+"</span>"+" Habib"+"<br>")
        numB++;
    }
}

document.write(numB);
 
//By document.getElementbyId;
let get=0;
let start=7;
while(get<6){
    
   
    start=start+get+"<br>";

    get++;
document.getElementById("pA").innerHTML=start;
let aa=0;
let bb=0;
  while(aa<4){
      bb=start+bb+aa+" Right<br>"
      document.getElementById("pA").innerHTML=bb;
      aa++;
  }
}






















