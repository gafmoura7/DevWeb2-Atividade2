import styled, { keyframes } from 'styled-components';
import { useBet } from '../context/BetContext';
import BallNumber from '../components/Ball';
import type { Key } from 'react';

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
  padding: 2rem;
`;

const Card = styled.div`
  background: #1e1e30;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

const BetRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const EmptyMessage = styled.p`
  font-family: 'DM Sans', sans-serif;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.95rem;
  margin: 0;
`;

const BetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

export default function Historico() {
  const { history } = useBet();

  return (
    <PageWrapper>
      <Card>
        <Title>Palpites</Title>
        {history.length === 0 ? (
          <EmptyMessage>Nenhum palpite gerado ainda.</EmptyMessage>
        ) : (
          <BetList>
            {history.map((bet: any[], rowIndex: Key | null | undefined) => (
              <BetRow key={rowIndex}>
                {bet.map((num, i) => (
                  <BallNumber key={`${rowIndex}-${num}-${i}`} number={num} />
                ))}
              </BetRow>
            ))}
          </BetList>
        )}
      </Card>
    </PageWrapper>
  );
}