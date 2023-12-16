
document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawInputAmount = getInputValueById('withdraw-input');
    const previousWithdrawTotal = getTextValueById('withdraw-total');

    // calculate 
     const newWithdrawTotal = withdrawInputAmount +  previousWithdrawTotal;
    //  set eleemnt
    const setWithdrawTotal = setElement('withdraw-total', newWithdrawTotal);

// get balace total 
 const previousBalanceTotal = getTextValueById('balance-total');
//  calculate 
 const newBalanceTotalValue = previousBalanceTotal - withdrawInputAmount;
//  set eleemt 
const setBalanceWithdraw = setElement('balance-total', newBalanceTotalValue);

});