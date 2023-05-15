import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // For enabling dark mode
  const [alert, setAlert] = useState(null); // For setting alerts

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
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextMate: Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextMate: Light Mode';
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextMate" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert = { showAlert } heading='Enter the text to analyze below' mode = {mode}/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
