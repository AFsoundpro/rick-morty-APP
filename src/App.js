import React, { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import axios from 'axios';
// import Card from './components/Card.jsx';
// import Cards from './components/Cards.jsx';
import Nav from './components/NavBar/Nav';
import About from './components/about';
import Detail from './components/detail';
import Home from './components/home';
import Form from './components/form/form';


function App() {
  const [characters, setCharacters] = useState([]);
  
  const onClose = (id) => {
    setCharacters(characters.filter((pj) => pj.id !== id));
  };
  
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1234567';

  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  
  
  const location = useLocation();

  return (
    <div className='App'>
      {
        location.pathname !== "/" && <Nav onSearch={onSearch} /> 
      }
   
   <Routes>
     <Route path="/" element={<Form login={login} />} />
     <Route path="/about" element={<About />} />
     <Route path="/home" element={<Home characters={characters} onClose={onClose} />} />
     <Route path="/Detail/:id" element={<Detail />} />
   </Routes>
   {/* <Cards characters={characters} onClose={onClose} /> */}
 </div>
  );
}

export default App;
