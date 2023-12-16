// 
function getInputValueById(inputFieldId){
    const inputField =  document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
    // clear input field 
   
}

function getTextValueById(textElementId){
  const textFieldElement = document.getElementById(textElementId);
  const textFieldValueString = textFieldElement.innerText;
  const elemenetValue =  parseFloat(textFieldValueString);
  return elemenetValue;
}

function setElement(elementId, newValue){
    const texElement =  document.getElementById(elementId);
      texElement.innerText =  newValue;


}


document.getElementById('deposit-btn').addEventListener('click', function(){
  const inputFieldAmountValue = getInputValueById('deposit-input');

//  get text value 

const previousDepositTotal = getTextValueById('deposit-total');
// calculate t
const newDepositTotal =  inputFieldAmountValue +  previousDepositTotal;
// set elemenet 
    const setElementaValue = setElement('deposit-total', newDepositTotal);

    // get balace total
    const previousBalanceTotal = getTextValueById('balance-total');
//  calcuate 

 const newBalanceTotal = inputFieldAmountValue + previousBalanceTotal;
//    set eleement 
const setBalanceTotal = setElement('balance-total', newBalanceTotal);

})