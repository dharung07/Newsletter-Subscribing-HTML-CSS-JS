const form = document.querySelector('#form');
const emailInputField = document.querySelector('#email');
const errorField = document.querySelector('#error');

function validateEmail() {
    if (emailInputField.value === '' || !emailInputField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        emailInputField.classList.add('error');
        errorField.innerHTML = "Valid email required";
        return false;
    }

    errorField.innerHTML = "";
    emailInputField.classList.remove('error');
    return true;
}

function sendEmail() {
    const emailInputFieldVal = emailInputField.value;

    var template = {
        email: emailInputFieldVal
    }

    emailjs.send('service_aqopbiu', 'template_bqg75zm', template)
        .then((response) => {
            localStorage.setItem("emailSent", "true");
            localStorage.setItem("toEmail", emailInputFieldVal);
            window.location.href = "success-page.html";
        }, (error) => {
            window.alert('Sorry, Email not sent. Check your internet connection or try later.');
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // important code
    if (validateEmail()) {
        sendEmail();
    } else {
        console.log('error occured');
    }

})