import './App.css';
import Header from './headerComponent/header';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Header/>
     
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;