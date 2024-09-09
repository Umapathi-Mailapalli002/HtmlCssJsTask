document.addEventListener('DOMContentLoaded', function() {
    var passwordField = document.getElementById('password');
    var toggleText = document.getElementById('toggleText');
    var btn = document.getElementById('btn');
    // Function to toggle the password visibility
    function togglePassword() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleText.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            toggleText.textContent = 'Show';
        }
    }

    // Show the toggle text when the password field is focused
    passwordField.addEventListener('focus', function() {
        toggleText.style.display = 'inline';
        btn.style.background = 'red';
    });

    // Hide the toggle text only if the password field loses focus and the click is outside the password field and toggle text
    document.addEventListener('click', function(event) {
        if (!passwordField.contains(event.target) && !toggleText.contains(event.target)) {
            toggleText.style.display = 'none';
        }
    });

    // Handle password visibility toggle on text click
    toggleText.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent hiding toggle text on click
        togglePassword();
    });
});