
document.addEventListener("DOMContentLoaded",  () => {

let products = document.querySelectorAll(".list-products > .card-body");
const totalPriceElement = document.querySelector(".total");
  
  function calculateTotal() {
    let total = 0; 
    products.forEach((product) => {
        const priceText = product.querySelector(".unit-price").textContent; 
        const price = parseFloat(priceText.replace("$", "")); 
        const quantityText = product.querySelector(".quantity").textContent; 
        const quantity = parseInt(quantityText);
        total += price * quantity;
      });
      return total; 
    }

    function updateTotal() {
      const total = calculateTotal();
      totalPriceElement.textContent = total + " $";
    }
  
    function addEventListenersToProduct(product) {
      const plusButton = product.querySelector(".fa-plus-circle");
      const minusButton = product.querySelector(".fa-minus-circle");
      const deleteButton = product.querySelector(".fa-trash-alt");
      const quantityElement = product.querySelector(".quantity");
  
      plusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent); 
        quantity += 1; 
        quantityElement.textContent = quantity; 
        updateTotal(); 
      });
  
      minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent); 
        if (quantity > 0) {
          quantity -= 1; 
          quantityElement.textContent = quantity; 
          updateTotal(); 
        }
      });
  
      deleteButton.addEventListener("click", () => {
        product.remove(); 
        products = document.querySelectorAll(".list-products > .card-body"); 
        updateTotal(); 
      });
  
      const heartButton = product.querySelector(".fa-heart");
        heartButton.addEventListener("click", () => {
        heartButton.classList.toggle("liked"); 
      });
  
    }
  
    products.forEach((product) => {
      addEventListenersToProduct(product);
    });
  
    updateTotal();
  });
