// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = parseFloat(product.querySelector('.price span').innerHTML);
//parseFloat pasa el string a numero decimal, parseInt pasa a numero entero, sin comas.
  const quantity = parseInt(product.querySelector('.quantity input').value);

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);
  return subtotal;
  //... your code goes here
}

function calculateAll(product) {
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  const allProducts = product.querySelectorAll('.product');
  
  let totalPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const element = allProducts[i];
    totalPrice += updateSubtotal(element);
    
  }

  // allProducts.forEach(element => {
  //   totalPrice += updateSubtotal(element)
  // });

  document.querySelector('#total-value span').innerHTML = totalPrice.toFixed(2);

 // return totalPrice;
}

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.create-product')
  const nameProduct = newProduct.querySelector('input[type="text"]').value;
  if(nameProduct.trim().length === 0) return;
  const priceText = newProduct.querySelector('input[type="number"]').value;
  console.log(priceText);
  const price = parseFloat(priceText).toFixed(2);
  console.log(price)

  const body = document.querySelector('tbody');
  body.innerHTML += `
  <tr class="product">
          <td class="name">
            <span>${nameProduct}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

     newProduct.querySelector('input[type="text"]').value = '';
      newProduct.querySelector('input[type="number"]').value =  0;

      //volvemos a agregar los listeners del boton de borrar
  removeListeners();
  //... your code goes here
}


function removeListeners(){
  const remove = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < remove.length; i++) {
    const element = remove[i];
    element.addEventListener('click', removeProduct)
    
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


 
  removeListeners();
  document.querySelector('#create').addEventListener('click', createProduct());
  //... your code goes here
});
