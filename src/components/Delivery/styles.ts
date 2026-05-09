import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
  }
`;

export const Channels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 24px;
  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Channel = styled.div<{ $variant?: 'email' }>`
  background: var(--paper-white);
  border-radius: 14px;
  padding: 28px 22px;
  text-align: center;
  border: 1px solid rgba(31, 53, 64, 0.06);
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-3px);
  }
  i {
    font-size: 32px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background: ${({ $variant }) =>
      $variant === 'email' ? 'rgba(143,168,180,.25)' : 'rgba(125,160,174,.2)'};
    color: ${({ $variant }) =>
      $variant === 'email' ? 'var(--dusty-deep)' : 'var(--ocean-deep)'};
  }
  h4 {
    font-family: var(--serif);
    font-size: 22px;
    margin-bottom: 6px;
  }
  p {
    font-size: 14px;
    color: var(--ink-faint);
  }
`;

export const Preview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 11;
  max-width: 340px;
  margin: 0 auto;
`;

export const Phone = styled.div`
  background: var(--paper-white);
  padding: 60px 22px 28px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 8px solid #1f3540;
  border-radius: 38px;
  box-shadow: ${({ theme }) => theme.shadows.lift};
  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 5px;
    background: #1f3540;
    border-radius: 3px;
  }
`;

export const Bubble = styled.div<{ $alt?: boolean }>`
  background: ${({ $alt }) =>
    $alt ? 'linear-gradient(135deg, #E4ECEF, #CADBE0)' : 'linear-gradient(135deg, #FAEEE2, #F4D9C0)'};
  padding: 18px 18px 20px;
  border-radius: 18px 18px 18px 4px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink);
  margin-bottom: 14px;
  box-shadow: 0 4px 10px -4px rgba(20, 40, 55, 0.1);
  .from {
    font-family: var(--hand);
    color: ${({ $alt }) => ($alt ? 'var(--ocean-deep)' : 'var(--terracotta-deep)')};
    font-size: 16px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    .time {
      font-family: var(--sans);
      color: var(--ink-faint);
      font-size: 12px;
    }
  }
  .aff {
    font-family: var(--serif);
    font-style: italic;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.35;
  }
  ol {
    padding-left: 18px;
    font-size: 13px;
    color: var(--ink-soft);
  }
  ol li {
    padding: 3px 0;
  }
`;
