import styled from 'styled-components';
import { Section } from '../shared';

export const Outer = styled(Section)`
  background: linear-gradient(180deg, transparent, rgba(229, 219, 194, 0.5), transparent);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: 0 auto;
  }
`;

export const Card = styled.div<{ $featured?: boolean }>`
  background: var(--paper-white);
  border-radius: 22px;
  padding: 38px 32px 36px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid rgba(31, 53, 64, 0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  ${({ $featured }) =>
    $featured &&
    `background: linear-gradient(180deg, #FCF7E8, #fff);
     border: 1.5px solid var(--terracotta);
     transform: scale(1.03);`}
  &:hover {
    transform: ${({ $featured }) => ($featured ? 'scale(1.03) translateY(-6px)' : 'translateY(-6px)')};
    box-shadow: ${({ theme }) => theme.shadows.lift};
  }
`;

export const Tag = styled.span<{ $variant?: 'value' }>`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ $variant }) => ($variant === 'value' ? 'var(--ocean-deep)' : 'var(--terracotta-deep)')};
  color: #fff;
  padding: 5px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: 0 6px 14px -6px
    ${({ $variant }) => ($variant === 'value' ? 'rgba(44,90,107,.5)' : 'rgba(184,98,59,.6)')};
`;

export const Name = styled.div`
  font-family: var(--serif);
  font-size: 24px;
  color: var(--ink);
  margin-bottom: 6px;
`;

export const Desc = styled.div`
  font-size: 14px;
  color: var(--ink-faint);
  margin-bottom: 24px;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
  font-family: var(--serif);
  .amount {
    font-size: 54px;
    line-height: 1;
    color: var(--ink);
    font-weight: 500;
  }
  .period {
    font-size: 16px;
    color: var(--ink-faint);
    font-family: var(--sans);
  }
`;

export const Billed = styled.div`
  margin-bottom: 28px;
  font-family: var(--hand);
  font-size: 18px;
  color: var(--ink-faint);
`;

export const Savings = styled.div`
  font-family: var(--hand);
  color: var(--ocean-deep);
  font-size: 18px;
  margin-top: -10px;
  margin-bottom: 18px;
  text-align: center;
`;

export const Features = styled.ul`
  list-style: none;
  margin-bottom: 28px;
  flex: 1;
  li {
    padding: 9px 0;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14.5px;
    color: var(--ink-soft);
    border-bottom: 1px dotted rgba(31, 53, 64, 0.08);
  }
  li:last-child {
    border-bottom: none;
  }
  i {
    color: var(--ocean-deep);
    font-size: 13px;
    margin-top: 5px;
    flex-shrink: 0;
  }
`;

export const CtaPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  background: var(--ink);
  color: rgb(242, 243, 244);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const CtaGhost = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  background: transparent;
  color: var(--ink);
  border: 1px solid rgba(31, 53, 64, 0.2);
  &:hover {
    background: rgba(31, 53, 64, 0.04);
  }
`;
