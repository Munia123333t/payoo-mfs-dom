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

    // get the current balance 
    const balance =document.getElementById('account-balance').innerText;
    console.log(balance)

    // step-5

    const newMoney =parseFloat(addMoney);
    const balanceNumber = parseFloat(balance);
    const newBalance = newMoney + balanceNumber;
    console.log(newBalance);

    // update balance in dom 

    document.getElementById('account-balance').innerText =newBalance;
}
else{
    console.log('faild to add money');
}

})