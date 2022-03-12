var friends = ["Biplob", "Gourob", "Mizan", "Rafiq", "Salam"];

console.log(friends);
console.log(friends.length);

friends.push("Animesh");
console.log(friends);
console.log(friends.length);

friends.pop();
console.log(friends);

friends.unshift("Rahul");
console.log(friends);

friends.shift();
console.log(friends);

var part = friends.slice(2, 4);
console.log(part);
console.log(friends);
