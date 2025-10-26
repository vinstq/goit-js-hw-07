let form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    let data = event.target;
    let email = data.elements.email.value.trim();
    let password = data.elements.password.value.trim();

    if(email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {
        email,
        password,
    }

    console.log(userData);

    data.reset();
}