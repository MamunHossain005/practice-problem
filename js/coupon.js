document.getElementById("btn-apply").addEventListener('click', () => {
    const couponField = document.getElementById('coupon-field');
    const coupon = couponField.value;
    if(coupon === 'DISC30') {
        const priceTotalElement = document.getElementById('price-total');
        const previousPriceTotal = parseFloat(priceTotalElement.innerText);
        const newPriceTotal = previousPriceTotal * 0.7;
        priceTotalElement.innerText = newPriceTotal;
        couponField.setAttribute('disabled', 'true');
    }
    else {
        alert('Wrong Coupon. Please pay $1000');
    }
    couponField.value = '';
});