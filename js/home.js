// add money to the account
document.getElementById('btn-add')
.addEventListener('click',function(event){
    event.preventDefault();
  console.log('add money btn click')

//   money added to the account 

const addMoney = document.getElementById('added-money').value;
console.log(addMoney);

// get the pin number provided 

const pinNmuber = document.getElementById('add-pin-number').value;
console.log(pinNmuber); 

// verify pin number 
if(pinNmuber === '1234' ){
    console.log('add money to your account');
}
else{
    console.log('faild to add money');
}
})