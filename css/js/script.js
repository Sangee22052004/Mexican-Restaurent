function  submitform() {
    var name = document.querySelector("#name").value;
    var mail = document.querySelector("#email").value;
    var mess = document.querySelector("#subject").value;
    
    if(name == ""){
        alert("name is empty");
    }else if(mail == ""){
        alert("email is empty");
    }else if(mess == ""){
        alert("Enter any message");
    }
    else{
        alert("Sign up Successflluy");
    }
}