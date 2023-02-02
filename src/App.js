import './App.css';
import Footer from "./Components/Footer"
import Cart from "./Pages/Cart/Cart"
import Shop from "./Pages/Shop/Shop"
import Home from "./Pages/Home/Home"
import {Route, Routes } from 'react-router-dom'


 /* import { motion } from "framer-motion"

import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';

 */

function App(props) {

  return (
    <div className="App">
   
   
          <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Shop' element={<Shop />} />


        </Routes>


      <Footer />


    </div>
  );
}

export default App;
