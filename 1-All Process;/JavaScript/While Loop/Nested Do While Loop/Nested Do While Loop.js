

//While coding with document.write;;;

let loop=0;

do{
    document.write(loop+"<br>");
    loop++;

    let nloop=0;
    do{
       
        document.write(nloop+" Nested<br>");//It is being added again & again;;;
        nloop++;

    }while(nloop<3);
}while(loop<5);

//While coding with document.getElementById;;;

let num=0;
let get="";
do{
    get=get+num+"<br>";
    document.getElementById("pA").innerHTML=get;
    num++;
    
    let nnum=0;
    let nget="";

    do{
        nget=get+nget+nnum+"<br><br>";
        document.getElementById("pA").innerHTML=nget;//Its the final html replacement...
        nnum++;
    }while(nnum<3);
}while(num<5);




























