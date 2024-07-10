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

 
