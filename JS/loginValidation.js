function validateLogin() {
//    
//    var passwordRegex =  /^[A-Za-z\d]{6,10}$/;
  
    //VARIABLES TO GET AND STORE USER INPUT
    var studentNumber = document.getElementById("number").value;
   var password = document.getElementById("password").value;
//    
//    alert("Student name = " + studentName);
//    alert("Password = " + password);
//	
    //IF ALL FIELDS ARE EMPTY
    if(studentNumber==="" && password === ""){
        //ALERT NO DATA
        alert("No data was entered");
        //RETURN FALSE
        return false;
    }
    //IF student number FIELD IS EMPTY
    if(studentNumber === ""){
        //ALERT NO EMAIL ENTERED
        alert("No name was entered");
        //RETURN FALSE
        return false;
    }
    //IF PASSWORD FIELD IS EMPTY   
    if(password === ""){
        alert("Please enter your password");
        return false;
    }
    
//     //IF PASSWORD DOES NOT PASS REGEX TEST
//    if(!passwordRegex.test(password)){
//       alert("This password is not valid - regex failed");
//    }
    return true;
}


