//add function
//And in the function add(), we are getting the value of num1 and num2 from the input fields and adding them together.
//And then we are displaying the result in the result paragraph.
function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = result;
}

//sub function
//And in the function sub(), we are getting the value of num1 and num2 from the input fields and subtracting them.
//And then we are displaying the result in the result paragraph.
function sub(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = result;
}

//mul function
//And in the function mul(), we are getting the value of num1 and num2 from the input fields and multiplying them.
//And then we are displaying the result in the result paragraph.
function mul(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = result;
}

//div function
function div(){
    //And in the function div(), we are getting the value of num1 and num2 from the input fields 
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    //and dividing them.
    let result = parseInt(num1) / parseInt(num2);
    //And then we are displaying the result in the result paragraph.
    document.getElementById("result").innerHTML = result;
}

