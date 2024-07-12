
const Heading1 = (prop)=>
{
const{text}=prop
    return <h1>{text}</h1>
    
}

export default Heading1;

export const Heading2 = (prop)=>
    {
    const {description}=prop
        return <h2> {description} </h2>
    }

    
export const Heading3 = ()=>
    {
    
        return <h3>React </h3>
    }

    export const Heading4 = ()=>
        {
        
            return <h4>App </h4>
        }