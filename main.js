const nameElem = document.getElementById('name');
const userNameElem = document.getElementById('userName');
const emailElm = document.getElementById('email');
const passwordElem = document.getElementById('password');
const btnPasswordElem = document.getElementById('btnPassword');
const phoneNumberElem = document.getElementById('phoneNumber');
const slugElem = document.getElementById('slug');
const urlElem = document.getElementById('url');
const nameValidTextElem = document.getElementById('nameValidText');
const formElem = document.getElementById('form');
const regexElem = document.getElementById('regex');
const userNameValidTextElem = document.getElementById('userNameValidText');
const emailValidTextElem = document.getElementById('emailValidText');
const emailValidRegexElem = document.getElementById('emailValidRegex');
const passValidRegexElem = document.getElementById('passValidRegex');


formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    userNameValidate();
    emailValidate();
    passwordValidation();
});

function nameValidate() {
    const nameValue = nameElem.value;

    let result = /^[a-zA-Z ]+$/.test(nameValue);
    if (nameValue.length > 5) {
        nameValidTextElem.innerHTML = 'Name field is ok';
        nameValidTextElem.classList.add('success');
    } else {
        nameValidTextElem.innerHTML = 'please input more that 5 Character';
        nameValidTextElem.classList.add('danger');
    }
    if (!result) {
        regexElem.innerHTML = 'please input Character only';
        regexElem.classList.add('danger');
    }  
}

function userNameValidate() {
    const userNameValue = userNameElem.value;
    if (userNameValue.length > 5) {
        userNameValidTextElem.innerHTML = 'User Name field is ok';
        nameValidTextElem.classList.add('success');
    } else {
        userNameValidTextElem.innerHTML = 'please input more that 5 Character';
        userNameValidTextElem.classList.add('danger');
    }
}
function emailValidate() {
    const emailValue = emailElm.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const result = regex.test(emailValue);
    
    if (emailValue.length > 5) {
        emailValidTextElem.innerHTML = 'it is more than 5 character';
        emailValidTextElem.classList.add('success');
    } else {
        emailValidTextElem.innerHTML = 'please input more that 5 Character';
        emailValidTextElem.classList.add('danger');
    }
    if (!result) {
        emailValidRegexElem.innerHTML = 'please input valid email address';
        emailValidRegexElem.classList.add('danger');
    } 
}

function passwordValidation() {
    const passwordValue = passwordElem.value;
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const result = regex.test(passwordValue);
    if (!result) {
        passValidRegexElem.innerHTML = 'Password must contain * capital letter, small letter, digit and special character';
        passValidRegexElem.classList.add('danger');
    } 
}