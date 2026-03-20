import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useBet } from '../context/BetContext';
import BallNumber from '../components/Ball';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #12121f;
`;

const Card = styled.div`
  background: #1e1e30;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: ${fadeUp} 0.5s ease both;
  min-width: 480px;
`;

const Title = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
`;

const BallsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const NewBetButton = styled.button`
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
    background: #1845b8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(18, 82, 211, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Palpite() {
  const { currentBet, generateBet } = useBet();

  useEffect(() => {
    generateBet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <Card>
        <Title>Palpite para a Mega-sena</Title>
        <BallsRow>
          {currentBet.map((num: any, i: any) => (
            <BallNumber key={`${num}-${i}`} number={num} />
          ))}
        </BallsRow>
        <NewBetButton onClick={generateBet}>Gerar sequência</NewBetButton>
      </Card>
    </PageWrapper>
  );
}