'use client';

import Reveal from '../Reveal';
import { Eyebrow } from '../shared';
import { PaintedSun, PaintedPalm } from '../Painted';
import { ctaBanner as copy } from '@/copy';
import { Banner, CTA } from './styles';

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
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 8 }}>{copy.h2}</h2>
        <p>{copy.p}</p>
        <CTA href="/success">
          {copy.cta} <i className="fa-solid fa-arrow-right" />
        </CTA>
      </Banner>
    </Reveal>
  );
}
