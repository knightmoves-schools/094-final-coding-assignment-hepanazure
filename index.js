const cartItemsList = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');
let currentTotal = 0;

const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseInt(button.getAttribute('data-price'));

        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${itemName}</span> <span>$${itemPrice}</span>`;
        cartItemsList.appendChild(listItem);

        currentTotal += itemPrice;
        totalPriceDisplay.innerText = currentTotal;
        
        console.log(`Added ${itemName} to cart.`);
    });
});
