import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './Page/Home';
import AboutUS from './Page/AboutUS';
import ContactUs from './Page/ContactUs';
import CropPreservation from './Page/CropPreservation';
import Govermentschem from './Page/Govermentschem';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUS/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/croppres' element={<CropPreservation/>}/>
        <Route path='/govschem' element={<Govermentschem/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
