import './App.css';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
    <>
      <Navbar title = {"TextUtils"} About = "contact"/>
      <div className='container'>
        <TextForm heading = "Enter The Text to Analyze"/>
      </div>
      
    </>
  );
}

export default App;