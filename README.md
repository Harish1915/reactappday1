

controlled components: Form controlled will done by react itself

field validations were possible

input states will be only handled react 

Steps for Controlled components:

1. Take the Form (jsx)

2. Take the states for the inputs using useState=>1) "[SingleState]"(passing object) 2) "[MultiStates]"[in login form "user name" n "password" is there  
here we can take one state for user name  and second state for password  ]

3. attach the states via value attribute to the input and also attach onChange handler for each input (field validations )

4.  To collect the values  from handlers , we will use "[event.target.value]"
 5. For field validations we can do in the handlers