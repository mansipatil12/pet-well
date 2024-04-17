
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Games from './Pages/Games';
//import Community from './Pages/Community';
import Therapy from './Pages/Therapy';

import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/games' element={<Games/>}/>
       <Route path='/therapy' element={<Therapy/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
//<Route path='/profile' element={<Profile/>}/>
//<Route path='/games' element={<Games/>}/>
//<Route path='/community' element={<Community/>}/>
//<Route path='/therapy' element={<Therapy/>}/>

export default App;
