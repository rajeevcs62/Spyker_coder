//import './App.css';
import NavigationBar from './components/NavigationBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        
        <BrowserRouter>
        <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" exact element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
