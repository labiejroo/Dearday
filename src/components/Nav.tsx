'use client';

import styled from 'styled-components';
import { nav as c } from '@/copy';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px) saturate(140%);
  background: rgba(239, 231, 210, 0.78);
  border-bottom: 1px solid rgba(31, 53, 64, 0.06);
  transition: box-shadow 0.25s ease;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 28px;
  max-width: 1180px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02em;
  display: flex;
  align-items: baseline;
  gap: 6px;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--terracotta-deep);
    display: inline-block;
    transform: translateY(-4px);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  a {
    font-size: 14.5px;
    color: var(--ink-soft);
    transition: color 0.2s ease;
  }
  a:not(.btn):hover {
    color: var(--ink);
  }
  ${({ theme }) => theme.media.lg} {
    a:not(.btn) {
      display: none;
    }
  }
`;

const CtaSm = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  background: var(--ink);
  color: rgb(242, 243, 244);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 22px -10px rgba(31, 53, 64, 0.6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

import { useEffect, useState } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav style={{ boxShadow: scrolled ? '0 8px 24px -16px rgba(20,40,55,.18)' : 'none' }}>
      <Inner>
        <Logo href="#">
          Dearday<span />
        </Logo>
        <Links>
          {c.links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <CtaSm href="#plans" className="btn">
            {c.cta}
          </CtaSm>
        </Links>
      </Inner>
    </Nav>
  );
}
