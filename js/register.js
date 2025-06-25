// Обработчик отправки формы
// document.getElementById('registrationForm').addEventListener('submit', function(event){
//     event.preventDefault();

//     const inputs = document.querySelectorAll('input');
//     let valid = true;

//     for(let i = 0; i < inputs.length; i++) {
//         if(inputs[i].value.trim() === ''){
//             inputs[i].classList.add('input-error');
//             valid = false;
//         } else {
//             inputs[i].classList.remove('input-error');
//         }
//     }

//     const phoneInput = document.querySelector('#phone');
//     if (!phoneInput.value.match(/^(\+\d|\d)+$/)){
//         phoneInput.classList.add('input-error');
//         alert("Введите номер телефона правильно! Только цифры и символ '+'.");
//         return;
//     }

//     const checkbox = document.querySelector('#termsCheckbox');
//     if (!checkbox.checked) {
//         alert("Вы должны принять условия пользовательского соглашения.");
//         return;
//     }

//     if(valid && checkbox.checked) {
//         window.location.href = "../pages/index.html";
//     }
// });

// const phoneField = document.querySelector('#phone');
// phoneField.addEventListener('input', () => {
//     phoneField.value = phoneField.value.replace(/[^0-9+]/g, '');
// });

// const emailField = document.querySelector('#email');
// emailField.addEventListener('input', () => {
//     emailField.value = emailField.value.replace(/[\u0400-\u04FF]/g, ''); 
// });

// const submitButton = document.querySelector('button[type="submit"]');
// const termsCheckbox = document.querySelector('#termsCheckbox');

// submitButton.classList.add('disabled');

// termsCheckbox.addEventListener('change', () => {
//     if (termsCheckbox.checked) {
//         submitButton.classList.remove('disabled');
//     } else {
//         submitButton.classList.add('disabled');
//     }
// });


document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault(); 

    const inputs = document.querySelectorAll('input');
    let valid = true;

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim() === ''){
            inputs[i].classList.add('input-error');
            valid = false;
        } else {
            inputs[i].classList.remove('input-error');
        }
    }

    const phoneInput = document.querySelector('#phone');
    if (!phoneInput.value.match(/^(\+\d|\d)+$/)) {
        phoneInput.classList.add('input-error');
        alert("Номер телефона введен неправильно! Используйте только цифры и знак '+'.");
        valid = false;
    }

    const emailInput = document.querySelector('#email');
    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailInput.classList.add('input-error');
        alert("Электронная почта введена неправильно! Пожалуйста, проверьте формат.");
        valid = false;
    }

    const checkbox = document.querySelector('#termsCheckbox');
    if (!checkbox.checked) {
        alert("Необходимо подтвердить соглашение с правилами.");
        valid = false;
    }

    if(valid) {
        window.location.href = "../pages/index.html";
    }
});

const phoneField = document.querySelector('#phone');
phoneField.addEventListener('input', () => {
    phoneField.value = phoneField.value.replace(/[^0-9+]/g, '');
});

const emailField = document.querySelector('#email');
emailField.addEventListener('input', () => {
    emailField.value = emailField.value.replace(/[\u0400-\u04FF]/g, '');
});

const submitButton = document.querySelector('button[type="submit"]');
const termsCheckbox = document.querySelector('#termsCheckbox');

submitButton.disabled = true;

termsCheckbox.addEventListener('change', () => {
    if (termsCheckbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});