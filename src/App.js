import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Properties from "./Components/Properties";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
//import Footer from "./Components/Footer";
import RealEstateForm from './pages/RealEstateForm';
import EducationForm from './pages/EducationForm';
import LegalConsultForm from './pages/LegalConsultForm';
import FtPropertyOne from './pages/FtPropertyOne';
import './App.css';
import DelightEstate from "./pages/DelightEstate";
import FarmEstate from "./pages/FarmEstate";
import Dashboard from "./Components/Dashboard";
import FeaturedProperties from "./pages/FeaturedProperties";
import AddProperties from "./properties/AddProperties";
import EditProperties from "./properties/EditProperties";
import ViewProperties from "./properties/ViewProperties";
import ViewFeturedProperties from "./FeturedProperties/ViewFeturedProperties";
import AddImage from "./Gallery/AddImage";
//import LoginSignUp from "./Login and Signup/LoginSignUp";
//import SignUp from "./Login and Signup/SignUp";
//import Login from "./Login and Signup/Login";
//import Layout from "./Components/Layout";
import LoginSignUp from "./Login and Signup/LoginSignUp";
//import NewLogin from "./Login and Signup/NewLogin";
//import ApiTest from "./Homehelp/ApiTest";
//import RequiredAuth from "./Components/RequiredAuth";
//import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <>
      <Routes>
        {/*<Route path="/" element={<Layout />}>*/}
        <Route path="/" element={<LoginSignUp />} />
          <Route element={<Header />}>
            <Route element={<Sidebar />}>
              {/*<Route element={<RequiredAuth />}>*/}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/realestateform" element={<RealEstateForm />} />
              <Route path="/educationform" element={<EducationForm />} />
              <Route path="/legalconsultform" element={<LegalConsultForm />} />
              <Route path="/ftpropertyone" element={<FtPropertyOne />} />
              <Route path="/delightestate" element={<DelightEstate />} />
              <Route path="/farmestate" element={<FarmEstate />} />
              <Route path="/featuredproperties" element={<FeaturedProperties />} />
              <Route path="/addproperties" element={<AddProperties />} />
              <Route path="/editproperties/:id" element={<EditProperties />} />
              <Route path="/viewproperties/:id" element={<ViewProperties />} />
              <Route path="/viewfeturedproperties/:id" element={<ViewFeturedProperties />} />
              {/*<Route path="/apitest" element={<ApiTest />} />*/}
              <Route path="/addimage/:id" element={<AddImage />} />
              {/*</Route>*/}
            </Route>
          </Route>
        {/*</Route>*/}
      </Routes>
    </>
  );
}

export default App;
