 

document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();
    const  curentNumber2=document.getElementById('phone-number2').value;
    currentBalance=parseFloat(curentNumber2);
    const pin2=document.getElementById('pin-number2').value;
    console.log(curentNumber2,pin2);
       if(pin2==='1234'){
        console.log('sucesfuly added');
        const balance=document.getElementById('balance').innerText;
        balanceNumber=parseFloat(balance);
        console.log(balance);
        const newBalance=balanceNumber-currentBalance;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;
        
        
        

    }
    else{
        console.log('please valid phone or pin number');
        
    }
    
    

})