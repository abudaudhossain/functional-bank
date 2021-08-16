// get input value in folating 
function getInputValue(idName) {
    const inpudFeild = document.getElementById(idName);
    const inputValue = parseFloat(inpudFeild.value);
    inpudFeild.value = '';
    return inputValue;
};

// add new amount 
function getUpdateAmount(idName, newAmount) {
    const amountFeild = document.getElementById(idName);
    const previousAmount = parseFloat(amountFeild.innerText);
    const updateAmount = previousAmount + newAmount;

    amountFeild.innerText = updateAmount;

};

//total balace update
function getUpdateTotalBalance(newAmount, isAdd){
    const totalBalanceFeild = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(totalBalanceFeild.innerText);
    let totalBalance;
    if(isAdd){
         totalBalance = previousTotalBalance + newAmount;       
    }else{
         totalBalance = previousTotalBalance - newAmount;    
    }   
    totalBalanceFeild.innerText = totalBalance;
}

// deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-feild');
    getUpdateAmount('deposit-total', newDepositAmount);
    getUpdateTotalBalance(newDepositAmount, true );
});
//mithdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-feild');
    getUpdateAmount('withdraw-total', newWithdrawAmount);
    getUpdateTotalBalance(newWithdrawAmount, false);
});