function getcase(price,product,isplas){
    const useInput =  document.getElementById(product + '-input');
    let productNumber = useInput.value;
    if(isplas == true){
        productNumber = parseInt(productNumber) +1;

    }
    else if(productNumber > 0 ){
        productNumber = parseInt(productNumber) - 1;
      }
    useInput.value = productNumber;
    const totalprice = document.getElementById(product + '-price');
    totalprice.innerText = productNumber * price;
}

document.getElementById('mobile-pluse').addEventListener('click',function(){
    getcase(259 ,'mobile', true)
})

document.getElementById('mobile-minus').addEventListener('click',function(){
    getcase(259,'mobile', false)
})


document.getElementById('case-plus').addEventListener('click',function(){
    getcase(1259,'case',true);

})

document.getElementById('case-minus').addEventListener('click',function(){
    getcase(1259,'case',false);


})

