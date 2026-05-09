import styled from 'styled-components';
import { Section } from '../shared';

export const Outer = styled(Section)`
  background: linear-gradient(180deg, transparent, rgba(214, 203, 174, 0.32), transparent);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
`;

export const Card = styled.div<{ $i: number }>`
  background: var(--paper-white);
  border-radius: 22px;
  padding: 32px 28px;
  border: 1px solid rgba(31, 53, 64, 0.06);
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  ${({ $i }) =>
    $i === 1 &&
    `transform: rotate(.6deg);
     background: linear-gradient(180deg, #FCF7E8, #F2E6C8);`}
  ${({ $i }) =>
    $i === 2 &&
    `transform: rotate(-.4deg);`}
`;

export const Mark = styled.span`
  font-family: var(--serif);
  font-size: 64px;
  color: var(--terracotta-deep);
  line-height: 0;
  position: absolute;
  top: 30px;
  left: 24px;
  opacity: 0.25;
`;

export const Quote = styled.p`
  font-family: var(--serif);
  font-style: italic;
  font-size: 19px;
  line-height: 1.45;
  color: var(--ink);
  margin: 18px 0 24px;
  text-wrap: balance;
  position: relative;
  padding-left: 6px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px dashed rgba(31, 53, 64, 0.12);
  padding-top: 18px;
`;

export const Av = styled.div<{ $i: number }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--serif);
  font-size: 18px;
  flex-shrink: 0;
  background: ${({ $i }) =>
    $i === 0
      ? 'linear-gradient(135deg, var(--terracotta), var(--terracotta-deep))'
      : $i === 1
        ? 'linear-gradient(135deg, var(--ocean), var(--ocean-deep))'
        : 'linear-gradient(135deg, var(--dusty), var(--dusty-deep))'};
`;
