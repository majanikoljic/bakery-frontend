import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f9e6eb;
  padding: 1.5rem 2rem;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: #b36b7c;
  box-shadow: inset 0 1px 0 #f0cbd2;
  margin-top: 3rem;
`;

const SocialLinks = styled.div`
  margin: 0.5rem 0;
  
  a {
    color: #b36b7c;
    margin: 0 0.8rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #d48f99;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Sweet Delights Bakery</p>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </SocialLinks>
      <p>123 Bakery Lane, Cupcake City, CA</p>
      <p>Open daily: 8am - 8pm</p>
    </FooterContainer>
  );
}

export default Footer;
