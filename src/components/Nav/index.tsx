'use client';

import { useEffect, useState } from 'react';
import { nav as copy } from '@/copy';
import { Nav, Inner, Logo, Links, CtaSm } from './styles';

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
          {copy.links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <CtaSm href="#plans" className="btn">
            {copy.cta}
          </CtaSm>
        </Links>
      </Inner>
    </Nav>
  );
}
