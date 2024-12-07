import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import FeedbackForm from './Components/FeedbackForm';
import DonorPage from './Components/DonorPage';
import RegiserationForm from './Components/RegisterationForm';
import TrackApplication from './Components/TrackApplication';

function App() {
  return (
    <div className="App">
      <Main></Main>

      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/feedback' element={<FeedbackForm/>}/>
        <Route path='/donor' element={<DonorPage/>}/>
        <Route path='/register' element={<RegiserationForm/>}/>
        <Route path='/application' element={<TrackApplication/>}/>
        
      </Routes>

      
      
    </div>
  );
}

export default App;
