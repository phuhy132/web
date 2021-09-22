 
              var dh = null;
              function time(){
              var now =new Date;
              var h =now.getHours();
              var m=now.getMinutes();
              var s= now.getSeconds(); 
              var clock =document.getElementById("time");
              m = (m < 10 ? "0" : "") + m;
              s = (s < 10 ? "0" : "") + s;
              var thoitiet=document.getElementById("thoitiet");

            //   if(h<12){
            //       thoitiet.setAttribute('src',"images/sun.png")
            //   }else if(h>=12||h<18){
                  
            //   }
              clock.innerHTML=+h+":"+m+":"+s;
              clock.style.color="black";
              clock.style.padding="10px";
             clock.style.position="relative";
              clock.style.fontSize="1em";
              
              clock.style.textAlign="center";
              clock.style.borderTop="1px","solid","slategray";
              clock.style.bottom="100px"
          }
          dh=setInterval("time()",1000)