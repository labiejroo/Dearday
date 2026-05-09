'use client';

import styled from 'styled-components';
import Reveal from './Reveal';
import { Eyebrow } from './shared';
import { PaintedSun, PaintedPalm } from './Painted';
import { ctaBanner as c } from '@/copy';

const Banner = styled.div`
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

const CTA = styled.a`
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

export default function CtaBanner() {
  return (
    <Reveal>
      <Banner>
        <PaintedSun
          style={{
            position: 'absolute',
            top: 20,
            left: 30,
            width: 120,
            height: 120,
            opacity: 0.35,
            color: 'var(--terracotta-deep)',
          }}
        />
        <PaintedPalm
          style={{
            position: 'absolute',
            bottom: 20,
            right: 30,
            width: 140,
            height: 140,
            opacity: 0.32,
            transform: 'rotate(165deg) scaleX(-1)',
          }}
        />
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 8 }}>{c.h2}</h2>
        <p>{c.p}</p>
        <CTA href="/sukces">
          {c.cta} <i className="fa-solid fa-arrow-right" />
        </CTA>
      </Banner>
    </Reveal>
  );
}
