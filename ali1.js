var cart =document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}

var all_products_json;
var items_in_cart =document.querySelector(".items_in_cart");
let product_cart =[];

function addToCart(id,btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    console.log(product_cart);
    getCartItems()
}
let count_item =document.querySelector('.count_item');
let count_item_cart =document.querySelector('.count_item_cart');
let price_cart_total =document.querySelector('.price_cart_total');

let price_cart_Head=document.querySelector('.price_cart_Head');
function getCartItems(){
    let total_price=0;

    let items_c= "";
    for (let i = 0; i< product_cart.length; i++)   {
        items_c+=`
        <div class="item_cart">
  <img src="${product_cart[i].img}" alt="">
  <div class="content">
    <h4>=${product_cart[i].name}</h4>
    <p class="price_cart">="${product_cart[i].price}</p>
  </div>
  <button onclick="remove_from_cart(${i})" class="delete_item"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
  </svg>
  </button>
</div>`
        
      total_price+=product_cart[i].price
    
    }
    items_in_cart.innerHTML=items_c
    price_cart_Head.innerHTML= "$" + total_price
    count_item.innerHTML=product_cart.length
    count_item_cart.innerHTML=`(${product_cart.length}Item in cart)`
    price_cart_total.innerHTML="$" + total_price

}
function remove_from_cart(index){
    product_cart.splice(index,1)
    getCartItems()
    let addToCartButtos =document.querySelectorAll(".w-6 h-6 text-gray-800 dark:text-white")

    for (let i = 0; i < addToCartButtos.length; index++) {
        addToCartButtos[i].classList.remove("active")
        product_cart.forEach(product=>{
            if(product.id==i){
                addToCartButtos[i].classList.add("active")
            }
        })
        
    }
}z