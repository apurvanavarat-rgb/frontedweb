// Search Student Function

function searchStudent() {

    let roll = document.getElementById("roll").value.trim();
    let name = document.getElementById("name").value.trim();
    let department = document.getElementById("department").value;
    let semester = document.getElementById("semester").value;

    // Validation
    if (roll === "" && name === "" && department === "" && semester === "") {
        alert("Please enter at least one search field.");
        return;
    }

    // Frontend Demo
    alert("Search completed.\n\nBackend will display matching student records here.");
}