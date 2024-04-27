function validateForm(){
    var name = document.getElementById("inputbox").value;
    if (name == "") {
        alert("Please fill in all the fields.");
    } 
    else {
        alert("You are about to make the payment");
        window.location.href = "success.html";
    }
}