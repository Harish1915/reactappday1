import AboutScreen from "../screens/about-screen";
import BlogScreen from "../screens/blog-screen";
import DoctorScreen, { NewDoctor, OldDoctor } from "../screens/doctors-screen";
import HomeScreen from "../screens/home.-screen";
import InvalidScreen from "../screens/invalid-screen";
import RecipeDetail from "../screens/recipe-details-screen";
import SettingScreen from "../screens/setting-screen";
import UserScreen from "../screens/user-screen";

const { BrowserRouter, Routes, Route, Router } = require("react-router-dom");

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/setting" element={<SettingScreen />} />
        <Route path="*" element={<InvalidScreen />} />
        <Route path="recipes" element={<UserScreen />} />

        {/* nested navigation */}

        <Route path="/doctors" element={<DoctorScreen />}>
          <Route path="new" element={<NewDoctor />} />
          <Route path="old" element={<OldDoctor />} />
        </Route>

        {/* dynamic routes */}
        <Route
          path="recipes/:cuisine/:recipeId"
          element={<RecipeDetail />}
        ></Route>
        {/* <Route path="user/:admin" element={<AdminScreen/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
export default NavigationStack;
// " * " is represents the after '/' anything user enter it's directly go to the home screen
