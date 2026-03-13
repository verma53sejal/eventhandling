function addEvent()
{
let name = document.getElementById("eventName").value;
let date = document.getElementById("eventDate").value;
let location = document.getElementById("eventLocation").value;

if(name=="" || date=="" || location=="")
{
alert("Please fill all fields");
return;
}

let li = document.createElement("li");

li.innerHTML = name + " | " + date + " | " + location +
" <button onclick='editEvent(this)'>Edit</button>" +
" <button onclick='deleteEvent(this)'>Delete</button>";

document.getElementById("eventList").appendChild(li);

document.getElementById("eventName").value="";
document.getElementById("eventDate").value="";
document.getElementById("eventLocation").value="";
}

function deleteEvent(button)
{
button.parentElement.remove();
}

function editEvent(button)
{
let li = button.parentElement;
let text = li.firstChild.textContent;

let newEvent = prompt("Update Event Details:", text);

if(newEvent!=null)
{
li.firstChild.textContent = newEvent;
}
}