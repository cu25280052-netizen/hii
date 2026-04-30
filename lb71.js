function showProject() {
    document.getElementById("projectDisplay").innerText =
        "Project: Personal Portfolio Website using HTML, CSS, JS.";
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMsg").innerText = "Please fill all fields!";
    } else {
        document.getElementById("formMsg").innerText = "Form submitted successfully!";
    }
});
