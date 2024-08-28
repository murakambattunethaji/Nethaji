document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (validateEmail(email)) {
        document.getElementById('message').textContent = 'Thank you for subscribing!';
        document.getElementById('message').style.color = 'green';

    } else {
        document.getElementById('message').textContent = 'Please enter a valid email address.';
        document.getElementById('message').style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}