const theuser = new Object() //singleton object
const tuser = {} //non singleton object
tuser.id = "123";
tuser.name = "Ahan";
tuser.isLogged = false;

// console.log(theuser);
// console.log(tuser);

const regUser ={
    email : "reguser@gmail.com",
    fullname : {
        userfullname : {
            firstname : "ahan",
            lastname  : "pandey"
        }
    },
    profession : "actor"
}
console.log(regUser.fullname.userfullname);

//object can be combined together 
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {obj1,obj2}; // not the right mtd to combine 2 obj
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = {5:"a",6:"w"};

//object assign 
//syntax Object.assign({} , obj1, obj2,obj4) add as my obj as u like 
const regObj = Object.assign({},obj1,obj2,obj4);
console.log(regObj);

//spread - mostly used
const newObj = {...obj1,...obj2}; // add as many obj u like 
console.log(newObj);

//we can get keys and values and other properties of obj 
console.log(Object.keys(tuser)); //[ 'id', 'name', 'isLogged' ]
console.log(Object.values(tuser)); //[ '123', 'Ahan', false ]

//------------------ Object De-structuring---------------------
//short way to extract values from an object and store them in variables

// foreg: 
const user = {
  myname: "Manya",
  myage: 21
};

// //without destructing
// const myname = user.myname;
// const myage = user.myage;
//with destructing
const {myname ,myage} = user;
console.log(myname);
console.log(myage);
//Rename while destructuring
const{myname : thename} = user;

