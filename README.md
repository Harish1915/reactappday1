

react conditional Rendering :



using this n do conditional state meats

It tells what to display the UI based on the single or multiple conditions

1. If/else 
2. Ternary operator
3. Logical Ans operator or short circuit operator 

1. If/else : syntax

if(isLogin){
    if(isAdmin){

        return <h1> well come Admin</h1>
    }else{
        return <h1> well come user</h1>
    }
}else {
     return <h1>Please login</h1>
}

example;
const Instructions=["Switch on the Stove","Take A Cooker"]

const ConditionalRendering=()=>{

   
    // if(isLogin){
    //     return <>
        
    //     <h1>welcome user</h1>
    //     <CustomList list={Instructions}/>
    //     </>
    // }else{
    //     return <>
        
    //     <h1>Please Login</h1>

        
    //     </>
    // }

2. Ternary operator

isLogin ? <> <h1> well come user</h1></> : <><h1>Please login</h1></>

 const isLogin=true;// false

   return ( 
   <>

   {

isLogin ? 
<> <h2>welcome user1</h2>
  <CustomList list={Instructions}/>

</> 

: <><h2>please login to access the instructions to cook the biryani</h2> </>

   }
   
   </> 
   )
};
export default ConditionalRendering;


NESTED TERNARY EXAMPLE:


const isLogin=true;// false
    const isAdmin=false;// true
   return ( 
   <>
    {
    isLogin ? 
        <> 
        {
            isAdmin ? 
            <>
            <h2>welcome user1</h2>
            <CustomList list={Instructions}/>
            
            </> : 
            
            <>
            
            <h2>welcome user2</h2>
  <CustomList list={Instructions}/>
            
            </>
        }






</> 

: <><h2>please login to access the instructions to cook the( bir y ani)</h2> </>

   }
   
   </> 
   )
};
export default ConditionalRendering;



3. Logical Ans operator or short circuit operator or "short circuit operator"


It will only handle true case senario

isLogin && <h2>well come admin</h2> if it's not true null value will indicate like 0


example:  
    const isLogin=true;// false
    const isAdmin=false;// true
    const greeting=true;
   return ( 
   <>
    {
    isLogin ? 
        <> 
        {
            isAdmin ? 
            <>
            <h2>welcome user1</h2>
            <CustomList list={Instructions}/>
            
            </> : 
            
            <>
            
            <h2>welcome user2</h2>
  <CustomList list={Instructions}/>

  {greeting && <h2>Thanks to  login please explore the content</h2>} // condition true of false this line will be executed
            
            </>
        }
</> 

: <><h2>please login to access the instructions to cook the biryani</h2> </>

   }
   
   </> 
   )
};
export default ConditionalRendering;

 'INTERVIEW QUESTION':

Drawbacks of dom:-
 1. Entire html page will be reloaded when  some part of changes occurred;
2. Response time is more , it loads more time to show the final UI


V-dom: virtual dom
1. virtual dom is the memory representation of the origin dom , it compare the previous and current changes , instead of reloading entire dom , it reloads only specifIc part of the UI 

V-dom have TWO algorithms for execution



1. Diffing algorithm (it will compare the previous n current dom tree)

2. Reconciliation algorithm (it will change the only changed dom element in the original dom)

ex: like button in instagram

when click the subscribed--> it will create --> V-dom --> original dom will change

(subscribe to V-dom to (diffing and reconciliation) to Dom(original) )

using virtual dom unchanged dom elements will not disturbed

using these algorithm . react will loads the app faster way

This is the reason why react is more popular  



REACT Functional(dynamic layer) Layer:

1. Functional based component 
2. class based component


2. class based component

Render() is a predefine method which is mandatory method for inserting the UI elements in dom

Inheritance:(a query properties send methods from parent to children ki a query)
 in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. This promotes code reusability and helps in creating a hierarchy of objects.
