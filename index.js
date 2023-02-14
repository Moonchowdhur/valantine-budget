document.getElementById("kit-buy").addEventListener("click", function(){
   const totalPriceofKitkat= getInputbyId("kitkat-quantity", 100);
//    const  boxValue=document.getElementById("kitkat");
//    boxValue.innerText=totalPriceofKitkat;
   setInnerText("kitkat",totalPriceofKitkat);
   total();
})

document.getElementById("rose-buy").addEventListener("click", function(){
    const totalPriceofRose= getInputbyId("rose-quantity", 50);
    setInnerText("rose",totalPriceofRose);
    total();
 })

document.getElementById("teddy-buy").addEventListener("click", function(){
    const totalPriceofTeddy= getInputbyId("teddy-quantity", 500);
    setInnerText("teddy",totalPriceofTeddy);
    total();
 })

function getInputbyId(inputId, price){
    const inputValue=document.getElementById(inputId).value;
    if(isNaN(inputValue)){
        alert("please provide a number");
        return;
    }

    const totalprice=inputValue*price;
    // document.getElementById(inputId).value=" ";
    return totalprice;
}

function setInnerText(elementId, value){
    const boxValue=document.getElementById(elementId);
    boxValue.innerText=value;
}

function getElementValueById(elementId){
    const boxValue=document.getElementById(elementId).innerText;
    return boxValue;
}

function total(){
  const kitkatPrice=getElementValueById("kitkat");
  const rosePrice=getElementValueById("rose");
  const teddyPrice=getElementValueById("teddy");
  const totalPrice=parseInt(kitkatPrice)+parseInt(rosePrice)+parseInt(teddyPrice);
  setInnerText("total", totalPrice)
}

document.getElementById("apply-btn").addEventListener("click", function(){
   const total= getElementValueById("total");
   const promoCodeValue=document.getElementById("code").value;
   if(promoCodeValue=="101")
   {
     const discount=parseInt(total)*0.1;
     const actualtotal=parseInt(total)-discount;
     setInnerText("cost", actualtotal);
   }
   else{
    alert("Wrong promo code");
   }
 })


