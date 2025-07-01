function getInputFieldValueById(id){
    const inputValue= parseFloat( document.getElementById(id).value);
    
    return inputValue;
}
function getInputTextValueById(id){
    const inputText= parseFloat( document.getElementById(id).innerText);
    
    return inputText;
}

function selectById(id){
    // all button are hidden
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    // select the id then show it
    document.getElementById(id).classList.remove('hidden');
}