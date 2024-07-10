// let const this are have a block scopes 
// function  loop(){

    // for (var i=0; i < 10;i++){

//     for (let i=0; i < 10;i++){
//       console.log(i);
//     }
//     // console.log(i , "this is outside loop");
//   }
//   loop();

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

// const array = [1,2,3,4,5,6];

// const[first , ...a]=array

// console.log(a);//[2,3,4,5,6]

// ternary operator........>

// const flag=true?"wel come user": "please log-in";

// console.log(flag);//wel come user

// const isLogin=true;

//  const isAdmin=false;


// const flag1= isLogin? 
// isAdmin ? 
// "wel come  Admin" 
// : "wel come user"
// :"please log-in";
// console.log(flag1); // wel come user


// object literals
// two ways to create 
//1) obj literals and 2) constructor

// const username="Prem123";
// const password ="7670";

// const a ={
//     username,
//     password,
// }
// console.log(a);//{ username: 'Prem123', password: '7670' }


// Array of objects

const kitchenItems = [
    {
        name:"onion",
        isFruit:"false",
        qty:10,
        price:200,
    },
    {
        name:"watermelon",
        isFruit:"true",
        qty:4,
        price:20,
    },
    {
        name:"Potato",
        isFruit:"false",
        qty:6,
        price:10,
    },
    {
        name:"green Leaves",
        isFruit:"false",
        qty:6,
        price:5,
    },
    
    {
        name: "Apple",
        isFruit: "true",
        qty: 7,
        price:300,
    },
];

// const fruitList=kitchenItems.filter((eachFruit)=>0)///o/p []

// const fruitList=kitchenItems.filter((eachFruit)=>99)//[
//     { name: 'onion', isFruit: 'false', Qty: 10, price: 200 },      
//     { name: 'watermelon', isFruit: 'true', Qty: 4, price: 20 },    
//     { name: 'Potato', isFruit: 'false', Qty: 6, price: 10 },       
//     { name: 'Apple', isFruit: 'true', Qty: 7, price: 300 }
//   ]

// const fruitList=kitchenItems.filter((eachFruit)=>true)//o/p 

// [
//     { name: 'onion', isFruit: 'false', Qty: 10, price: 200 },      
//     { name: 'watermelon', isFruit: 'true', Qty: 4, price: 20 },    
//     { name: 'Potato', isFruit: 'false', Qty: 6, price: 10 },       
//     { name: 'Apple', isFruit: 'true', Qty: 7, price: 300 }
//   ]

//  const fruitList=kitchenItems.filter((eachFruit)=>undefined) 
//o/p empty array []
// const fruitList=kitchenItems.filter((eachFruit)=>"") //[]

// const fruitList=kitchenItems.filter((eachFruit)=>"  ") 
//[
//     { name: 'onion', isFruit: 'false', Qty: 10, price: 200 },      
//     { name: 'watermelon', isFruit: 'true', Qty: 4, price: 20 },    
//     { name: 'Potato', isFruit: 'false', Qty: 6, price: 10 },       
//     { name: 'Apple', isFruit: 'true', Qty: 7, price: 300 }
//   ]

// const fruitList = kitchenItems.filter(

//     (eachFruit)=>eachFruit.isFruit && eachFruit.price<=50);


// console.log(fruitList);//{ name: 'watermelon', isFruit: 'true', Qty: 4, price: 20 },

const vegetableList = kitchenItems.filter(

    (eachFruit)=> eachFruit.isFruit && eachFruit.price<=50);


console.log(vegetableList);//{ name: 'Potato', isFruit: 'false', Qty: 6, price: 10 }

const totalCost =vegetableList.reduce((total,eachVegetable)=>total+eachVegetable.price,0);
console.log(`The total cost of the vegetable which price list is less then 50 ${totalCost} rupees`);

vegetableList.map((eachVeggy)=>console.log(eachVeggy.name));//watermelon Potato green Leaves