import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alerts from './components/Alerts'

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Contact from "./components/Contact";




function App() {
      const [mode, setMode] = useState('light')

      const [alert, setAlert] = useState (null);

      const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      }

      const toggleMode = () => {
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = '#042743'
          showAlert("Dark mode has been enabled", "success")
          document.title='Textutils - Dark mode'
          setInterval(() => {
            document.title='VIRUSSSS BEWARE!!!!!!!!!!!!!'
          }, 2000);
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enabled", "success")
          document.title='Textutils - Light mode'
          setInterval(() => {
            document.title='DOWNLOAD THIS ANTIVIRUS BESAFE'
          }, 1500);
        }
      }

  return (
    <>
      <Router>
      <Navbar title="Textutils" aboutText="About" contactText="Contact us" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar title={3} aboutText="About us" contactText="Contact us"/> */}
      {/* <Navbar /> */}
     
      <Alerts alert = {alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to format" mode={mode} />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
          
          {/* <Route exact path="/">
          <TextForm showAlert = {showAlert} heading = "Enter the text to format" mode={mode}/>
          </Route> */}
        </Routes>
            {/* <About /> */}
          
           
          
      </div>
      </Router>

    </>
  );
}

export default App;
