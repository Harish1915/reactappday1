import SpinnEr from "../components/bootstrap/spinner/spinner";
import CustomButton from "../components/button/button";
import DishListing from "../components/class-components/memorization/dishListing";
import UseMemo from "../components/class-components/memorization/usememocallback";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { useAxios } from "../Customhooks/useAxios";

function TestScreen() {
  const [data, error, loading,each] = useAxios();
  console.log(data);
  

  if (error) {
    return <h2>some thing went wrong</h2>;
  }
  return (
    <>
      <NavigationNavBar />
      <h1>hi test TestScreen</h1>
      {loading ? <SpinnEr /> : <> 
      
{
          data.map((each)=>
            <>
            <h1>{each.id}</h1>
            <img src={each.image} height={150} width={150}/>
            <p>{each.title}</p>
            
            </>
                  )
}
      
       </>} 
      {/* <h1> use map and iterate data n bind the ui}

      {/* <UseMemo/> */}

      {/* <DishListing/> */}
    </>
  );
}
export default TestScreen;
