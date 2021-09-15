import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

 
function App() {
  return (
    <div className="block">
        
        <Navbar title="TextUtils" abouttext="AboutUS" />
        <div className="container my-3">
          <TextForm heading="Enter the text to analyse below"/>
          {/* <About /> */}
        </div>
        
    </div >
   
  );
}

export default App;
