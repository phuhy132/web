
function load(){
var go = setInterval(next(),5000)
}   
 


var images = [];
for(var i=0;i<3;i++){
	images[i]=new Image();
	images[i].src = "images/img" + i + ".jpg";
}

var index = 0;

function next(){
	index ++;
	if(index>=images.length){
		index=0;
	}
	var anh = document.getElementById('anh');
	anh.src = images[index].src;

}

function prev(){
	index--;
	if(index<0){
		index=images.length-1;
	}
	var anh = document.getElementById("anh");

}
var s= setInterval(next(),2000)
// let  carts=document.querySelectorAll('button');
// for(let i= 0; i<carts.length;i++){
//     cart[i].addEventListener('click',()=>{
//         console.log("chọn")
//     })
// }
// danh mục
var i,category_danhsach,item,text;
category_danhsach = document.getElementById("danhsach");
         for(i of category){
console.log(category_danhsach)
 item = document.createElement('a');
 item.setAttribute('class',"danhsach_item")
 category_danhsach.appendChild(item);
 text = document.createTextNode(i);

item.appendChild(text);
item.setAttribute("href",i+".html");
item.setAttribute("style","display:block");
 }