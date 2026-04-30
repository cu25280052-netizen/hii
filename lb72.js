document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("studentName").value;
    let age = document.getElementById("studentAge").value;
    let course = document.getElementById("studentCourse").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = course;

    document.getElementById("studentForm").reset();
});
