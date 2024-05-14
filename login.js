function login() {
    var accountType = document.getElementById("accountType").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (accountType === "admin") {
        // Check admin credentials
        if (username === "admin" && password === "adminpass") {
            // Redirect to admin.html
            window.location.href = "admin.html";
            // Show pop-up message for successful login
            alert("Admin login successful!");
        } else {
            alert("Invalid admin credentials");
        }
    } else if (accountType === "student") {
        // Check student credentials
        if (username === "student" && password === "studentpass") {
            // Redirect to student.html
            window.location.href = "student.html";
            // Show pop-up message for successful login
            alert("Student login successful!");
        } else {
            alert("Invalid student credentials");
        }
    }
}
