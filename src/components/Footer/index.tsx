'use client';

import { Wrap } from '../shared';
import { footer as copy } from '@/copy';
import { Foot, Grid, Logo, Brand, Col, Socials, Bottom } from './styles';

export default function Footer() {
  return (
    <Foot>
      <Wrap>
        <Grid>
          <Brand>
            <Logo href="#">
              Dearday<span />
            </Logo>
            <p>{copy.brand}</p>
            <Socials>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" aria-label="Spotify"><i className="fa-brands fa-spotify" /></a>
            </Socials>
          </Brand>
          <Col>
            <h4>{copy.product.label}</h4>
            <ul>
              {copy.product.links.map((l) => (
                <li key={l.href + l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
          <Col>
            <h4>{copy.company.label}</h4>
            <ul>
              {copy.company.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
          <Col>
            <h4>{copy.legal.label}</h4>
            <ul>
              {copy.legal.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>
        </Grid>
        <Bottom>
          <span>{copy.copyright}</span>
          <span style={{ fontFamily: 'var(--hand)', fontSize: 18, color: 'var(--terracotta-deep)' }}>
            {copy.tagline}
          </span>
        </Bottom>
      </Wrap>
    </Foot>
  );
}
