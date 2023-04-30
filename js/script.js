const inputEmail = document.getElementById('inputEmail');
const form = document.getElementById('form');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
   const emailValue =  inputEmail.value.trim();

   if (emailValue === '') {
    console.log('empty')
    setErrorFor(inputEmail, 'Email cannot be blank')
   } else if(!isEmail(emailValue)) {
    console.log('invalid')
    setErrorFor(inputEmail, 'Email is not valid')
   } else {
    setSuccessFor(inputEmail)
   }
}

function setErrorFor(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-field success'
    const small = formField.querySelector('small');

    small.innerText = message;

    formField.className = 'form-field error'
    console.log(formField)
}


function setSuccessFor(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
