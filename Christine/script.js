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
  document.getElementById("temp").style.backgroundColor = "blue";
} else if (temp <= 28) {
  selTemp.innerHTML = (`<p>The weather is warm, because it has ${temp} degrees Celsius.</p></br><img src="summer.jpg" alt="warm">`);

} else {
  selTemp.innerHTML = (`<p>The weather is hot, because it has ${temp} degrees Celsius.</p></br><img src="desert.jpg" alt="hot">`);
  selTemp.style.backgroundColor = "red";
}

// Compare two numbers

let students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let grades = [76, 85, 65, 93, 81];

let grade = "";
let sum = 0;
let avg = 0;

let selGrades = document.getElementById("grades");

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 60) {
    grade = "F";
    // selGrades.innerHTML = students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade;
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 60 && grades[i] < 70) {
    grade = "D";
    //console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 70 && grades[i] < 80) {
    grade = "C";
    //console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else if (grades[i] >= 80 && grades[i] < 90) {
    grade = "B";
    //console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  } else {
    grade = "A";
    //console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
    selGrades.innerHTML += `<p>${students[i]}, you have ${grades[i]} points, that means your grade is ${grade}</p><br>`;
  }
  sum += grades[i];
  avg = sum / grades.length;

  //console.log(students[i] + " has " + grades[i] + " points");
}

selGrades.innerHTML += `Points of all students together: ${sum}  --- Average Grade: ${avg}`;


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