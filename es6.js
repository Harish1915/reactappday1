// let const this are have a block scopes 
function  loop(){

    // for (var i=0; i < 10;i++){

    for (let i=0; i < 10;i++){
      console.log(i);
    }
    // console.log(i , "this is outside loop");
  }
  loop();

//   2. arrow functions

// function sq(num){

//     return num*num;
// }
// sq()

// const sq=()=> num*num;

// methods array map and filter

// const array =[1,2,3];

// const newArray=array.map((num)=>num*num); // map will return new array 
// console.log(newArray); // o/p [1,4,9]

// const evenNumbers= array.filter(num=>num%2===0);
// console.log(evenNumbers);// [2]

// const oddNumbers= array.filter(num=>num%2!==0);

// console.log(oddNumbers);//[1,3]



// template literals

//console.log(``); 
//static and dynamic part we can concatenation

const name1 = "prem";

console.log(`hello ${name1}`); //  o/p hello prem


// D-structuring n nested d structuring

const user = { name: "Prem" , roll:22, contact:{mobile:7670},mobile:"iphone" };

const {name , roll,contact:{mobile :phoneNumber} } = user;

// here we can re assing the valuse let c 

// user.roll=30 
const propertyKay="name";
const propertyValue="dds ";
user[propertyKay]=propertyValue;



// user["roll"]=30

// console.log(`hello ${user} ${mobile}`);
console.log(`hello ${name} ${phoneNumber}`); // hello Prem 7670


// rest and spread 

const array = [1,2,3,4,5,6];

const[first , ...a]=array

console.log(a);//[2,3,4,5,6]


