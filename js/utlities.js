
function newElementValueById (inputId){
    const depositeValue = document.getElementById(inputId);
    const depositeValueString = depositeValue.value;
    const updateDepositeValue = parseFloat(depositeValueString);
    depositeValue.value = '';
    return updateDepositeValue;
}

function depositeTotalValueById (elementId){
    const depositeTotal = document.getElementById(elementId)
    const depositeTotalString = depositeTotal.innerText;
    const depositeTotalValue = parseFloat(depositeTotalString);
    return depositeTotalValue;
}
function addElementValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}