document.getElementById('authorizationForm').addEventListener('submit', function(event){
    event.preventDefault();
});

const sendCodeBtn = document.getElementById('sendCodeBtn');
const phoneInput = document.getElementById('phone');
const codeInputContainer = document.querySelector('.code-input');

function checkPhoneValidity() {
    const isValidPhoneNumber = phoneInput.value.match(/^(\+\d|\d){10,11}$/);
    if(isValidPhoneNumber) {
        sendCodeBtn.disabled = false;
        sendCodeBtn.classList.add('active');
    } else {
        sendCodeBtn.disabled = true;
        sendCodeBtn.classList.remove('active');
    }
}

phoneInput.addEventListener('input', checkPhoneValidity);

sendCodeBtn.addEventListener('click', function(){
    codeInputContainer.style.display = 'block';
    const codeInput = document.getElementById('verificationCode');
    codeInput.placeholder = ''; 
    codeInput.focus();
});

const verificationCode = document.getElementById('verificationCode');

verificationCode.addEventListener('input', function(){
    if(this.value.length >= 6) {
        if(this.value.match(/^[0-9]{3}-?[0-9]{3}$/)) {
            window.location.href = '../pages/index.html';
        }
    }
});