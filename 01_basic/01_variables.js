const accountId= 123456
let accountemail= "xyz@google.com"
var accountpassword= "23456"
accountcity = "Ahemdabad"
let accountstate= "Gujarat"

//accountId = 2 // not allowed

accountemail= "abc@google.com"
accountpassword= "4567889"
accountcity= "Surat"

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountemail,accountpassword,accountcity,accountstate]);

