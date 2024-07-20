
AXIOS : third party library for http calls, it efficient compared with fetch

Axios will also return the promise


syntax: axios.get(URL).then(res=>console.log(res));

componentDiMount: It is a Method in react Mounting phase,
which causes the side effects(async) in our react class based component
(pure-function= for every same input it will gives the  same output )

example of side effects are:
1. Http calls (api call)
2. Dom Manipulations
3. Event Listeners
4. Timer's (setInterval,setTimeout)
this all are part of a browser (side effects)