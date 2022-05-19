import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignIn from "./Pages/Login/SignIn";
import Nabvar from "./Pages/Share/Nabvar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppoinment from "./Pages/DashBoard/MyAppoinment";
import MyReview from "./Pages/DashBoard/MyReview";


function App() {
  return (
    <div  className="max-w-7xl mx-auto p-12">
      <Nabvar/>


      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/appointment" element={
        
        <RequireAuth>
          <Appointment/>
        </RequireAuth>
        
        
        }></Route>


        <Route path="/deshboard" element={
        
        <RequireAuth>
         <DashBoard/>
        </RequireAuth>
        
        
        }>
          <Route index element={<MyAppoinment/>}></Route>

          <Route path="review" element={<MyReview/>}></Route>


        </Route>


        <Route path="/signIn" element={<SignIn/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
