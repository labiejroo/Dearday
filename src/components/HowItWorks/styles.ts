import styled from 'styled-components';

export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Step = styled.div<{ $i: number }>`
  text-align: center;
  padding: 32px 24px;
  position: relative;
  .icon {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    box-shadow: ${({ theme }) => theme.shadows.card};
    color: var(--ink);
    font-size: 32px;
    border: 1px solid rgba(31, 53, 64, 0.05);
    position: relative;
    background: ${({ $i }) =>
      $i === 0
        ? 'linear-gradient(135deg, #FAEEE2, #F4D9C0)'
        : $i === 1
          ? 'linear-gradient(135deg, #E4ECEF, #CADBE0)'
          : 'linear-gradient(135deg, #E4ECEF, #CFDADF)'};
  }
  .num {
    position: absolute;
    top: 32px;
    right: calc(50% - 56px);
    width: 28px;
    height: 28px;
    background: var(--ink);
    color: var(--paper);
    border-radius: 50%;
    font-family: var(--serif);
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
    color: var(--ink-soft);
    font-size: 15.5px;
  }
  .arrow {
    position: absolute;
    top: 60px;
    right: -30px;
    color: var(--ink-faint);
    opacity: 0.4;
    font-family: var(--hand);
    font-size: 32px;
    ${({ theme }) => theme.media.lg} {
      display: none;
    }
  }
`;
