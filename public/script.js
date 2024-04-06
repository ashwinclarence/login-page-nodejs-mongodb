


// user register password validation
const userPassword = document.getElementById("user-register-password")
const userPasswordConfirm = document.getElementById("user-register-password-confirm")
const userRegister = document.getElementById("registration-form")
userRegister.addEventListener('input', () => {
    let passwordUser = userPassword.value;
    // checking whether the password and confirm password are equal or not and also the password length is at least 8 or more
    if (passwordUser.length >= 8 && userPassword.value===userPasswordConfirm.value) {
        document.getElementById('user-register-btn').disabled=false;
    } else {
        document.getElementById('user-register-btn').disabled=true;
    }
})
