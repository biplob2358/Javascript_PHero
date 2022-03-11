var num = 66;

if (num >= 80 && num <= 100) {
  console.log("You got A+");
} else if (num >= 70 && num < 80) {
  console.log("You  got A");
} else if (num >= 60 && num < 70) {
  console.log("You Got A-");
} else if (num >= 50 && num < 60) {
  console.log("You got B");
} else if (num >= 40 && num < 50) {
  console.log("You got C");
} else if (num >= 33 && num < 40) {
  console.log("You got D");
} else if (num < 33) {
  console.log("You got F");
} else {
  console.log("Please Enter The Right Number");
}
