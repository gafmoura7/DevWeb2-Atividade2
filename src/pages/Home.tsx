import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
`;

const Card = styled.div`
  background: #1e1e30;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3.5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: ${fadeUp} 0.5s ease both;
`;

const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
`;

const StartButton = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  background: #1252d3;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.75rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(18, 82, 211, 0.4);

  &:hover {
    background: #000000;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Card>
        <Title>Bem-vindo!</Title>
        <StartButton onClick={() => navigate('/palpite')}>
          Clique para começar
        </StartButton>
      </Card>
    </PageWrapper>
  );
}