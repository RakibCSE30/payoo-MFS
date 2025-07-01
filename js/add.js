 
document.getElementById('btn-add-money').addEventListener('click',function(event){
    
    event.preventDefault();
    // const curentNumber=document.getElementById('phone-number').value;
    const curentNumber=getInputFieldValueById('phone-number');
    // curentBalance = parseFloat(curentNumber);
    const pinCode=getInputFieldValueById('pin-number');
    // document.getElementById('pin-number').value;
    
    console.log(curentNumber,pinCode);

    if(pinCode===1234){
        console.log('sucesfuly added');
        const balance=getInputTextValueById('balances');
        // document.getElementById('balance').innerText;
        // balanceNumber=parseFloat(balance);
        console.log(balance);
        const newBalance=balance+curentNumber;
        console.log(newBalance);
        document.getElementById('balances').innerText=newBalance;
        
        
        

    }
    else{
        console.log('please valid phone or pin number');
        
    }
    
    
})
