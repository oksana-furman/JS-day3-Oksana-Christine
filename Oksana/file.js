//basic exercise 1 - Highest value in an array

// let array = [1, 7, -3, 9];
// let max = array[0];
// for (let val of array) {
//     if (max < val) {
//         max = val;
//     }
// }
// console.log(max);



// basic exercise 2 - Temperature v2.0
let temp = Math.floor(Math.random() * (25 - (-10)) + (-10));
document.getElementsByClassName("headline")[0].innerHTML = temp;
if (temp < -5) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is freezing";
} else if (temp < 5) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is very cold";
} else if (temp < 11) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is cold";
} else if (temp < 16) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is moderate";
} else if (temp < 21) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is warm";
} else if (temp < 26) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is very warm";
} else if (temp < 31) {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is hot";
} else {
    document.getElementsByClassName("headline")[1].innerHTML = "The weather is too hot";
}

// intermediate exercise 1 - Compare two numbers

let students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let points = [76, 85, 65, 93, 81];
let sum = 0;
let avr = 0;
for (let i = 0; i < points.length; i++) {
    sum += points[i];
    avr = sum / points.length;
    // console.log(sum, avr);
}

if (avr < 60) {
    classGrade = "F";
} else if (avr < 70) {
    classGrade = "D";
} else if (avr < 80) {
    classGrade = "C";
} else if (avr < 90) {
    classGrade = "B";
} else if (avr <= 100) {
    classGrade = "A";
}
document.getElementsByTagName("p")[0].innerHTML = "Class result is " + avr + ", the avarage grade is " + classGrade + "<br>";

for (var i = 0; i < points.length; i++) {
    if (points[i] < 60) {
        grade = "F";
    } else if (points[i] < 70) {
        grade = "D";
    } else if (points[i] < 80) {
        grade = "C";
    } else if (points[i] < 90) {
        grade = "B";
    } else if (points[i] <= 100) {
        grade = "A";
    }
    document.getElementsByTagName("p")[0].innerHTML += `The result of ${students[i]} is ${points[i]}, their avarage grade is  ${grade}. <br>`;
}


// intermediate exercise 2 - FizzBuzz
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById("p3").innerHTML += "FizzBuzz" + "<br>";
    } else if (i % 3 == 0) {
        document.getElementById("p3").innerHTML += "Fizz" + "<br>";
    } else if (i % 5 == 0) {
        document.getElementById("p3").innerHTML += "Buzz" + "<br>";
    } else {
        document.getElementById("p3").innerHTML += i + "<br>";
    }
}

// intermediate exercise 3

// var i = 1;
// var msg = "";
// while (i < 10) {
//     msg += i + " x 5 = " + (i * 5) + "<br/>";
//     i++;
//     console.log(msg);
// }

var i = "1";
var result = "";
while (i < 7) {
    result += i;
    i++;
    console.log(result);
}