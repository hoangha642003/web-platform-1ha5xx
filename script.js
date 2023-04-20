let firstNumber =document.getElementById('firstNumber');
let secondNumber =document.getElementById('secondNumber');
let resultElement =document.getElementById('result');
//
function add() {
  console.log('add')
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first+second;
resultElement.innerText =`$(first)+$(second)=$result`;
}
//
function minus() {
  console.log('minus')
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first-second;
resultElement.innerText =`$(first)-$(second)=$result`;
}
//
function multiplica() {
  console.log('multiplica')
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first*second;
resultElement.innerText =`$(first)*$(second)=$result`;
}
//

function divisi() {
  console.log('divisi')
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first/second;
resultElement.innerText =`$(first)/$(second)=$result`;
}




