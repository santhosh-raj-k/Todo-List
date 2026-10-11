var inputbox = document.getElementById("inputbox");
var ul = document.getElementById("ul");

function Update() {
  var listitem = document.createElement("li");
  listitem.className =
    "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow";
  listitem.innerHTML =
    inputbox.value +
    "<button onclick='deleteitem(event)' class='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>";
  ul.append(listitem);
}
function deleteitem(event) {
  event.target.parentElement.remove();
}
