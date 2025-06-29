
 document.getElementById('btn-login').addEventListener('click',function(event){
    // const phone_number = document.getElementById('phone-number'
    const number=document.getElementById('phone-number').value;
    const pin =document.getElementById('pin-number').value;
    event.preventDefault();
    console.log(number,pin );

    if(number==='017' && pin==='1234'){
        console.log('Valid number and pin');
        window.location.href='/home.html';
        
        
    }
    else{
        console.log('invalid phone number or pin');
        
    }
    
 })


 

