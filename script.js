const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.parentElement.querySelector('h3').innerText;
        alert(`${product} added to cart!`);
    });
});