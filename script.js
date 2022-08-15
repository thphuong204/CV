

// Submit Form to Google Sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzFzlGi4ThfiZtPurrg0Tr5IAPZqHq3DzCS6zktEt9F6V_iMe0IlLauOsoOUVWnYrsi/exec'
const form = document.forms['submit-to-google-sheet'] //submit-to-google-sheet is a form's name
const formAlert = document.querySelector("#form-alert");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => formAlert.innerHTML = `<div class='alert alert-success text-uppercase' style='font-size: 20px'>Your information sent successfully.</div>`)
        .catch(error => formAlert.innerHTML = `<div class='alert alert-danger text-uppercase' style='font-size: 20px'>Your information not sent.</div>`)
})

