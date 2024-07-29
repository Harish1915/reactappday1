import AboutScreen from "../screens/about-screen";
import BlogScreen from "../screens/blog-screen";
import HomeScreen from "../screens/home.-screen";
import InvalidScreen from "../screens/invalid-screen";
import SettingScreen from "../screens/setting-screen";
import UserScreen from "../screens/user-screen";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/setting" element={<SettingScreen />} />
        <Route path="*"element={<InvalidScreen/>}></Route>
        <Route path="user"element={<UserScreen/>}></Route>


        {/* dynamic routes */}
        <Route path="user/:userId" element={<UserScreen/>}></Route>
        {/* <Route path="user/:admin" element={<AdminScreen/>}></Route> */}


      </Routes>
    </BrowserRouter>
  );
};
export default NavigationStack;
// " * " is represents the after '/' anything user enter it's directly go to the home screen 