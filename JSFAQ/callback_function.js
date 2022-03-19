function callback(name, age, task) {
  console.log("Hello ", name);
  console.log("Your age is ", age);
  task();
}
function python() {
  console.log("Your task is python");
}
function c() {
  console.log("Your task is C");
}

callback("Biplob", 21, c);
callback("Mizan", 22, python);
