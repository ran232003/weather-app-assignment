import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
//6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route path = "/" element = {<HomePage/>}>

      </Route>
      <Route path = "/favorite" element = {<Favorites/>}>

      </Route>
    </Routes>
    
     
    
    </BrowserRouter>
  );
}

export default App;
