//Objects

// 2 type of objects declaration : (1)Objects literals (2)objects constructor

// Singleton
//object.create


//objects literals

const mysym = Symbol("key1")

const Jsuser = {
    name : "Garv",
    "full name": "Garv Patel",
    [mysym] : "mykey1",
    age : 21,
    location : "surat",
    email : "patel12@gmail.com",
    isLoggedIn: false,
    LastloginDays: ["sunday","monday"]
}


console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);


Jsuser.email = "patidar@google.com"
//Object.freeze(Jsuser)
Jsuser.email = "microsoft.google.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
    
}

console.log(Jsuser.greeting());



Jsuser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`);
    
}
console.log(Jsuser.greeting2());
