function KiemTra(){
	var student=document.getElementById("student");
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var national=document.getElementById("national");
	var email_friend=document.getElementById("email_friend");
	var key=document.getElementById("key");
	var thongtin_email=document.getElementById("thongtin_email");
	var thue_thongtin=document.getElementById("thue_thongtin");


	var error1=document.getElementById("error1");
	var error2=document.getElementById("error2");
	var error3=document.getElementById("error3");
	var error10=document.getElementById("error10");
	var error5=document.getElementById("error5");
	var error6=document.getElementById("error6");
	var error7=document.getElementById("error7");
	var error11=document.getElementById("error11");
	var error12=document.getElementById("error12");
	var error13=document.getElementById("error13");
	var error14=document.getElementById("error14");
	var gender=document.getElementsByName("gender");
	var sothich=document.getElementsByClassName("sothich");
	var note=document.getElementById("note");


	//kiểm tra mã sinh viên
	if(student.value.length==0){
		student.style.border="1px solid red";
		error1.innerHTML="Mã Thanh toán  không được để trống!";
		return false;
	}else{
		student.style.border="1px solid #ccc";
		error1.innerHTML="";
	}

	//kiểm tra họ tên
	if(name.value.length==0){
		name.style.border="1px solid red";
		error2.innerHTML="Họ tên  không được để trống!";
		return false;
	}else{
		name.style.border="1px solid #ccc";
		error2.innerHTML="";
	}

	//kiểm tra email
	if(email.value.length==0){
		email.style.border="1px solid red";
		error3.innerHTML="Email không được để trống!";
		return false;
	}else{
		email.style.border="1px solid #ccc";
		error3.innerHTML="";
	}

	if(email_friend.value.length==0){
		
		email_friend.style.border="1px solid red";
		error10.innerHTML="Email không được để trống!";
		return false;
	}else{
		anhienemail()
		email_friend.style.border="1px solid #ccc";
		error10.innerHTML="";
	}



	if(key.value.length==0){
		
		key.style.border="1px solid red";
		error11.innerHTML="Email không được để trống!";
		return false;
	}else{
		keyshow()
		key.style.border="1px solid #ccc";
		error11.innerHTML="";
	}

	if(thongtin_email.value.length==0){
		
		thongtin_email.style.border="1px solid red";
		error12.innerHTML="Email không được để trống!";
		return false;
	}else{
		
		thongtin_email.style.border="1px solid #ccc";
		error12.innerHTML="";
	}


	if(thue_thongtin.value.length==0){
		
		thue_thongtin.style.border="1px solid red";
		error13.innerHTML="Email không được để trống!";
		return false;
	}else{
		
		thue_thongtin.style.border="1px solid #ccc";
		error13.innerHTML="";
	}


	//Kiểm tra sở thích
	var kt=0;
	for(var i=0;i<sothich.length;i++){
		if(sothich[i].checked==true){
			kt++;
		}
	}
	if(kt==0){
		error5.innerHTML="Bạn phải chọn ít nhất một cái";
		return false;
	}else{
		error5.innerHTML="";
	}
	//kiểm tra chọn quốc tịch
	if(national.value==0){
		error6.innerHTML=" Bạn phải thời gian bạn muốn";
		return false;
	}else{
		error6.innerHTML="";
	}

	//ghi chú tối đa 200 ký tự: sử dụng thuộc tính maxlength="200" ở file resgist.html
	if(note.value.length>200){
		error7.innerHTML="Bạn chỉ được nhập tối đa 200 ký tự!";
		note.style.border="1px solid red";
		return false;
	}else{
		error13.innerHTML="";
		note.style.border="1px solid #ccc";
	}
	
}
function anhienemail(){
	document.getElementById("email_friend").style.display="block";

  
}
function showhoadon(){
	document.getElementById("checkbox_ll").style.display="block";
}
function keyshow(){
	document.getElementById("key").style.display="block";
	document.getElementById("bill").style.display="block";
}
products=[
    {
        id:1,
        name:'BATTLEFILED V',
        photo:'anh1.jpg',
        price:"950000"
    },
    {
        id:2,
        name:'BATTLEFILED I',
        photo:'anh2.jpg',
        price:"570000"
    },
    {
        id:3,
        name:'SPACE ENGINEERS',
        photo:'anh3.jpg',
        price:"180000"
    } 
]
class Cart{
	constructor (id, name,photo,price){
		this.id =id;
		this.name=name;
		this.photo=photo;
		this.price=price
	}
	show(cart_html){
		var row =document.createElement('div');
		row.setAttribute('class','row');
		row.setAttribute('id','row');
		
		var img=document.createElement('img');
		img.setAttribute('src',"./images/"+this.photo);
		img.setAttribute('class','img_cart')
	img.setAttribute('alt','');

	var span1=document.createElement('span')
	var text1=document.createTextNode(this.name)
	span1.setAttribute('class','name_item')
	span1.appendChild(text1);

	var span2=document.createElement('span');
	var text2=document.createTextNode("Tình Trạng: ")
	span2.setAttribute('class','item_status');
	span2.appendChild(text2);
	

	var span_small=document.createElement('span');
	var text_small=document.createTextNode("còn hàng");
	span_small.setAttribute('class','con_hang');
	span_small.appendChild(text_small);
	span2.appendChild(span_small);

	var span3=document.createElement('span');
	var text3=document.createTextNode("xóa");
	span3.setAttribute('class','delete');
	span3.setAttribute('onclick','xoa(this)')
 
	span3.appendChild(text3);

	var span4=document.createElement('span');
	var text4=document.createTextNode(this.price+" VND");
	span4.setAttribute('id','price');
	span4.setAttribute('data-price',this.price );
	span4.appendChild(text4);

	// var input=document.createElement('input');
	// input.setAttribute('type','text');
	// input.setAttribute('id','input_number');
	// input.setAttribute('onkeyup','hienthi(this)')

	// var input_new=document.createElement('input');
	// input_new.setAttribute('type','text');
	// input_new.setAttribute('class','input_thanhtien');


	row.appendChild(img);
	row.appendChild(span1);
	row.appendChild(span2);
	row.appendChild(span3);
	row.appendChild(span4);
	// row.appendChild(input);
	// row.appendChild(input_new);
	cart_html.appendChild(row)
	}
}var cart = document.getElementById("thongtinthanhtoan")
for(let i in products){
    let p = new Cart(products[i].id,products[i].name,products[i].photo,products[i].price)
    p.show(cart)
}