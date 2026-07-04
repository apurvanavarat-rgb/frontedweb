// Topper List

function showTopper() {

    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;

    if (department === "") {
        alert("Please select Department.");
        return;
    }

    if (semester === "") {
        alert("Please select Semester.");
        return;
    }

    alert("Topper List Generated Successfully!\n\n(Backend will display the Top 10 students here.)");

}