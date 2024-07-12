
import { fruits } from "./fruits";

const ListItems = ()=>{

    return (
    <>
      {fruits.map((a,b)=>(
        <li key={a.id}>
        {a.cost}</li>
        
        ))}
        </>
    );
};
export default ListItems;