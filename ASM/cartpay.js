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

        var input=document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('id','input_number');
        input.setAttribute('onkeyup','hienthi(this)')

        var input_new=document.createElement('input');
        input_new.setAttribute('type','text');
        input_new.setAttribute('class','input_thanhtien');


        row.appendChild(img);
        row.appendChild(span1);
        row.appendChild(span2);
        row.appendChild(span3);
        row.appendChild(span4);
        row.appendChild(input);
        row.appendChild(input_new);
        cart_html.appendChild(row)
        }
    }
    
    var cartpay=document.getElementsByClassName('thanh-toan-container')[0];
    for(let v in products){
        let c = new Cart(products[v].vd,products[v].name,products[v].photo,products[v].price)
        c.show(cartpay);
    }
    function tien(obj){
        var number =document.getElementsByClassName("input_number")
     var row =obj.parentNode;
     tt=row.children[1].inn
    }
    function xoa(obj){
        var row =document.getElementById("row");

        cartpay.removeChild(row);
    }
    var soluongsp=document.getElementsByClassName("input_thanhtien");
    var giasp=document.getElementById("price").getAttribute("data-price");
    var t=document.getElementsByClassName("input_thanhtien");
    function hienthi(obj){
        var soluongsp=document.getElementsByClassName("input_thanhtien");
        var giasp=document.getElementById("price").getAttribute("data-price");
        var t=document.getElementsByClassName("input_thanhtien");
            var row = obj.parentNode
            sol=row.children[1].innerText;
            t=sol*giasp
            row.children[6].innerText=t
        }
      
        // var soluongsp=document.getElementsByClassName("input_number")[0].value;
        // var giasp=document.getElementsByClassName("price")[0].getAttribute("data-price");
        // var tinhtien=giasp*soluongsp;
        // document.getElementById("thanhtien").innerText=tinhtien;
    