import { Link, Outlet } from "react-router-dom";

function DoctorScreen(){
    return(
        <div>
            <h1>list of Doctors </h1>
            <Link to="new" style={{margin:10,textDecoration:"none"}}> New Doctors</Link>
            <Link to="old" style={{ margin:10,textDecoration:"none"}}> Old Doctors</Link>
            <Outlet/>

        </div>
    );

};export default DoctorScreen;


export const NewDoctor=()=>{
    return(
        <>
            <h1> list of New Doctor</h1>
        </>
    )
};

export const OldDoctor=()=>{
    return(
        <>
            <h1> list of Old Doctor</h1>
        </>
    )
};