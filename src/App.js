
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Signin from './Components/Signin';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/MovieDetails" element={<MovieDetails/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
