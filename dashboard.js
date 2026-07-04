// Welcome Message
console.log("Dashboard Loaded Successfully");

// Dashboard Button
function goDashboard() {
    window.location.href = "dashboard.html";
}

// Upload Result
function uploadResult() {
    window.location.href = "upload-result.html";
}

// Search Result
function searchResult() {
    window.location.href = "search-result.html";
}

// Subject Analysis
function subjectAnalysis() {
    window.location.href = "subject-analysis.html";
}

// KT Analysis
function ktAnalysis() {
    window.location.href = "kt-analysis.html";
}

// Topper List
function topperList() {
    window.location.href = "topper-list.html";
}

// Reports
function reports() {
    window.location.href = "reports.html";
}

// Settings
function settings() {
    window.location.href = "settings.html";
}

// Logout
function logout() {
    if(confirm("Are you sure you want to logout?")){
        window.location.href = "index.html";
    }
}