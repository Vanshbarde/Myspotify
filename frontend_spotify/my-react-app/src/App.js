
 import './App.css';
import './output.css';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      <Routes>
         {/* adding routes coponents here indicates to the package  (react-router-dom)
        that we are starting to define  our routes  */}
   <Route path='/'  element = { <div> hi bro how are you </div> }/>
   <Route path='/login'  element = { <LoginComponent/> }/>     
   <Route path='/signup'  element = { <SignupComponent/> }/> 
   <Route path='/home' element = { <HomeComponent/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
