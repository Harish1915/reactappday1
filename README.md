
what is State Management ?
in APP single component change's called "local management" and 
in APP we can do multiple state changes management is call "global management" this both are called "State ManageMent"

useState:- 

useState is a react functional hook , which "creates" and "manages the state"(state is a mutable )
using useState "local state management" is possible 

what is local state management?:- data management within the component 
global state management :- data management within the application


useState syntax:- 

1. useState will accept one  argument (initial state)

useState(0 or false...)
note: initial state can be any "data type"

2. useState will return array (array contains 2 elements)
2.1 current state
2.2 update Function

const array = useState(false)

const [currentState, updateFunction]=useState(false)

note: const represents immutability of state  directly 

we can change the current state using updaterFunction

useState is the replacement of:
1. constructor state creation
2. setState for managing

updaterFunction: it will accept the function and returns updated current state

Exercise:-
1. Great the user based on the time on the button

steps:

1. Take a button which shows greet user
2. Initialize the state will empty strings("") := const [greeting,setGreeting]=useState("")
3. Take A js function in which it returns the string (morning ,afternoon ...) based on the current time
4. On BUTTON Click tigers the js function ands set the  string to the local state (useState)
5. Bind the greetings in the UI, whenever state changes greetings will be changed