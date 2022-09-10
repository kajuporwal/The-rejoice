// npm install react-router-dom
import { BrowserRouter, Routes,Route } from "react-router-dom";


import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Depression from "./component/Depression";
import Carousel from "./component/Carousel";
import Yoga from "./component/Yoga"
import Footer from "./component/Footer";
import Register from "./component/Register";
import Login from "./component/Login";
import Error from "./component/Error"
import Yoga_1 from "./component/Yoga_1";
import Councillor from "./component/Councillor" 
import Councillor_1 from "./component/Councillor_1";
function App() {
  return (
    <>
 <BrowserRouter>
    <Navbar/>

{/* ---------------------------------- */}
  
<Routes>

    <Route path="/" element={<Homepage />}   />
    <Route path="/register" element={<Register />}   />
    <Route exact path="/login" element={<Login />}   />
    <Route path="/yoga_1" element={<Yoga_1 />}   />
    <Route path="/councillor_1" element={<Councillor_1 />}   />
    <Route path="*" element={<Error />}   />

</Routes>
    </BrowserRouter>
   
    </>
  );
}
export default App;
// --------------------------------------------------------------


