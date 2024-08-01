
State Management:-(room books same room access other room not access (component)) and  Library we can access books every one (global like application)
 State is nothing but data

 
State Management:- with in the component n Application we are manage the data 


State Management:- State Management  refers managing the application data with in component or across the whole application
useState[current state ,updater function(setSate) ]
current state:- current state provided
setState:- component or function re execution (re-call or re-rendering)

State Management:-
2 ways:-

1. Local State Management-> useState , useReducer 
2. Global State Management

1. prop
2. context Api -->[small n medium application <100 we r using]
3. redux --> for large Application [used to managing the global stat in the application]

2.1 props->

Prop Drilling:-  when data needs to be shared across the different component which were deeply nested,
 data needs to forward for each level of component tree to reach the final component
 DrawBacks:-
 1. Component Reusability will decrease
 2. Every component must be  included even though we are not using data
 in that perticular component
 3.  code Readability and Maintenance will decreases
 4. scalability will be difficult

 2.1 context Api :

 context APi is a way to manage the state in the react applications globally 

 Steps TO Create: state management full app:

 1. Identify the components which we needs to share the data(globally
 or set of selected components) [select App.js or Navigation.js]
 2. create a context using createContext method provided by the react globally
 3. wrap the  global components using "selected context".provider and pass value prop (where data needs to be shared across the component)
 4.  select the component where data need's to be consumed using  useContext hook  in react 
 5. useContext ; will reive the createdContext and return the global data provided in the value prop

 useContext: it's a hook where we can achieve global state management in react functional components(it will consume the data provided in the value prop)