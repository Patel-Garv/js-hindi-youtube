const marvel_heores = ["thor","Ironman","spiderman"]
const dc_heores = ["supermsn","flash","batman"]

//marvel_heores.push(dc_heores)
//console.log(marvel_heores);
//console.log(marvel_heores[3][1]);



//const allheores = marvel_heores.concat(dc_heores)
//console.log(allheores);



// Spread Operator

const all_new_heores = [...marvel_heores , ...dc_heores]
console.log(all_new_heores);

const another_array = [1,2,3,[4,5,6],7,[6,7,[3,4]]]

console.log(another_array.flat(Infinity));

console.log(Array.isArray("Garv"));
console.log(Array.from("Garv"));
console.log(Array.from({name : "Garv"})) // interesting



let score1 = 100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3));
