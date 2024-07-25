

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
