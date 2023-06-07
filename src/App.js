// import logo from './logo.svg';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser as userRegular } from '@fortawesome/free-regular-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

function App() {  
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/create-task' element={<CreateTask/>}></Route>
      <Route path='/task-list' element={<TaskList/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;