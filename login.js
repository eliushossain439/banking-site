// login form
document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field')
    const passwordField = document.getElementById('password-field')
    if (emailField.value == 'elius@gmail.com' && passwordField.value == 'hossain') {
        window.location.href = 'bank.html'
    } else {
        alert('pleas check your email & password')
    }
})