

const CustomList=({list})=>{
    return(
        <ol>
        {
        list.map((eachLi)=><li>{eachLi}</li>)
            

        }

        
        </ol>
    )
};

export default CustomList;