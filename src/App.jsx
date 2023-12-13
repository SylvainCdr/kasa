
import Home from './Pages/Home/Home'
import Header from './Pages/Partials/Header/Header';
import Footer from './Pages/Partials/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes> 

      <Route path="/" element={<Home />} />
    
   
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
