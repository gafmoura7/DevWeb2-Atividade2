import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { BetProvider } from './context/BetContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Palpite from './pages/Palpite';
import Historico from './pages/Historico';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%; 
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #12121f;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <BetProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BetProvider>
    </BrowserRouter>
  );
}