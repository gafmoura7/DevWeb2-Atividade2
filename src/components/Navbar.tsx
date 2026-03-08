import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 70px;
  background: #1a1a2e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Brand = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 0.5rem;
`;

const BrandName = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: 0.05em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const NavLink = styled(Link)`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.25s ease;
  }

  &:hover {
    color: #ffffff;
    &::after { width: 100%; }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Brand to="/">
        <BrandName>"Little Tiger"</BrandName>
        <NavLinks>
        <NavLink to="/palpite">Palpite</NavLink>
        <NavLink to="/historico">Histórico</NavLink>
        </NavLinks>
      </Brand>

    </Nav>
  );
}