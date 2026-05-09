import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 40px 28px 30px;
  border-top: 1px solid rgba(31, 53, 64, 0.08);
  border-bottom: 1px solid rgba(31, 53, 64, 0.08);
  margin: 0 auto;
  max-width: 1180px;
  position: relative;
  z-index: 2;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Counter = styled.div`
  &:not(:last-child) {
    border-right: 1px dashed rgba(31, 53, 64, 0.14);
  }
  ${({ theme }) => theme.media.sm} {
    &:not(:last-child) {
      border-right: none;
      border-bottom: 1px dashed rgba(31, 53, 64, 0.14);
      padding-bottom: 24px;
    }
  }
`;

export const Num = styled.div`
  font-family: var(--serif);
  font-size: clamp(36px, 4.2vw, 54px);
  color: var(--ink);
  line-height: 1;
  .unit {
    font-family: var(--hand);
    color: var(--terracotta-deep);
    font-size: 0.7em;
    margin-left: 4px;
  }
`;

export const Label = styled.div`
  font-size: 13.5px;
  color: var(--ink-faint);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 10px;
`;
