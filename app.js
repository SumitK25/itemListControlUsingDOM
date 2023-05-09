var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);
function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    var newdes = document.getElementById("description").value;
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newdes));
    var editBtn = document.createElement("button");
    var deleteBtn = document.createElement("button");
    editBtn.className = "btn btn-edit btn-#ccc float-right edit";
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.appendChild(document.createTextNode("edit"));
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var lis = itemList.getElementsByTagName("li");
    Array.from(lis).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var desName = item.lastChild.textContent;
        if (
            itemName.toLowerCase().indexOf(text) != -1 ||
            desName.toLowerCase().indexOf(text) != -1
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}