console.log('Add js file');
document.getElementById('btn-add-money').addEventListener('click',function(event){
    console.log('Inside of the ');
    event.preventDefault();
    const curentNumber=document.getElementById('phone-number').value;
    curentBalance = parseFloat(curentNumber);
    const pinCode=document.getElementById('pin-number').value;
    console.log(curentNumber,pinCode);

    if(pinCode==='1234'){
        console.log('sucesfuly added');
        const balance=document.getElementById('balance').innerText;
        balanceNumber=parseFloat(balance);
        console.log(balance);
        const newBalance=balanceNumber+curentBalance;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;
        
        
        

    }
    else{
        console.log('please valid phone or pin number');
        
    }
    
    
})
