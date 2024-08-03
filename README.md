


useReducer hook in react:

useReducer which is used for the state management in functional components, create and manage state

useReducer alone can be only used for local state management

if we use UseReducer with useContext we can achieve global complex state management 

only one difference for use staten use-reducer
{useReducer is used to apply complex logics for our complex states}


useReducer syntax:

it's accepting 2 arguments 

1. reducer function 
2. initial state(complex state)

useReducer(()=>{},{}) 

useReducer will return an array contains 2 elements
1. current state
2. dispatch function

const state={
    totalTickets:100,
    bookedTickets:20,
    currentAvailableTickets:80
}

Technical term:

1. action : action tells what to happen to the state or data 
action is a object which tells what to happen to the state or data
ex:- INCREMENT SALARY ,DECREMENT-SALARY , BOOK-TICKET,CANCEL-TICKET,HOLD-TICKET


ex: BOOK-TICKETS(it's a action),no of tickets:6
const ticketAction={
    type:BOOK-TICKETS,
    payload:6
}
const ticketAction={
    type:CHANGE_NAME,
    payload:"Kalki"
}


2. reducer-function:  is a pure function,this function will accept state and action as a parameter, based on the actions corresponding state change will be done 

return{...state,bookedTickets:state.bookedTickets+ticketAction.payload}

{
    totalTickets:100,
    bookedTickets:26,
    currentAvailableTickets:74
}

3. dispatch function : This function dispatches the action performed by the user,
dispatch function will accept the action {}



(with out any interface of side effects  will just perform the what ever input given to the functions for always same input gives same out put it's called as 'Pure Function')
