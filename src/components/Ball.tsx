import styled, { keyframes } from 'styled-components';

interface BallNumberProps {
  number: number;
}

const popIn = keyframes`
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  70% { transform: scale(1.15) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const Ball = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff7b00, #ff7b00);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(26, 158, 92, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  animation: ${popIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  cursor: default;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.12) translateY(-2px);
    box-shadow:
      0 8px 20px rgba(26, 158, 92, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
`;

export default function BallNumber({ number }: BallNumberProps) {
  return <Ball>{number}</Ball>;
}