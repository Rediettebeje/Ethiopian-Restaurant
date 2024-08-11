function calculate() {
    // Get all the quantity inputs
    const quantities = document.querySelectorAll('input[name^="quantity_item"]');
    let total = 0;
    quantities.forEach((quantity, index) => {
        // Get the value of the quantity input
        const quantityValue = parseInt(quantity.value);
        if (!isNaN(quantityValue) && quantityValue > 0) {
            // Get the price of the current item from the corresponding table cell
            const priceCell = quantity.closest('tr').querySelector('td:nth-child(3)');
            const price = parseFloat(priceCell.textContent.replace('$', ''));
            const subtotal = quantityValue * price;
            total += subtotal;
        }
    });
    // Apply sales tax (8.25%)
    total *= 1.0825;
    total = total.toFixed(2);
    alert(`Total Order: $${total}`);
}
