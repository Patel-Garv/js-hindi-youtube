// Dates
// Date no type of object thay

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(mydate.getTimezoneOffset());
console.log(typeof mydate);


//let mycreatedDate = new Date(2023,0,23)
//let mycreatedDate = new Date(2023,0,23,5,3)
let mycreatedDate = new Date("01-14-2023")
//console.log(mycreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);
