console.log('toggle added');

document.getElementById('cash-out-btn').addEventListener('click',function(){

     console.log('acsjh aedf');
     
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})
document.getElementById('add-money-btn').addEventListener('click',function(){

     
     
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})



