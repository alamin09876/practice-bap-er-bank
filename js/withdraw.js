
document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const withdrawLatestValue = newElementValueById('withdraw-field');
    const withdrawTotalValue = depositeTotalValueById('withdraw-total');
    
    const totalWithdrawValue = withdrawLatestValue + withdrawTotalValue;
    addElementValue('withdraw-total', totalWithdrawValue);
    const balanceTotalValue = depositeTotalValueById('balance-total');
    const updateBalance = balanceTotalValue - withdrawLatestValue ;
    addElementValue('balance-total', updateBalance);

})