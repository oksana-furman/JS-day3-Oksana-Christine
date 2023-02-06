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

let temp = Math.floor(Math.random() * (45-(-10)) + (-10)); // Math.random() * (max_number-min_number) + min_number;
console.log(temp);


if (temp <= 10) {
  document.getElementById("temp").innerHTML = (`<p>The weather is cold, because it has ${temp} degrees Celsius.</p></br><img src="winter.jpg" alt="cold">`);
  document.getElementById("temp").style.backgroundColor = "blue";
} else if (temp <= 28) {
  document.getElementById("temp").innerHTML = (`<p>The weather is warm, because it has ${temp} degrees Celsius.</p></br><img src="summer.jpg" alt="warm">`);
  
} else {
  document.getElementById("temp").innerHTML = (`<p>The weather is hot, because it has ${temp} degrees Celsius.</p></br><img src="desert.jpg" alt="hot">`);
  document.getElementById("temp").style.backgroundColor = "red";
}

// Compare two numbers

let students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let grades = [76, 85, 65, 93, 81];

let grade = "";
let sum = 0;
let avg = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 60) {
    grade = "F";
    console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
  } else if (grades[i] >= 60 && grades[i] < 70) {
    grade = "D";
    console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
  } else if (grades[i] >= 70 && grades[i] < 80) {
    grade = "C";
    console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
  } else if (grades[i] >= 80 && grades[i] < 90) {
    grade = "B";
    console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
  } else {
    grade = "A";
    console.log(students[i] + ", you have " + grades[i] + " points, that means your grade is " + grade);
  }
  sum += grades[i];
  avg = sum / grades.length;

  //console.log(students[i] + " has " + grades[i] + " points");
}

console.log("Points of all students together: " + sum, "Average Grade: " + avg);
