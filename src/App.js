import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'
import { Switch , Route } from 'react-router-dom'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import Contact from './pages/contact'
function App() {
  const [isOpen , setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
     <Navbar handleOpen = {handleOpen}/>
     <Dropdown isOpen = {isOpen} handleOpen = {handleOpen}/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/menu' component={Menu}/>
       <Route path='/about' component={About}/>
       <Route path='/contact' component={Contact}/>
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
