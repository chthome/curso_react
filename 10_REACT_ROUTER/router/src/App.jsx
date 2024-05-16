import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm'; // search params

import './App.css';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default App;
