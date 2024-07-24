


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