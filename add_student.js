var selectedRow = null;

function addStudent() {
    var studentId = document.getElementById('studentId').value;
    var studentName = document.getElementById('studentName').value;
    var examName = document.getElementById('examName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    var studentTable = document.getElementById('studentList');

    // Create a new row for the student
    var row = studentTable.insertRow(-1);
    row.setAttribute('onclick', 'selectStudent(this)');
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.textContent = studentId;
    cell2.textContent = studentName;
    cell3.textContent = examName;
    cell4.textContent = email;
    cell5.textContent = mobile;

    // Clear input fields after adding the student
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('examName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';

    // Display success message
    displayMessage('Student added successfully');
}

function selectStudent(row) {
    // Deselect previously selected row
    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }

    // Select the clicked row
    row.classList.add('selected');
    selectedRow = row;
}

function removeSelectedStudent() {
    if (selectedRow) {
        selectedRow.remove();
        selectedRow = null;
        // Display success message
        displayMessage('Student removed successfully');
    }
}

function displayMessage(message) {
    alert(message); // You can customize this to use a modal or other UI element
}
