
Children prop:

children is also way to communicate from parent component to the children component,
but here we will "encapsulate jsx or text content or component as a content for the child component"

ex: <Greeting> 
<h1>Hi This Is Harish Kumar</h1>
<Greeting/>


<Greeting> 
Hi This Is Harish Kumar!
<Greeting/>


<Greeting> 
<card>
Hi This Is Harish Kumar
</card>
<Greeting/>

note: by using the children we can nest the components(Reusability of jsx content or component)
To receive the children content we need use prop.children in the child component


Ways to style the React App:

1. Inline styling :
<h1 style="color:red"></h1>html styling

1. Inline styling :
<h1 style={{color:"red"}}></h1>React styling using { }


2. External Css styling:(mostly we r using this )

Create a external Css file(overall app or individual components or set of component ) , import and use in the targeted component

3. External module styling:

create a external .modules.css file (we use individual component by improving via variable)

External Css  Frameworks styling

1. Bootstrap and React Bootstrap
2. Tailwind css
3. Cha-kra UI
4. ANt design
5. Material UI ...
