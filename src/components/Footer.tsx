'use client';

import styled from 'styled-components';
import { Wrap } from './shared';
import { footer as c } from '@/copy';

const Foot = styled.footer`
  background: var(--paper-deep);
  padding: 72px 0 32px;
  border-top: 1px solid rgba(31, 53, 64, 0.08);
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
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

const Logo = styled.a`
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

const Brand = styled.div`
  p {
    color: var(--ink-soft);
    font-size: 14.5px;
    line-height: 1.6;
    margin-top: 14px;
    max-width: 300px;
  }
`;

const Col = styled.div`
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

const Socials = styled.div`
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

const Bottom = styled.div`
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

export default function Footer() {
  return (
    <Foot>
      <Wrap>
        <Grid>
          <Brand>
            <Logo href="#">
              Dearday<span />
            </Logo>
            <p>{c.brand}</p>
            <Socials>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" aria-label="Spotify"><i className="fa-brands fa-spotify" /></a>
            </Socials>
          </Brand>
          <Col>
            <h4>{c.product.label}</h4>
            <ul>
              {c.product.links.map((l) => (
                <li key={l.href + l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
          <Col>
            <h4>{c.company.label}</h4>
            <ul>
              {c.company.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
          <Col>
            <h4>{c.legal.label}</h4>
            <ul>
              {c.legal.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
        </Grid>
        <Bottom>
          <span>{c.copyright}</span>
          <span style={{ fontFamily: 'var(--hand)', fontSize: 18, color: 'var(--terracotta-deep)' }}>
            {c.tagline}
          </span>
        </Bottom>
      </Wrap>
    </Foot>
  );
}
