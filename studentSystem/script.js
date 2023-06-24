function calculateGPA(){
    const studentName = prompt("Enter student name: ")
    const grades = []
    let sum = 0;
    for(let i = 0; i < 3; i++){
        grades.push(parseFloat(prompt(`Enter Grade 10${i + 1}`)))
        sum += grades[i]
    }

    const gpa = (sum / grades.length).toFixed(2)

    displayStudentInfo(studentName, gpa)
}

function calculateGPA2(){
    const studentName = prompt("Enter student name: ")
    const grade1 = prompt("Enter grade 1: ")
    const grade2 = prompt("Enter grade 2: ")
    const grade3 = prompt("Enter grade 3: ")

    const gpa = (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) / 3

    document.write(`GPA for ${studentName} : ${gpa}`);
}
/**
 * 
 * @param {String} name 
 * @param {Number} gpa 
 * 
 * @returns {null}
 */
function displayStudentInfo(name, gpa){
    document.getElementById("student-info").innerHTML += `
    <li>
        Name: ${name},
        GPA: ${gpa}
    </li>
    `;
}