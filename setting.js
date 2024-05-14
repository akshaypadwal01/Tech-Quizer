document.addEventListener('DOMContentLoaded', function() {
    const changePasswordBtn = document.getElementById('change-password-btn');
    const accountSettingsForm = document.getElementById('account-settings-form');

    changePasswordBtn.addEventListener('click', function() {
        const newPassword = prompt('Enter new password:');
        const confirmPassword = prompt('Confirm new password:');

        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match. Please try again.');
        }
    });

    accountSettingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});

