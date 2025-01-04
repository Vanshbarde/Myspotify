
// import './App.css';
import './output.css';
import LoginComponent from './routes/Login';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="w-scree h-screen">
      <BrowserRouter>
      <Routes>
         {/* adding routes coponents here indicates to the package  (react-router-dom)
        that we are starting to define  our routes  */}
   <Route path='/'  element = { <div> hi bro how are you </div> }/>
   <Route path='/login'  element = { <LoginComponent/> }/>     

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
