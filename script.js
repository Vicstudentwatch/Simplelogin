document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'web_dev') {
        alert('Login successful!');
        // Redirect or perform other actions upon successful login
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

