import styled from 'styled-components';

export const Banner = styled.div`
  background: linear-gradient(135deg, #faeee2 0%, #f4d9c0 60%, #e4ecef 100%);
  border-radius: 28px;
  padding: 64px 48px;
  text-align: center;
  margin: 0 28px 80px;
  max-width: 1180px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(208, 132, 97, 0.4);
  z-index: 2;
  @media (min-width: 1240px) {
    margin: 0 auto 80px;
  }
  h2 {
    margin-bottom: 14px;
  }
  p {
    color: var(--ink-soft);
    margin-bottom: 32px;
    font-size: 17px;
    max-width: 520px;
    margin-inline: auto;
  }
`;

export const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--ink);
  color: rgb(242, 243, 244);
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
