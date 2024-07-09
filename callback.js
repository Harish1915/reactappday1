// callback: 

// a function passed as argument to the another function 

// example of the call back setTimeout , set Interval
 
// api call

// user data coming api call



function fetchData(callback){

    setTimeout(()=>{
        callback({

dishName:"biryani",
instructions:["onion in the dish",
"masala and spices should be added "]


        })
    },2000)
}

function processData(_biryaniiDishpPreparationSteps){
    console.log(_biryaniiDishpPreparationSteps);
}

 fetchData(processData);


