const pwd = document.querySelector('#user-password');

const oPwd = document.querySelector('#user-confirm-password')

const pwdDNM = document.querySelector('.box p')

pwd.addEventListener('input', () => {
    pwd.classList.remove('error');
    if(pwd.value === '') pwd.classList.add('error');
});

oPwd.addEventListener('input', () => {
    if(pwd.value === oPwd.value) {
        pwdDNM.textContent = '';
        oPwd.classList.remove('error');
    } else if(pwd.value != oPwd.value) {
    oPwd.classList.add('error');
    pwdDNM.textContent = '* Passwords do not match';
    }
});
  
function canGoOrNo() {
    if (pwd.value === oPwd.value) 
    return true; 
     
    return false;  
};