
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeLatestValue = newElementValueById('deposite-field');
    const depositeTotalValue = depositeTotalValueById('deposite-total');
    
    const totalDepositeValue = depositeLatestValue + depositeTotalValue;
    addElementValue('deposite-total', totalDepositeValue);
    const balanceTotalValue = depositeTotalValueById('balance-total');
    const updateBalance = depositeLatestValue + balanceTotalValue;
    addElementValue('balance-total', updateBalance);

})