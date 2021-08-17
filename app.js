function getcase(isplas){
    const useInput =  document.getElementById('input');
    let caseNumber = useInput.value;
    if(isplas == true){
        caseNumber = parseInt(caseNumber) +1;

    }
    else if(caseNumber > 0 ){
        caseNumber = parseInt(caseNumber) - 1;
      }
    useInput.value = caseNumber;
    const totalprice = document.getElementById('t-price');
    totalprice.innerText = caseNumber * 1219;
}

document.getElementById('case-plus').addEventListener('click',function(){
    getcase(true);

})

document.getElementById('case-minus').addEventListener('click',function(){
    getcase(false);


})