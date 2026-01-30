//singleton means Only ONE object is created and the same object is reused everywhere
// Object literals are NOT singletons
// Constructor / class–based patterns CAN be singletons 
//constructor - method  {Object.create}

//creating a symbol
const mySym = Symbol("roll");

//Object literals 
const user = {
    name : "Manya",
    [mySym] :"1234", //symbol needs to be written in [] only else it will act as string
    age : 21,
    location: "Bengluru",
    company : "google",
    email: "manya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
};
//ways to acces the key values 
console.log(user.name); //dot notation 
console.log(user["name"]); //bracket notation
console.log(user[mySym]); // symbol can be accesssed through this mtd only not with dot notation

//change the val of object
//user.location = "london";

//lock the val
// Object.freeze(user);
// user.location = "paris";
console.log(user)

//adding functions in object 
user.greeting = function(){
    console.log("HEY ! WORLD");
}
console.log(user.greeting());

