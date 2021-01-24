function validateForm()  {
    var u = document.getElementById("username").value;
    var e = document.getElementById("email").value;
    var b = document.getElementById("birthday").value;
    var p = document.getElementById("product").value;
    if(u == "") {
        alert("Please enter your name, it should not be blank");
        return false;
    }
    if(e == "") {
        alert("Please enter you email.");
        return false;
    }
    var message = "Thank you for signing up for the Petite Treats Weekly newsletter" +
     "\nWe have added the following information to our files regarding your interests:" +
      "\nName: " + u +
      "\nEmail: " + e +
      "\nProduct interests: " + p + 
      "\nBirthday: " + b ;

    alert(message);

    return true;
}