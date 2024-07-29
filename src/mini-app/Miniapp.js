import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutScreen from "../mini-screens/about-screen";
import HomeScreen from "../mini-screens/home-screen";
import BlogScreen from "../mini-screens/blog-screen";
import LoginScreen from "../mini-screens/login-screen";
import RecipesScreen from "../mini-screens/blog-screen";

const MyApp = () => {
  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomeScreen/>}/>
   <Route path="/about" element={<AboutScreen/>}/>
   <Route path="/recipes" element={<RecipesScreen/>}/>
   <Route path="/*" element={<LoginScreen/>}/>


   </Routes>
    </BrowserRouter>
  );
};
export default MyApp;
