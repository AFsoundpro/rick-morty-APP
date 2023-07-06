import React, { useState} from 'react';
import styles from './form.module.css'; // Importa el archivo CSS como un objeto
import {useNavigate} from 'react-router-dom';

export default function Form({ login }) {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(user);
    if (Object.keys(validationErrors).length === 0) {
      login(user);
      navigate('/home'); // Redirige al usuario a la página de inicio
    } else {
      setError(validationErrors);
    }
  }

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
    setError(validate({ ...user, [event.target.name]: event.target.value }));
  }

  function validate(data) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const regexp = new RegExp('[0-9]');

    let errors = {};

    if (data.username.length <= 4) {
      errors.username = 'Username must be at least 5 characters long';
    }

    if (!regex.test(data.email)) {
      errors.email = 'You must enter a valid email';
    }

    if (!regexp.test(data.password)) {
      errors.password = 'Debe contener por lo menos un número';
    }

    if (data.password.length < 6 || data.password.length > 10) {
      errors.password = 'Contraseña entre 6 y 10 caracteres';
    }

    return errors;
  }

  return (
    <div className={styles.FormContainer}>
      <div className={styles.FormCard}>
        <form onSubmit={handleSubmit}>
          <label>USERNAME</label>
          <input key="1" name='username' onChange={handleChange} value={user.username} type='text' placeholder='username...' />
          {error.username ? (<spam style={{color:"red"}}>{error.username}</spam>): null}
          <label type='email'>Email</label>
          <input
            key='2'
            name='email'
            onChange={handleChange}
            value={user.email}
            type='email'
            placeholder='email...'
          />
          {error.email ? <span style={{ color: 'red' }}>{error.email}</span> : null}
          <label>Contraseña</label>
          <input
            key='3'
            name='password'
            onChange={handleChange}
            value={user.password}
            type='password'
            placeholder='Contraseña'
          />
          {error.password ? <span style={{ color: 'red' }}>{error.password}</span> : null}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
