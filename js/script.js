document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You should perform actual authentication here (e.g., via API request).
        // For simplicity, we'll use hardcoded values for demonstration purposes.
        if (username === 'admin' && password === 'password') {
            // Successful login
            messageDiv.textContent = 'Login successful!';
            // Redirect to the admin panel (replace with your admin page URL)
            window.location.href = 'task2.html';
        } else {
            // Failed login
            messageDiv.textContent = 'Invalid username or password. You need the administrator credentials. Find them in README.md file. Please try again.';
        }
    });
});
