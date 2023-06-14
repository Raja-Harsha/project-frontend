import './App.css';
import React from 'react';import { BrowserRouter,Route,Routes} from "react-router-dom"
import Navigation from "./components/Navigation"
import Category from './components/Category';
import Home from "./components/Home"
import Signup from './components/Signup';
import Signin from "./components/Signin"


class App extends React.Component{
  render(){
  return (
    <div className="App">
     <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/category" element={<Category/>}/>
            <Route  path="/signup" element={<Signup/>}/>
            <Route  path="/signin" element={<Signin/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
