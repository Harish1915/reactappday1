

React State: React is on object which holds the information or data of a particular component 
React state is a mutable
React State will used in both class and functional component

React State creation in class based component:

There are Two Ways 
1. Using constructor
2. object way of  state creation 

example : initial state data -- subscribe , user trigger click event ,  final state data -- subscribed

example : isLogin - false , user trigger click event , isLogin-true

example : todo - ["wake up at 8am"] , user added new todo by click event , ["wake up at 8am","break fast at 9am"]

example : employDetails - {name:"ram",salary:1000},user wants to increase salary,click event ,{name:"ram",salary:2000}


Important : we cannot change the state directly bu simply assigning , reason: react does't allow UI updates by this Process

note: we must use setState method  to mutate state

setState method is used to mutate the state in a class based components

setState will accept two args

1. object 
2. callback function 

note:React component will re-render when setState is used
note : state changes are asynchronous
"Events in react will called as a synthetic events,"