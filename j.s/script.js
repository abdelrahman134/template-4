var shop=document.querySelector(".shopping-cart")
let cartAmount=document.querySelector(".cartAmount")

let basket = JSON.parse(localStorage.getItem("data")) || [];   
var shoppingCart=[{
    id:'e',
    img:'img/blackTshirt.jpg',
    name:'black shirt',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$100'
    ,type:'Tshirt'
},{
    id:'f',
    img:'img/blueJeans.jpg',
    name:'blue Jeans',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$80'
    ,type:'Jeans'
},
{
    id:'g',
    img:'img/blueSuit.avif',
    name:'blue suit',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$350'
    ,type:'suit'
},{
    id:'h',
    img:'img/classicShoe.jpg',
    name:'classic black shoe',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$60'
    ,type:'Shoes'
},{
    id:'i',
    img:'img/darkblueJeans.jpg',
    name:'dark jeans',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$80'
    ,type:'Jeans'
},
{
    id:'j',
    img:'img/darkJeans.jpg',
    name:'dark Jeans',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$120'
    ,type:'Jeans'
},{
    id:'k',
    img:'img/darkSuit.jpg',
    name:'dark suit',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$370'
    ,type:'Suit'
},{
    id:'m',
    img:'img/greySuit.jpg',
    name:'grey suit',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$390'
    ,type:'Suit'
},{
    id:'n',
    img:'img/redTshirt.webp',
    name:'red shirt',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$60'
    ,type:'Tshirt'
},{
    id:'w',
    img:'img/whiteSuit.jpg',
    name:'white suit',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$490'
    ,type:'Suit'
}
,{
    id:'z',
    img:'img/womenBlueJeans.jpg',
    name:'women blue jeans',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$80'
    ,type:'jeans'
},
{
    id:'u',
    img:'img/runningShoe.jpg',
    name:'black sport shoe',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$90'
    ,type:'shoes'
},
{
    id:'o',
    img:'img/runningShoe2.webp',
    name:'yellow sport shoe',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$190'
    ,type:'shoes'
},
{
    id:'p',
    img:'img/runningShoe3.webp',
    name:'black sport shoe',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$30'
    ,type:'shoes'
},

{
    id:'a',
    img:'img/img-1.jpg',
    name:'casual shirt',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$100'
    ,type:'Tshirt'
},
{
    id:'b',
    img:'img/img-2.jpg',
    name:'formal shirt',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$150'
    ,type:'Tshirt'
},{
    id:'c',
    img:'img/img-3.jpg',
    name:'white shirt',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$120'
    ,type:'Tshirt'
},{
    id:'d',
    img:'img/img-4.jpg',
    name:'suit',
    desc: 'lorem7.lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7lorem7',
    price:'$300'
    ,type:'black suit'
}


]
let shoppingCartgenarator = (x) =>{
    return (

        shop.innerHTML = x.map((y)=>{
            let {id ,img,name,price}=y;
            let search = basket.find((w) => w.id === id) || [];
      
return `
<div  class="items mt-5">
<img src=${img} alt=""  class="img-item">
<div class="details text-capitalize">
  <h3>${name}</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
<div class="item-price">
  <p class="price">${price}</p>
  <div  class="genarator">
    <i  onclick="decrement(${id})" class="fas fa-minus"></i>  
    <div  id=${id} class="cartAmount">${search.item===undefined ? 0:search.item}</div>
    <i   onclick="increment(${id})" class="fas fa-plus"></i>
  </div>
</div>
</div>
</div>
`
        }).join(""))}
shoppingCartgenarator(shoppingCart)
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
    localStorage.setItem("data", JSON.stringify(basket));
            
}
    let update=(id)=>{

        let search = basket.find((x) => x.id === id);
        
        document.getElementById(id).innerHTML = search.item;

        cartCalc()
    }
let cartCalc=()=>{
    var cartNumber=document.querySelector(".cart-number")
    cartNumber.textContent=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
cartCalc()
let searchBtn=document.querySelector(".fa-search")
let textInput=document.querySelector(".store-text")
let btnCart=document.querySelectorAll(".btn-cart")


let clothSearch=()=>{
        if(textInput.value.trim()==""){
            alert("you did not enter a value")
        }else{
            let search={}
                      search=shoppingCart.filter((x)=>x.name.toLowerCase()===textInput.value.trim().toLowerCase())
                     
            shoppingCartgenarator(search)          
    
        }  }
        
        

searchBtn.addEventListener('click',clothSearch)
let removeSearch=()=>{
if(textInput.value.trim()===""){
    shoppingCartgenarator(shoppingCart)
}
}
textInput.addEventListener('keydown',removeSearch)

btnCart.forEach((item)=>{
item.onclick=()=>{
    let search=shoppingCart.filter((x)=>x.type.toLowerCase()===item.innerHTML.toLowerCase())
shoppingCartgenarator(search)
if(item.innerHTML.toLowerCase()==="all"){
    shoppingCartgenarator(shoppingCart)
}
    
}
})
let user=document.querySelector(".user p")
let username=()=>{
user.innerHTML=localStorage.getItem("username")
}
username()