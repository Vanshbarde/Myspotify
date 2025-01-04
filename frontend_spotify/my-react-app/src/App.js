import './App.css';
import './output.css';
import { useState } from 'react';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import Library from './routes/Library';
import Search from './routes/Search';
import LoggedinHomeComponent from './routes/LoggedinHome'; // Corrected Import
import LoggedOutComponent from './routes/LoggedOut'; // New Import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContexts';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);
  console.log("**Token cookie**:", cookie.token); // Added logging to check token value

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          <songContext.Provider value={{ currentSong, setCurrentSong }}>
            <Routes>
              <Route path='/home' element={<LoggedinHomeComponent />} />
              <Route path='/uploadSong' element={<UploadSong />} />
              <Route path='/library' element={<Library />} />
              <Route path='/myMusic' element={<MyMusic />} />
              <Route path='/search' element={<Search />} />
              <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/signup' element={<SignupComponent />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<LoggedOutComponent />} /> {/* Use the new component here */}
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
