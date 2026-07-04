// Load subjects according to semester

const semester = document.getElementById("semester");
const subject = document.getElementById("subject");

semester.addEventListener("change", function () {

    subject.innerHTML = "<option value=''>Select Subject</option>";

    if (semester.value === "Semester 1") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;

    } else if (semester.value === "Semester 2") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;

    } else if (semester.value === "Semester 3") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;

    } else if (semester.value === "Semester 4") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;

    } else if (semester.value === "Semester 5") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;

    } else if (semester.value === "Semester 6") {

        subject.innerHTML += `
        <option>Subject 1</option>
        <option>Subject 2</option>
        <option>Subject 3</option>
        <option>Subject 4</option>
        `;
    }

});

// Analyze Button

function analyzeSubject() {

    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value;

    if (department === "" || semester === "" || subject === "") {
        alert("Please select Department, Semester and Subject.");
        return;
    }

    alert("Subject Analysis Generated Successfully!\n\n(Backend will display real data here.)");

}