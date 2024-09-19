// console.log('my name')
document.getElementById('btn-login')
.addEventListener('click',function(event){
    event.preventDefault()
    console.log('login button click')
    // get phone and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber , pinNumber);  

    if(phoneNumber === '01633'&& pinNumber === '1234'){
        console.log('you are login');
       window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})
