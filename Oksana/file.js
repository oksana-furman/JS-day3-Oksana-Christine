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