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
const phoneNumberValidateElem = document.getElementById('phoneNumberValidate');
const slugValidateElem = document.getElementById('slugValidate');
const urlValidateElem = document.getElementById('urlValidate');
const resultElem = document.getElementById('result');



formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameValidate();
    const userName = userNameValidate();
    const email = emailValidate();
    const pass = passwordValidation();
    const phone = phoneValidation();
    const slug = slugValidate();
    const url = urlValidate()
    resultElem.innerHTML = `Name:${name}, <br>
                             User Name: ${userName}<br>
                            userName: ${email}, <br>
                            Password: ${pass}, <br>
                            Phone = ${phone}, <br>
                            Slug: ${slug}, <br>
                            Website: ${url};
                            `
    reset()
});
function reset() {
    nameElem.value = '';
    userNameElem.value = '';
    emailElm.value = '';
    passwordElem.value = '';
    phoneNumberElem.value = '';
    slugElem.value = '';
    urlElem.value = '';
}

btnPasswordElem.addEventListener('click', (event) => {
    event.preventDefault();
    const partOne = Math.random().toString(36).slice(2);
    const partTwo = Math.random().toString(36).toUpperCase().slice(2);
    passwordElem.value = partOne+partTwo;
    
});


function nameValidate() {
    let nameValue = nameElem.value;

    let result = /^[a-zA-Z ]+$/.test(nameValue);
    if (nameValue.length > 5) {
        nameValidTextElem.innerHTML = 'Name field is ok';
        nameValidTextElem.classList.add('success');
        return nameValue;
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
        return userNameValue;
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
        return emailValue;
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
    } else {
        return passwordValue;
    }
}

function phoneValidation() {
    const phoneValue = phoneNumberElem.value;
    const regex = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
    const result = regex.test(phoneValue);
    if (!result) {
        phoneNumberValidateElem.innerHTML = 'Please input valid phone number';
        phoneNumberValidateElem.classList.add('danger');
    } else {
        return phoneValue;
    }
}


function slugValidate() {
    const slugValue = slugElem.value;

    let result = /^[a-zA-Z ]+$/.test(slugValue);
    if (slugValue.length > 5) {
        slugValidateElem.innerHTML = 'Name field is ok';
        slugValidateElem.classList.add('success');
        return slugValue;
    } else {
        slugValidateElem.innerHTML = 'please input more that 5 Character';
        slugValidateElem.classList.add('danger');
    }
    if (!result) {
        slugValidateElem.innerHTML = 'please input Character only';
        slugValidateElem.classList.add('danger');
    }  
}


function urlValidate() {
    const urlValue = urlElem.value;

    let result = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(urlValue);
    
    if (!result) {
        urlValidateElem.innerHTML = 'please input valid URL';
        urlValidateElem.classList.add('danger');
    } else {
        return urlValue;
    } 
}
