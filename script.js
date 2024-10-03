document.getElementById("name").oninput = function () {
    var feedback = document.getElementById("form-feedback");
    if (this.value.length < 3) {
        feedback.innerHTML = "Name must be at least 3 characters.";
    } else {
        feedback.innerHTML = "";
    }
};

document.getElementById("email").oninput = function () {
    var feedback = document.getElementById("form-feedback");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.value)) {
        feedback.innerHTML = "Please enter a valid email address.";
    } else {
        feedback.innerHTML = "";
    }
};

document.getElementById("password").oninput = function () {
    var feedback = document.getElementById("form-feedback");
    if (this.value.length < 6) {
        feedback.innerHTML = "Password must be at least 6 characters.";
    } else {
        feedback.innerHTML = "";
    }
};

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name.length < 3 || password.length < 6 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("form-feedback").innerHTML = "Please fill in all fields correctly.";
        return false; // Prevent form submission
    }

    document.getElementById("form-feedback").innerHTML = "Registration successful!";
    return true; // Allow form submission
}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the form submission
app.post('/submit-form', (req, res) => {
    const { name, email, password } = req.body;

    // You can add validation, store to a database, etc.
    res.send(`Registration successful! Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});