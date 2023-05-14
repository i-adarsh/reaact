import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextMate" />
    <TextForm heading='Enter the text to analyze below' />
    {/* <About /> */}
    </>
  );
}
export default App;
