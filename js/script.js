const inputEmail = document.getElementById('inputEmail');
const form = document.getElementById('form');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
   const emailValue =  inputEmail.value.trim();

   if (emailValue === '') {
    setErrorFor(inputEmail, 'Whoops! It looks like you forgot to add your email')
   } else if(!isEmail(emailValue)) {
    console.log('invalid')
    setErrorFor(inputEmail, 'Please provide a valid email address')
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
}


function setSuccessFor(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
