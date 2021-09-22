function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
}function xem(){
    var slx = sessionStorage.getItem('solanxem');
     if(slx==null) slx=0;
     slx++;
     sessionStorage.setItem('solanxem',slx);
     document.getElementById("solangiai").innerHTML="Bạn đã làm "+slx+" lần";
}

var ptb2 = new Object();
ptb2.a=null;
ptb2.b=null;
                ptb2.c=null;
                this.a=document.getElementById("so1");
                this. b=document.getElementById("so2");
                this.c=document.getElementById("so3");

ptb2.choso=function(){

    a.value=getRndInteger(-10,10);
   b.value=getRndInteger(-10,10);
   c.value=getRndInteger(-10,10);
    document.getElementById("pt").disabled=false   ;

}
ptb2.giai=function(){
    this.a = document.forms["toan"]["so1"].value;
    this.b = document.forms["toan"]["so2"].value;
    this.c = document.forms["toan"]["so3"].value;
   document.getElementById("pt").disabled=true
    var delta= this.b *this.b-4*this.a*this.c;
  
        if (delta<0){
            
            document.getElementById("kq").innerHTML="phương trình vô nghiệm";
}else if(delta==0){
    var x0  = -this.b/(2*this.a);
  document.getElementById("kq").innerHTML="phương trình có 1 nghiệm"
  document.getElementById("kq").innerHTML="X= "+x0;
}else{
    var x1 =(-this.b+Math.sqrt(delta))/(2*this.a);
    var x2=(-this.b-Math.sqrt(delta))/(2*this.a);
  document.getElementById("kq").innerHTML="phương trình có 2 nghiệm </br>"
  document.getElementById("kq").innerHTML+="X1= "+x1+"</br>";
  document.getElementById("kq").innerHTML+="X2= "+x2 +"</br>";

        }
       ptb2.resset=function(){
        this.a=this.b=this.c.value;
document.getElementById("so1").value=null;
document.getElementById("so2").value=null;
document.getElementById("so3").value=null;
       }
}
// function giaiptb2(){
//     var ptb2 = new Object();
//     ptb2.a=x.choso;
//     ptb2.b=y.choso;
//     ptb2.c=z.choso;

  
//         var delta= this.b *this.b-4*this.a*this.c;
//         if (delta<0){
//             vn="phương trình vô nghiệm"
//             document.getElementById("kq").innerHTML=vn;
// }else if(delta==0){
//   var x0  = -this.b/(2*this.a);
//   document.getElementById("kq").innerHTML="phương trình có 1 nghiệm"
//   document.getElementById("kq").innerHTML=x0;
// }else{
//   var x1 =(-this.b+Math.sqrt(delta))/(2*this.a);
//   var x2=(-this.b-Math.sqrt(delta))/(2*this.a);
//   document.getElementById("kq").innerHTML="phương trình có 1 nghiệm"
//   document.getElementById("kq").innerHTML=x1;
//   document.getElementById("kq").innerHTML=x2;

//         }
//     }
