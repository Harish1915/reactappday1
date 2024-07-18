
const CooKingItems=(list)=>{


    return(
        <ul>
{
    list.map((eachItm)=>
    <li>{eachItm}</li>)
   
}
</ul>      
    )
};
export default CooKingItems;