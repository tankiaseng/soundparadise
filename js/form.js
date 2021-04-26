 
function myFunction2() {   // Function to alert user if no input
    alert("Hello");
    var display_country = document.getElementById("country").value;
    if (display_country == ""){
        alert("Retype");
    }
    var display_FN = document.getElementsByName("Firstname")[0].value;
    var display_result = "Hello " + display_FN + " you live in " + display_country; 
    document.getElementById("program1").innerHTML = display_result;
  
}

function CallOne() {
    window.location.href = "thankyou.html";
   
}
function CallTwo () {
    window.location.href = "thankyou2.html"
}

function CallThree() {
    window.location.href = "loginmsg.html";
}
   
function checkInput() { // Function to check if field empty then call CallOne()
    var input1 = document.getElementById("firstname").value;
    var input2 = document.getElementById("lastname").value;
    var input3 = document.getElementById("email").value;
    var input4 = document.getElementById("country").value;
    var validcounter = 1;

    if (input1 == "") {
        alert("Please enter your first name!");
        validcounter = 0;
    }
    if (input2 == "") {
        alert("Please enter your last name!");
        validcounter = 0;
    }
    if (input3 == "") {
        alert("Please enter your email!");
        validcounter = 0;
    }
    if (input4 == "") {
        alert("Please enter your country");
        validcounter = 0;
    }

    if (validcounter == 1 ){
        CallOne();
    }
        
    
}

function myFunction()  // Function to check if firstname and lastname empty then call MyFunction3
       {
        var input1 = document.getElementById("firstname").value;
        var input2 = document.getElementById("lastname").value;
        var validcounter = 1;

        if (input1 == "") {
            alert("Please enter your first name!");
            validcounter = 0;
        }
        if (input2 == "") {
            alert("Please enter your last name!");
            validcounter = 0;
        }
        if (validcounter == 1 ){
            myFunction3();
           
        }
       
    
    }   

    function myFunction3() // Function to display information of purchase after user send order under main.html
    {
          var a =" Thank you for the purchase and we shall contact you shortly."
          var x = document.myform.firstname.value;
          var y = document.myform.lastname.value;
          var z = "You have selected " + document.myform.model.value +" headphones!";
          document.getElementById("thankyou_display").innerHTML = "Hello " + x + " " + y +". " + z +" " + a;b
          CallTwo();
        }   
     

    function sendMail() {   // open up Mail client and send email
            window.location = "mailto:jtanty@gmail.com?body=Dear Sound Paradise; .. &subject=Information Request - Sound Paradise";
        }