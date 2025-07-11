import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background: #ffe6ec;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #e09aa3;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a, button {
    margin-left: 1rem;
    font-weight: bold;
    color: #4b2e2e;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  span {
    margin-left: 1rem;
    font-weight: bold;
    color: #4b2e2e;
    font-family: 'Dancing Script', cursive;
  }
`;

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  return (
    <Nav>
      <Logo>Maja's Bakery</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>

        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
