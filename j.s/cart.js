let label = document.querySelector(".label");
let ShoppingCart = document.querySelector(".shopping-cart-1");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let increment=(id)=>{
    let item=id
        let search=basket.find((x)=>x.id===item.id)
    if(search===undefined){
        basket.push({
            id:item.id,
            item:1
        })
    }else{
        search.item+=1
    }
    update(item.id)
    localStorage.setItem("data", JSON.stringify(basket));
    }
    let decrement=(id)=>{
        let item=id
            let search=basket.find((x)=>x.id===item.id)
        if(search===undefined){
        return;}
        else if(search.item===0){
            return ;
        }
        else{
            search.item-=1
        }
        update(item.id)
        basket = basket.filter((x) => x.item !== 0);
        generateCart()
        localStorage.setItem("data", JSON.stringify(basket));
                
    }
        let update=(id)=>{
    
            let search = basket.find((x) => x.id === id);
            
            document.getElementById(id).innerHTML = search.item;
            totalPrice()
            generateCart();

            cartCalc()
        }
    let cartCalc=()=>{
        var cartNumber=document.querySelector(".cart-number")
        cartNumber.textContent=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    }
    cartCalc()

    var shoppingCart=[{
        id:'a',
        img:'img/img-1.jpg',
        name:'casual shirt',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'100'
        ,type:'Tshirt'
    },
    {
        id:'b',
        img:'img/img-2.jpg',
        name:'formal shirt',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'150'
        ,type:'Tshirt'
    },{
        id:'c',
        img:'img/img-3.jpg',
        name:'white shirt',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'120'
        ,type:'Tshirt'
    },{
        id:'d',
        img:'img/img-4.jpg',
        name:'suit',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'300'
        ,type:'black suit'
    },{
        id:'e',
        img:'img/blackTshirt.jpg',
        name:'black shirt',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'100'
        ,type:'Tshirt'
    },{
        id:'f',
        img:'img/blueJeans.jpg',
        name:'blue Jeans',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'80'
        ,type:'Jeans'
    },
    {
        id:'g',
        img:'img/blueSuit.avif',
        name:'blue suit',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'350'
        ,type:'suit'
    },{
        id:'h',
        img:'img/classicShoe.jpg',
        name:'classic black shoe',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'60'
        ,type:'Shoes'
    },{
        id:'i',
        img:'img/darkblueJeans.jpg',
        name:'dark jeans',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'80'
        ,type:'Jeans'
    },
    {
        id:'j',
        img:'img/darkJeans.jpg',
        name:'dark Jeans',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'120'
        ,type:'Jeans'
    },{
        id:'k',
        img:'img/darkSuit.jpg',
        name:'dark suit',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'370'
        ,type:'Suit'
    },{
        id:'m',
        img:'img/greySuit.jpg',
        name:'grey suit',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'390'
        ,type:'Suit'
    },{
        id:'n',
        img:'img/redTshirt.webp',
        name:'red shirt',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'60'
        ,type:'Tshirt'
    },{
        id:'w',
        img:'img/whiteSuit.jpg',
        name:'white suit',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'490'
        ,type:'Suit'
    }
    ,{
        id:'z',
        img:'img/womenBlueJeans.jpg',
        name:'women blue jeans',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'80'
        ,type:'jeans'
    },
    {
        id:'u',
        img:'img/runningShoe.jpg',
        name:'black sport shoe',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'90'
        ,type:'shoes'
    },
    {
        id:'o',
        img:'img/runningShoe2.webp',
        name:'yellow sport shoe',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'190'
        ,type:'shoes'
    },
    {
        id:'p',
        img:'img/runningShoe3.webp',
        name:'black sport shoe',
        desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
        price:'30'
        ,type:'shoes'
    }
    
    
    
    
    ]
    
let generateCart=()=>{
    if(basket.length !==0){
        return(
        ShoppingCart.innerHTML=basket.map((y)=>{
let search=shoppingCart.find((x)=>x.id===y.id)
let{id ,item}=y
let total=item*search.price
console.log(search)
return`    <div class="cart-items text-capitalize">
<img width="110" src=${search.img} alt="">
<div class="cart-detail">
  <div class="cart-title">
    <h4 class="h4">
    <p>${search.name}<p>
    <p class="cart-price">$${search.price}</p>
</h4>
    <i onclick="removeItem(${id})" class="fas fa-times close-cart"></i>
</div>
    <div class="genarator">
        <i onclick="decrement(${id})" class="fas fa-minus"></i>  
        <div id=${id}  class="cartAmount">${item}</div>
        <i onclick="increment(${id})" class="fas fa-plus"></i>
        </div>

    <h4>$${total}</h4>
</div>
</div>
`
    }).join(""))
    }
    else{
        ShoppingCart.innerHTML = ``;
    label.innerHTML=`<h2 class="text-center text-capitalize">Cart is empty</h2>
    <a href="store.html">
    <button class="btn btn-dark text-center text-capitalize">back home</button></a>`
    }
}
generateCart();
let totalPrice=()=>{
    if(basket.length>0){
    let amount=basket.map((x)=>{
        let search=shoppingCart.find((y)=>y.id===x.id)
        return x.item*search.price

    }).reduce((x,y)=>x+y)
    console.log("amount")
    label.innerHTML = `<h2>total price : $${amount}</h2>
    <button class="checkout btn btn-primary ">Checkout</button>
    <button onclick="clearCart()" class="removeAll btn btn-danger">Clear Cart</button>`
    }
}
    totalPrice()
    let clearCart=()=>{
        basket = [];
        generateCart();
cartCalc()
        localStorage.setItem("data", JSON.stringify(basket));
      
    }
    let removeItem=(id)=>{
let selectedItem=id
basket=basket.filter((x)=>x.id!==selectedItem.id)
totalPrice()
localStorage.setItem('data',JSON.stringify( basket)) 
generateCart();
cartCalc()
}
let user=document.querySelector(".user p")
let username=()=>{
user.innerHTML=localStorage.getItem("username")
}
username()