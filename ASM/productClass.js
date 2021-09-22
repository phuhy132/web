class Product{
    constructor (id, name,photo,price){
        this.id =id;
        this.name=name;
        this.photo=photo;
        this.price=price
    }
    show(cart){
        var div=document.createElement('div');
        div.setAttribute('class','card');
       
        var img =document.createElement('img')
        img.setAttribute('src',"./images/"+this.photo)
        img.setAttribute('alt','')
        // img.setAttribute('')
        img.setAttribute('width',"100%")
        img.setAttribute('height',"300")

        var h1 = document.createElement('p')
        var h1Text =document.createTextNode(this.name)
        h1.appendChild(h1Text)

        var pPrice=document.createElement('p')
        pPrice.setAttribute('class','price')
        var pText=document.createTextNode(this.price+"đ")
        pPrice.appendChild(pText)

        var pOder=document.createElement('p')
        var button=document.createElement('button')
        button.setAttribute('class','carts');
        var buttonTEXT=document.createTextNode('Mua Hàng')
        button.appendChild(buttonTEXT)
        // button.setAttribute('onclick','ordered('+this.id+')')
        // pOder.appendChild(button)

        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(pPrice)
        div.appendChild(pOder)
        div.appendChild(button)

        cart.appendChild(div)
        
    }

}


var cart = document.getElementById("products")
for(let i in products){
    let p = new Product(products[i].id,products[i].name,products[i].photo,products[i].price)
    p.show(cart)
}

