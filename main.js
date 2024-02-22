document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');
    const emailInput = document.querySelector('input[type="email"]');
    const telephoneInput = document.querySelector('input[type="tel"]');
    const submitButton = document.querySelector('button');

    const patterns = {
        name: /^[a-zA-Z\s]{3,}$/,
        password: /^.{6,}$/, 
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telephone: /^\d{11}$/
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nameValue = nameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const emailValue = emailInput.value.trim();
        const telephoneValue = telephoneInput.value.trim();

        if (!patterns.name.test(nameValue)) {
            document.getElementById("t1").innerHTML = '*Invalid Name*';
            return;
        }
        else{
            document.getElementById("t1").innerHTML = ''; // Clear error message if all validations pass
            }

        if (!patterns.password.test(passwordValue)) {
            document.getElementById("t2").innerHTML = '*Invalid Password*';
            return;
        }
        else{
            document.getElementById("t2").innerHTML = ''; // Clear error message if all validations pass
            }

        if (passwordValue !== confirmPasswordValue) {
            document.getElementById("t3").innerHTML = '*Passwords do not match*';
            return;
        }
        else{
            document.getElementById("t3").innerHTML = ''; // Clear error message if all validations pass
            }

        if (!patterns.email.test(emailValue)) {
            document.getElementById("t4").innerHTML = '*Invalid Email*';
            return;
        }
        else{
            document.getElementById("t4").innerHTML = ''; // Clear error message if all validations pass
            }

        if (!patterns.telephone.test(telephoneValue)) {
            document.getElementById("t5").innerHTML = '*Invalid Telephone number*';
            return;
        }
        else{
        document.getElementById("t5").innerHTML = ''; // Clear error message if all validations pass
        }

        document.getElementById("t6").innerHTML = 'Register Successfully!!';
        form.reset();
    });
});
