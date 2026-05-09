import styled from 'styled-components';

export const FaqBox = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

export const Item = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid rgba(31, 53, 64, 0.1);
  &:first-child {
    border-top: 1px solid rgba(31, 53, 64, 0.1);
  }
  .q {
    width: 100%;
    text-align: left;
    padding: 24px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    font-family: var(--serif);
    font-size: 21px;
    font-weight: 500;
    color: var(--ink);
    transition: color 0.2s ease;
  }
  .q:hover {
    color: var(--terracotta-deep);
  }
  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ $open }) => ($open ? 'var(--terracotta-deep)' : 'rgba(208,132,97,.25)')};
    color: ${({ $open }) => ($open ? '#fff' : 'var(--terracotta-deep)')};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease, background 0.2s ease, color 0.2s ease;
    transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    font-size: 13px;
  }
  .a {
    max-height: ${({ $open }) => ($open ? '500px' : '0px')};
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .a-inner {
    padding: 0 8px 26px;
    color: var(--ink-soft);
    font-size: 15.5px;
    line-height: 1.65;
    max-width: 640px;
  }
`;
