import React, { useState } from 'react';
import { registerUser } from '../api/users'; // API helper

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userData = await registerUser({ name, email, password });
      alert('Registered successfully! 🎉');
      console.log('Registered user:', userData);
      // Optionally store user info or redirect
      localStorage.setItem('userInfo', JSON.stringify(userData));
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Name" 
        required 
      />
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
        type="email" 
        required 
      />
      <input 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
        type="password" 
        required 
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
