var selectedRow = null;

function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewData(formData);
    }
    else {
        updateData(formData);
    }
    resetForm();
}

// retrieve data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

// inserting data
function insertNewData(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`;
}

// edit button
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function updateData(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.price;
}

// delete data
function onDelete(td) {
    if(confirm("Do you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// reset data
function resetForm() {
    document.getElementById("productCode").value = "";
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}
