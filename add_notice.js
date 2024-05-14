var selectedRow = null;

function addNotice() {
    var noticeTitle = document.getElementById('noticeTitle').value;
    var description = document.getElementById('description').value;

    var noticeTable = document.getElementById('noticeList');

    // Create a new row for the notice
    var row = noticeTable.insertRow(-1);
    row.setAttribute('onclick', 'selectNotice(this)');
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = noticeTitle;
    cell2.textContent = description;
    cell3.innerHTML = '<button onclick="editNotice(this)">Edit</button>';

    // Clear input fields after adding the notice
    document.getElementById('noticeTitle').value = '';
    document.getElementById('description').value = '';

    // Display success message
    displayMessage('Notice added successfully');
}

function selectNotice(row) {
    // Deselect previously selected row
    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }

    // Select the clicked row
    row.classList.add('selected');
    selectedRow = row;
}

function removeSelectedNotice() {
    if (selectedRow) {
        selectedRow.remove();
        selectedRow = null;
        // Display success message
        displayMessage('Notice removed successfully');
    }
}

function editNotice(button) {
    var row = button.parentNode.parentNode;
    var noticeTitle = row.cells[0].textContent;
    var description = row.cells[1].textContent;

    // Set notice title and description fields with current values for editing
    document.getElementById('noticeTitle').value = noticeTitle;
    document.getElementById('description').value = description;

    // Remove the edited row
    row.remove();
    selectedRow = null;

    // Display success message
    displayMessage('You can now edit the notice');
}

function displayMessage(message) {
    alert(message); // You can customize this to use a modal or other UI element
}
