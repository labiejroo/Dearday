'use client';

import Reveal from '../Reveal';
import { Wrap, SectionHead, Eyebrow } from '../shared';
import { PaintedBlob } from '../Painted';
import { testimonials as copy } from '@/copy';
import { Outer, Grid, Card, Mark, Quote, Author, Av } from './styles';

export default function Testimonials() {
  return (
    <Outer id="testimonials">
      <PaintedBlob
        id="blob-l"
        variant="ocean"
        style={{ top: '30%', left: -160, width: 520, height: 380, opacity: 0.35 }}
      />
      <PaintedBlob
        id="blob-r"
        variant="terracotta"
        style={{ bottom: '10%', right: -180, width: 520, height: 380, opacity: 0.35 }}
      />
      <Wrap>
        <Reveal>
          <SectionHead>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2>{copy.h2}</h2>
          </SectionHead>
        </Reveal>
        <Grid>
          {copy.items.map((t, i) => (
            <Reveal key={i}>
              <Card $i={i}>
                <Mark>„</Mark>
                <Quote>{t.quote}</Quote>
                <Author>
                  <Av $i={i}>{t.initial}</Av>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                    <div
                      style={{
                        fontFamily: 'var(--hand)',
                        fontSize: 16,
                        color: 'var(--ink-faint)',
                      }}
                    >
                      {t.meta}
                    </div>
                  </div>
                </Author>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Wrap>
    </Outer>
  );
}
