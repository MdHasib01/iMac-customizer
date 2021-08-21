/* -----------------------------------------
        total cost calculation function 
---------------------------------------------*/

function totalCalculate(product,price){
    const productPrice = document.getElementById(product);
    productPrice.innerText = price;

    const subTotal =document.getElementById('sub-total');
    const total =document.getElementById('total');
    const bestPrice =document.getElementById('best-price');
    const memoryCost =document.getElementById('memory-cost');
    const storageCost =document.getElementById('storage-cost');
    const deliveryCost =document.getElementById('delevery-cost');

    const subTotalDisplay = parseInt(bestPrice.innerText)+
    parseInt(memoryCost.innerText)+parseInt(storageCost.innerText)+parseInt(deliveryCost.innerText);
    subTotal.innerText=subTotalDisplay;
    total.innerText=subTotalDisplay;
}

/* ----------------------------------------------
        all on click functions of buttons 
-------------------------------------------------*/

function memory8Gb(){totalCalculate('memory-cost',0)};
function memory16Gb(){totalCalculate('memory-cost',180)};
function storage256Gb(){totalCalculate('storage-cost',0)};
function storage512Gb(){totalCalculate('storage-cost',100)};
function storage1Tb(){totalCalculate('storage-cost',180)};
function freeDelivery(){totalCalculate('delevery-cost',0)};
function fastDelivery(){totalCalculate('delevery-cost',20)};

/* ------------------------------------
        promo code calculation 
---------------------------------------*/

function promoButton(){
    const promoCode = document.getElementById('promo-text');
    const promoCodeText = promoCode.value;
    const subTotalCost = document.getElementById('sub-total');
    const subTotalNumber = subTotalCost.innerText
    const total = document.getElementById('total');
    const cuponCalc = parseInt(subTotalNumber)*.2;

    if(promoCodeText.toLowerCase()=='stevekaku'){
        total.innerText=parseInt(subTotalNumber)-cuponCalc}
    else{alert('Promo code did not match')}
};