import {Routes, Route} from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import Register from './pages/services/register/Register';
import NewReister from './pages/services/newRegister/NewReister';
import Service from './pages/services/service/Service';
import Topbar from './components/topbar/Topbar';
import Login from './pages/services/login/Login';
import One from './pages/forms/one/One';
import Two from './pages/forms/two/Two';


function App() {
  return (
    <>
    <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/services/register' element={< Register />} />
        <Route path='/services' element={< Service />} />
        <Route path='/services/newRegister' element={< NewReister />} />
        <Route path='/services/login' element={< Login />} />
        <Route path='/one' element={< One />} />
        <Route path='/two' element={< Two />} />
      </Routes>
    </>
  );
}

export default App;
