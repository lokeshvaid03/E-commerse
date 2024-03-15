
const sideNav = document.getElementById('side-nav');
const arrow = document.getElementById('arrow');
const cart= document.getElementById('cart-box')
let add_cart=0;

Array.from(document.getElementsByClassName('shop-btn')).forEach(element => {
  element.getElementsByTagName('button')[0].addEventListener( 'click', ()=>{
    add_cart+=1;
    cart.innerText=add_cart;
  })
});

arrow.addEventListener('click', ()=>{
  const categoryShow = sideNav.getAttribute('data-category')

  if(categoryShow === 'false'){
      sideNav.setAttribute('data-category', true)
      arrow.setAttribute('data-category', true) 
  }else{
      sideNav.setAttribute('data-category', false)
      arrow.setAttribute('data-category', false)
  }
})