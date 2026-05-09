import styled from 'styled-components';

export const Foot = styled.footer`
  background: var(--paper-deep);
  padding: 72px 0 32px;
  border-top: 1px solid rgba(31, 53, 64, 0.08);
  position: relative;
  z-index: 2;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.a`
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02em;
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--terracotta-deep);
    transform: translateY(-4px);
  }
`;

export const Brand = styled.div`
  p {
    color: var(--ink-soft);
    font-size: 14.5px;
    line-height: 1.6;
    margin-top: 14px;
    max-width: 300px;
  }
`;

export const Col = styled.div`
  h4 {
    font-family: var(--sans);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink-faint);
    margin-bottom: 18px;
    font-weight: 600;
  }
  ul {
    list-style: none;
  }
  li {
    padding: 6px 0;
  }
  a {
    font-size: 14.5px;
    color: var(--ink-soft);
    transition: color 0.2s ease;
  }
  a:hover {
    color: var(--terracotta-deep);
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
  a {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(31, 53, 64, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink-soft);
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  a:hover {
    background: var(--terracotta-deep);
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const Bottom = styled.div`
  border-top: 1px solid rgba(31, 53, 64, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  font-size: 13px;
  color: var(--ink-faint);
  flex-wrap: wrap;
`;
