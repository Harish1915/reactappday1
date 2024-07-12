React apps build by using components

components : is the independent reusable bits of code which is responsible for user  INTERFACES 

Every component must start with the capital

component can be as small as button or as large as screen

components are two types(compo can b created by 2 ways)

1) class based components
2) functional based components

note:  while creating new component , it's always  suggestible to use functional base components

React 2013 - 2018: 1.class based components (dynamic websites); functional based components (static websites)

2018(Hooks) : functional based (dynamic websites+static websites);

components will be nested to from the UI

every component return the markup(html)

every file can contain as many components

APP.js is the root component in the react application

in React app we can have 3 extensions for the components 

1) .js (which re presents the java script files)
2) .jsx(this represents react jsx file)
3) .tsx (this re presents the type script files)

exports:
1) Named export :
add export key at the beginning of the component
import can be using curly based
wec an take multiple names exports in a single file

for name imports  we can use other name of components by using the "as" key word

2) Default export:

add export default keyword at the end of the component

imports can be done directly 

we can only take single export default in a file

we can use any name , but it should start from capital letter



add export default keyword at the end ogf the component

DRY : Don't Repeat Your Self

always try to re use the code instead of duplicating

JSX: Javascript and XML - Language syntax followed by the react where js functions can return the markup language

Browser does't understand JSX,
Babel is a tool which transpile JSX code to the browser uderstanfdable code {js code},

 


 JSX:
 JSX: Javascript and XML- Language syntax followed by the react where js functions can return the markup language


Rules of jsx:

1. every component must return  single parent element {this must be shared container like div,section,ol or React.Fragments}

2.  Class must be replaced with the className;

3. every js code inside the return must be enclosed with the curly  braces

4. every attribute must be in camelCase

React.Fragments:

It act like a shared empty parent container with out including of extra shared nodes in the dom

There are 2 ways to include the Fragments

1. <></> => this is the empty fragment

2. <React.Fragment></React.Fragment>

note :efficient rendering will be possible using fragments

List Rendering in react:
 whenever if we want to display the list items(array),we will use the map method

 map method will iterate the UI parts

 ex: const fruits = ["apple", "banana" , "mango "]

 fruits.map(eachFruit=>console.log(eachFruit))


 note : React is completely declarative syntax, we don't need to use dom methods 
 we will specify directly what we want 

 KEY PROP: whenever we are using map method, we must always include key prop

 key prop : will make repeated UI elements to render efficiently , By using this updates and deletions were must faster


 what is attribute ?

 additional information given to the element

 ex: <img src=> src is attribute(in react we are calling props)

 <ImageComponent alt=""  hight=""  path=""...>

 Render Props in React  :  

 props is an object , which helps us to communicate or share data from parent component to the child component

 props are the additional information passed to the components

<ImageComponent alt=""  hight=""  path=""...> alt  height path this are called props
 Pros are  immutable (we cannot change over the time )

 Props allows us to render the content dynamically , we can control the layout of the UI components

 we can take more the one prop for the components 

 <ButtonComponent text="login"  width="100px" >
  <ButtonComponent text="signup"  width="200px" >


  2 ways of props:
  1. general prop
  2. childern prop