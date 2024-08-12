const name = "Garv"
const repocount = 50;

//console.log(name + repocount + " value");

console.log(`welcome guye my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("Hitesh-hc-com")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf("c"));

//console.log(gameName.substring(0,4));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log((anotherString));

const Newstringone = "         Garv        "

console.log(Newstringone);
console.log(Newstringone.trim());

const url = "https://garv.com/htesh%20choudhary"

console.log(url.replace('hitesh', 'garv'));
console.log(url.replace('%20','-'));

console.log(url.includes('garv'));
console.log(url.includes('parv'));


console.log(gameName.split('-'))



