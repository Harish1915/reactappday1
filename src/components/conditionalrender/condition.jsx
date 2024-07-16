import CustomList from "../lists/customlist/customlist";

const Instructions=["Switch on the Stove","Take A Cooker"]

const ConditionalRendering=()=>{

   
    // if(isLogin){
    //     return <>
        
    //     <h1>welcome user</h1>
    //     <CustomList list={Instructions}/>
    //     </>
    // }else{
    //     return <>
        
    //     <h1>Please Login</h1>

        
    //     </>
    // }
    const isLogin=true;// false
    const isAdmin=false;// false
    const greeting=true;
    const subScriber=10;
   return ( 
   <>
    {
    isLogin ? 
        <> 
        {
            isAdmin ? 
            <>
            <h2>welcome user1</h2>
            <CustomList list={Instructions}/>
            
            </> : 
            
            <>
            
            <h2>welcome user2</h2>
  <CustomList list={Instructions}/>

  {greeting && <h2>Thanks to  login please expoler the content</h2>} 
  {/* // condition true  this line will be execute if it is false nothing will display */}
   {subScriber && <h2>subscriber count is {subScriber}</h2>}         
            </>
        }
</> 

: <><h2>please login to access the instructions to cook the biryani</h2> </>

   }
   
   </> 
   )
};
export default ConditionalRendering;