// Upload Result Function

function uploadResult() {

    let department = document.getElementById("department").value;
    let semester = document.getElementById("semester").value;
    let file = document.getElementById("resultFile").value;

    if (department == "") {
        alert("Please select Department.");
        return;
    }

    if (semester == "") {
        alert("Please select Semester.");
        return;
    }

    if (file == "") {
        alert("Please choose an Excel file.");
        return;
    }

    alert("Result uploaded successfully! (Frontend Demo)");
}