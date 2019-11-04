





 let num=0;
 let b=8;
 
 
while(num<5){
  

b=b+num+"<br>";// You have to put (+"<br>") here because of final rendering;;;
  //Upper variable or let of while loop cann't be accessed second
  //time because it limits the process in the loop circle only.
  document.getElementById("pA").innerHTML=b;
num++;


};


document.write("under access<br>");
document.write(num);

// you can see the for loop document for more information;;;
















































