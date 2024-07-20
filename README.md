
Earth: 
Human Life Cycle :
1. Born Stage 
2. Survival Stage(middle age)
3. Expiry Stage


DOM: ()
Life Cycle Of a Class Component :
"1. Mounting stage"  (When ever our elements and component's inserted in to the Dom we call this as Mounting stage ,(Jsx Inserted in the dom) );like Render is doing inserting (render is a pre define )

4Method's:- 
1. Render:

 Render is a method which insert the Jsx inside the dom
2.  Constructor : 

It's used to  create and initial the stage and also for  a event binding 

3. getDerivedStateFromProps: 

This method is used to Initial the state based on the Props , This Method is a Static Method 

4. ComponentDidMount:

 Whenever this method is used to perform the side effects in the class based components in the Mounting
 "This will execute only once in a life cycle"
side effects: Http calls , dom manipulations, events listeners, timers

note : above all method's are auto invoking Methods

"2. Updating Stage:-" 

 Whenever  Components or elements updated in side the" DOM "by the user events we call this phase as a Updating stage or phase

1. Render : here it will execute to show the updated layout
2. getDerivedStateFromProps : If the prop from parent changes based on the props we can update the state 
 this two are common in this stage

Home page to about page 

"3. UnMounting Stage:-"
 Whenever Components or Elements removed from the Dom this stage refers to Unmounting stage 

 3. ComponentDidUpdate: This method is used perform side Effects in a class component in the updating Phase


4. ShouldComponentUpdate:(component update avvala?):

It will decide wether the component needs to update or restrict

5. getSnapShotBeforeUpdate:

 It will Give the snap of the component data before being updated in the DOM

  componentWillUnmount():
  
         "this method is used to clean up the memory leaks of the component while removing"
       
    

Order of Execution: 
1st constructor,
2nd getDerivedStateFromProps[(props,state)it will accept this two]
3rd Render
4th componentDidMount http call are running here to Render so that's 3rd render n 4th componentDidMount

