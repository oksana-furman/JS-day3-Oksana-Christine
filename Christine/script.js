//Highest Value

let array = [1, 7, -3, 9];
let max = array[0];

for (let val of array) {
  if (max < val) {
    max = val;
  }
}

console.log(max);

//Temperature

let temp = Math.floor(Math.random() * (45 - (-10)) + (-10)); // Math.random() * (max_number-min_number) + min_number;
console.log(temp);

let selTemp = document.getElementById("temp");

if (temp <= 10) {
  selTemp.innerHTML = (`<p>The weather is cold, because it has ${temp} degrees Celsius.</p></br><img src="winter.jpg" alt="cold">`);
  selTemp.style.backgroundColor = "blue";
} else if (temp <= 28) {
  selTemp.innerHTML = (`<p>The weather is warm, because it has ${temp} degrees Celsius.</p></br><img src="summer.jpg" alt="warm">`);

} else {
  selTemp.innerHTML = (`<p>The weather is hot, because it has ${temp} degrees Celsius.</p></br><img src="desert.jpg" alt="hot">`);
  selTemp.style.backgroundColor = "red";
}

// Compare two numbers

let students = ["Martin", "Thomas", "Klaus", "Maria", "David", "All Students"];
let grades = [76, 85, 65, 93, 81];

let grade = "";
let sum = 0;
let avg = 0;

let selGrades = document.getElementById("grades");

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 60) {
    grade = "F";    
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 60 && grades[i] < 70) {
    grade = "D";
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 70 && grades[i] < 80) {
    grade = "C";
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 80 && grades[i] < 90) {
    grade = "B";   
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else {
    grade = "A";
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  }
  sum += grades[i];
  avg = sum / grades.length;
}

selGrades.innerHTML += `Points of all students together: ${sum}  --- Average Grade: ${avg} points, that equals to ${grade}`;


//FizzBuzz

let selFizz = document.getElementById("fiZZbuZZ");

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    selFizz.innerHTML += "FiZZbuZZ" + "<br>";
  } else if (i % 5 == 0) {
    selFizz.innerHTML += "BuZZ" + "<br>";
  } else if (i % 3 == 0) {
    selFizz.innerHTML += "FiZZ" + "<br>";
  } else {
    selFizz.innerHTML += i + "<br>";
  }
}

/* Stars from the Loop (my own try)

let star = "";

for (let i = 0; i < 6; i++) {

  console.log("*" * i); //NaN 
  document.getElementById("stars").innerHTML = star += "*" + "<br>"; // only next to each other or underneath with break - how to do it in the browser?
}
*/


/* Stars from Thomas

let stars = "";
do {
    stars += "*";
    console.log(stars);
} while (stars != "******"); //shows it in console under each other - how to do it in browser?
*/


//Stars from Julius and Dita

var stern = "";

for (let i = 0; i < 6; i++) {
  stern += "*";
  document.write(stern + "<br>");
}


/* Challenge from Thomas



let studenti = ["John", "Jane", "Red", "Yellow", "Green", "Blue"];
let mathGrades = [70, 85, 0, 64, 89, 100];

let stName = prompt("Enter Name");

let output = (function(){
    let index = studenti.indexOf(stName);
    if (index != undefined || index < 0) {  //to make sure we actually have a value here. 
        return `${studenti[index]} has reached ` + getGrade(mathGrades[index]) + ` points in Math this season.`;
    }}());

document.getElementById("studenti").innerHTML = output;

function getGrade(score) {

    if (score < 60)
        return `<span style=\"color: red;\">${score}</span>`;
    if (score <= 70)
        return `<span style=\"color: yellow;\">${score}</span>`;
    if (score < 100)
        return `<span style=\"color: green;\">${score}</span>`;
    if (score == 100)
        return `<span style=\"color: blue;\">${score}</span>`;

}
*/