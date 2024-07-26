

useEffect:-
It's a hook functional components,
which causes the side effects like 
1. data fetching
2. Dom manipulations
3. Event listeners 
4. timer events
5. subscriptions

useEffect is the replacement of following life cycle methods
1. component did mount
2. component did update
3. component will unmount 
this 3 do only [useEffect] 

useEffect syntax: it will accept 2 args
1. call back function
2. Array (Dependency array)
note :  Based on the Dependency array, UseEffect behavior will changes

syntax: useEffect(()=>{},[]) 

case1: when dependency array length is Zero
useEffect will behave like a component did mount method 

case 2 : when dependency array having some length ["variable1","variable2".....]
useEffect will behave like a Component did update whenever dependency variable changes

case 3 :- NO dependency Array UseEffect(()=>{})
in this case useEffect will continuously  executes whenever state or prop changes (it goes to infinite loop)


case 4:-  call back function return the another function (this will act as a component will unmount)

useEffect(()=>{
    return()=>{
        // component will unmount
        Here we will prevent memory leaks with in the application
    }
})











Tasks:
1. Repeat the class
2. Display list of recipes on the  page load, using useEffect hook
3. show recipes in the table (bootstrap)
4. based on the season show the season name and corresponding image of season
5. Research on weather Api and show weather in Ui ,based on the weather control the background image

Topics:
1. UseState examples
2. useEffect introduction
3. examples 





Forms:- 

 Two ways to Handle the forms

1. Un-Controlled components : Forms Control will not be a part o react , it will controlled by "DOM"
useRef is Used to Handled dom control
Only Overall Validation at one time is Possible
* field validation is not possible 

2. Controlled Component : React Will Handle's the Form it will be part of react
In put data or sates controlled by the React itself
useState is used to handle react control
* field validation is possible in controlled components

useRef:
useRef is a react functional based hook , IT serves 
1. Directly accessing the "DOM"
2. To preserve the previous values 
3. It dose't cause re-render when updated 

steps for UN-controlled components:

1. Take a form in react functional component 
2. use "useRef" hook to give access to the each input with the dom 
3. attach the reference with the inputs using ref attribute for the input
4. OnSubmit of form we can collect the user entered data by using the reference 
"(reference.current.value)"

Validations:-   

