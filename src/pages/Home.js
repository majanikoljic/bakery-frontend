import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  background: linear-gradient(to right, #fff0f5, #ffe6e6);
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #d48f99;
  font-family: 'Dancing Script', cursive;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4b2e2e;
  max-width: 600px;
  margin: 1rem auto 0;
`;

function Home() {
  return (
    <Hero>
      <Title>Welcome to Maja’s Bakery</Title>
      <Subtitle>Soft. Sweet. Stunning. Discover the joy of handcrafted pastries and delicate treats made with love 💕</Subtitle>
    </Hero>
  );
}

export default Home;
