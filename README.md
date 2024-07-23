
Note: Whenever Parent Component  Re-renders all the child components will gets  re-rendering even though there is no change in child component

Pure Component:- Pure Component skips the unnecessary renders of the component until unless its state or prop changes

Whenever we are pure component performance will  increases

Pure component is provided by react itself

"pure component must used in a class based component"

pure component must extends from react

"Pure Component contains the shouldComponentUpdated' life cycle , it ensures the changes in the state and props, if anything changes shouldComponentUpdated returns true (by default),else returns false

Difference between class and functional :

1. Render is used in class components only 
2. serSate is used in class Components 
3. this key word is only in class component
4. inheritance(extends) apply only class components 
5. Pure used in class components 
6. All life cycle methods only used in class components 

Drawbacks of Class Components:

1. Amount of code (Boiler plate code is more )
2. Debugging and maintains will gets difficult
3. (code confusing) like  Code will be Spitted in to the  different lifecycle
4. Code will be  Spitted based on the life cycles stages

Stateless component: A component being used only for (UI Layer)Presentational layer 
Stateless component: A component being used for container layer (functional)
(class based  components  are Stateful components  )
(Before Hooks Functional   components  are StateLess components 
AFter Hooks functional based components are stateless components )


HOOKS: this are simple Js functions, It lets us use the state and other react features without using the class

react features -> Life cycle methods

Hooks were introduced as  16.8 version in react functional components in 2018

Beta version (early stage )
Hooks are used in functional only

Rules of the Hooks':
1. Hooks can only used in functional components , not in-class components
2. Hooks must always call at the top of the functional components
3. Hooks must be imported from react itself (import {useState} from "react")
4. Hooks cannot used in condition's loops , and inside the bin-ded functions


if(true){
    //hooks (this is the wrong way )
}

["But we can write a condition inside the hooks"]

5. Hooks must always start with "use" Keyword


Examples of Hooks:
1. useState []
2. useEffect
3. useRef
4. useContext
5. useReduce 
6. useMemo
7. useCallback....

we can also design the "custom" hooks(ex:useFetch,useCounter)
custom were designed by using react inbuilt hooks 

 Hooks will follow DRY("Don't Repeat Your Self" ) principle

 Topics:
 1. Pure Components 
 2. Stateless and stateful components
 3. Difference between class and functional
 4. Drawbacks of class components
 5. Hooks introduction and rules of hooks

 Tasks:
 1. 
 2. Observe the life cycle behavior when we have child components
 3. Document the today topics
 4. Hit the Api show the card's
 