function getcase(price, product, isplas) {
    const useInput = document.getElementById(product + '-input');
    let productNumber = useInput.value;
    if (isplas == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    useInput.value = productNumber;
    const totalprice = document.getElementById(product + '-price');
    totalprice.innerText = productNumber * price;
    calculate()

}


function getInputValue(product) {
    const numberOfProductInput = document.getElementById(product + '-input');
    const numberOfProduct = parseInt(numberOfProductInput.value);
    return numberOfProduct;
}

function calculate() {

    const phonePrice = getInputValue('mobile') * 1229;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phonePrice + caseTotal;
    const vat = subtotal / 10;
    const total = subtotal + vat;
    document.getElementById('sub-total').innerText = subtotal;

    document.getElementById('tax-ammount').innerText = vat;
    document.getElementById('total').innerText = total;

}


document.getElementById('mobile-pluse').addEventListener('click', function () {
    getcase(259, 'mobile', true)
})

document.getElementById('mobile-minus').addEventListener('click', function () {
    getcase(259, 'mobile', false)
})


document.getElementById('case-plus').addEventListener('click', function () {
    getcase(1259, 'case', true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    getcase(1259, 'case', false);


})

