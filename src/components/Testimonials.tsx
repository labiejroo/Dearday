'use client';

import styled from 'styled-components';
import Reveal from './Reveal';
import { Wrap, Section, SectionHead, Eyebrow } from './shared';
import { PaintedBlob } from './Painted';
import { testimonials as c } from '@/copy';

const Outer = styled(Section)`
  background: linear-gradient(180deg, transparent, rgba(214, 203, 174, 0.32), transparent);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
`;

const Card = styled.div<{ $i: number }>`
  background: var(--paper-white);
  border-radius: 22px;
  padding: 32px 28px;
  border: 1px solid rgba(31, 53, 64, 0.06);
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  ${({ $i }) =>
    $i === 1 &&
    `transform: rotate(.6deg);
     background: linear-gradient(180deg, #FCF7E8, #F2E6C8);`}
  ${({ $i }) =>
    $i === 2 &&
    `transform: rotate(-.4deg);`}
`;

const Mark = styled.span`
  font-family: var(--serif);
  font-size: 64px;
  color: var(--terracotta-deep);
  line-height: 0;
  position: absolute;
  top: 30px;
  left: 24px;
  opacity: 0.25;
`;

const Quote = styled.p`
  font-family: var(--serif);
  font-style: italic;
  font-size: 19px;
  line-height: 1.45;
  color: var(--ink);
  margin: 18px 0 24px;
  text-wrap: balance;
  position: relative;
  padding-left: 6px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px dashed rgba(31, 53, 64, 0.12);
  padding-top: 18px;
`;

const Av = styled.div<{ $i: number }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--serif);
  font-size: 18px;
  flex-shrink: 0;
  background: ${({ $i }) =>
    $i === 0
      ? 'linear-gradient(135deg, var(--terracotta), var(--terracotta-deep))'
      : $i === 1
        ? 'linear-gradient(135deg, var(--ocean), var(--ocean-deep))'
        : 'linear-gradient(135deg, var(--dusty), var(--dusty-deep))'};
`;


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
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2>{c.h2}</h2>
          </SectionHead>
        </Reveal>
        <Grid>
          {c.items.map((t, i) => (
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
