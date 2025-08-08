// si function
//And in the function si(), we are getting the value of p, r, and t from the input fields and calculating the simple interest.
//And then we are displaying the result in the result paragraph.
function si(){
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;
    let result = (p * r * t) / 100;
    document.getElementById("result").innerHTML = result;
}
