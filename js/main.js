var btn_submit = document.getElementById("btn_submit");
var first_name = document.getElementById("First_Name");
var last_name = document.getElementById("Last_Name");
var email = document.getElementById("Address");
var pass = document.getElementById("password");

btn_submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(first_name.Value);
    if (first_name.Value === "" || first_name.Value === null) {
        first_name.select;
    }
});