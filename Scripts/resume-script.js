const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const textField = document.querySelector('.message-field');

function validateForm() {
  if (input1.value == '' || input2.value == '' || textField.value == '') {
    alert(
      'Opps, it seems there is still an empty form field. Please fill out all form fields.'
    );
    return false;
  }
}
