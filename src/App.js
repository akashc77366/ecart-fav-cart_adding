
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
