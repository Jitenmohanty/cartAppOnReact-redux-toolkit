import Header from './components/Header';
import Home from './components/Home';
import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/cart.scss';
import './styles/mediaquery.scss';
import {Toaster} from 'react-hot-toast'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
