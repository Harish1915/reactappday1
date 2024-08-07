

Memorization--in React:-

Memorization in a optimization technique in react with out re-calculating expensive calculations of the functions by catching the results when ever same inputs provided 

3 ways in react for Memorization:
1. React.memo() : Here props n state memorized


pure component in functional component (without re-rendering the child whenever same props or state being loaded)

React.memo is HOC:-
HOC:- Higher-order-component : This is the pattern where a function can take the component as argument and return the enhanced component , this pattern makes re-use the functional logics

common functionality can be designed as a HOC , This can b called in multiple components without writing functional logics multiple times

[* React.memo is different and Use memo is different ] both are used for memorization only 
react.memo is stop there re rendering child component only parent can re render 
 
2. useMemo(); Local state value ni memorize (we are using value memorize purpose )

it's hook in functional components which memorizes the result returned by the function when same inputs were given 

useMemo syntax: it will accept 2 args
1. callback function
2. dependency array

const totalAmount=useMemo(()=>{
    return qtyRasagulla*100 + qtyDrink*100
},[qtyOfRasagulla,qtyOfDrink])




3. useCallback():[function memorizes ki we are using]it's aHook in functional components which memorizes the function when same input's are given 


useMemo syntax: it will accept 2 args
1. callback function
2. dependency array;-[if it's empty it will execute only one time and we can put one  state based on the state re-execution will happened when state is changed  ]
useCallback

useMemo(()=>{
    SetCount(count=1)
},[count])

React 19 version  changes 


Topics:
1. Memorization in react
2. HoC
3. React.memo
4. useMemo and useCallback introduction

Tasks:
1. Repeat the class
2. Designed a hoc for counter
3. 3 examples of Hoc
4. 3 examples of react.memo , and were to use were not to use
5. react compiler changes in react(19)
6. complete recipe makes end to end