document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Thank you for reaching out to us!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    }
});