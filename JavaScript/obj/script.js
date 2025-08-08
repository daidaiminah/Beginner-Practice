
// const student = {
//     name: "Jane Doe",
//     age: 16,
//     grade: "11th Grade"
// };
// document.getElementById("profile").textContent = `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;

function showStudent() {
    // Object containing student information
    const student = {
      name: "Grace Johnson",
      age: 16,
      class: "10th Grade",
      school: "Hope High School"
    };

    // Display the object data in a readable format
    const display = `
      Name: ${student.name}<br>
      Age: ${student.age}<br>
      Class: ${student.class}<br>
      School: ${student.school}
    `;

    document.getElementById("studentInfo").innerHTML = display;
    document.getElementById("studentInfo").style.color = "green";
    // reset function
    function reset() {
        document.getElementById("studentInfo").innerHTML = "";
        document.getElementById("studentInfo").style.color = "";
    }
    // reset button
    document.getElementById("reset").addEventListener("click", reset);
}