// Login page functionality
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');

        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        if (!email || !password) {
            errorMessage.textContent = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        successMessage.style.display = 'block';
        setTimeout(() => window.location.href = 'index-fresh.html', 1500);
    });

    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        if (!email) {
            alert('Please enter your email address first.');
            document.getElementById('email').focus();
            return;
        }
        alert('Password reset link sent to ' + email + '. Please check your email.');
    });
}

function loginWithGoogle() {
    alert('Google login integration coming soon! For now, please use the email login form.');
}
function loginWithFacebook() {
    alert('Facebook login integration coming soon! For now, please use the email login form.');
}

// Register page functionality
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const registerBtn = document.getElementById('registerBtn');

        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        let errors = [];
        if (!firstName) errors.push('First name is required');
        if (!lastName) errors.push('Last name is required');
        if (!email) errors.push('Email is required');
        if (!phone) errors.push('Phone number is required');
        if (!password) errors.push('Password is required');
        if (!terms) errors.push('You must agree to the terms and conditions');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) errors.push('Please enter a valid email address');

        const phoneRegex = /^[6-9]\d{9}$/;
        if (phone && !phoneRegex.test(phone.replace(/\s+/g, ''))) errors.push('Please enter a valid 10-digit phone number');

        if (password && password.length < 6) errors.push('Password must be at least 6 characters long');
        if (password !== confirmPassword) errors.push('Passwords do not match');

        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
            errorMessage.style.display = 'block';
            return;
        }

        registerBtn.disabled = true;
        registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';

        setTimeout(() => {
            successMessage.style.display = 'block';
            registerBtn.disabled = false;
            registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
            document.getElementById('registerForm').reset();
            setTimeout(() => window.location.href = 'login.html', 2000);
        }, 1700);
    });
}

function registerWithGoogle() {
    alert('Google registration integration coming soon! For now, please use the registration form.');
}
function registerWithFacebook() {
    alert('Facebook registration integration coming soon! For now, please use the registration form.');
}

function showTerms() {
    alert('Terms of Service:\n\n1. You agree to provide accurate information\n2. Your data will be used for school communication only\n3. You can unsubscribe from communications at any time\n4. Your privacy will be protected according to our privacy policy');
}

function showPrivacy() {
    alert('Privacy Policy:\n\nWe collect your information to:\n- Process admissions and registrations\n- Send important school updates\n- Provide parent-teacher communication\n- Maintain student records\n\nYour data is secure and never shared with third parties.');
}

if (document.getElementById('confirmPassword')) {
    document.getElementById('confirmPassword').addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        const errorMessage = document.getElementById('errorMessage');

        if (confirmPassword && password !== confirmPassword) {
            errorMessage.innerHTML = '<br>Passwords do not match';
            errorMessage.style.display = 'block';
        } else {
            if (errorMessage) {
                errorMessage.innerHTML = '';
                errorMessage.style.display = 'none';
            }
        }
    });
}
