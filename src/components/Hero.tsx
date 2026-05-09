'use client';

import styled from 'styled-components';
import Reveal from './Reveal';
import { Wrap, BtnPrimary, BtnGhost } from './shared';
import { PaintedSun, PaintedPalm } from './Painted';
import { hero as c } from '@/copy';

const Header = styled.header`
  padding: 64px 0 100px;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(125, 160, 174, 0.18);
  color: var(--ocean-deep);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;
  border: 1px solid rgba(44, 90, 107, 0.2);
  margin-bottom: 28px;
  .pulse {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--ocean-deep);
    animation: pulse 2.4s infinite;
  }
`;

const H1 = styled.h1`
  .accent {
    font-style: italic;
    color: var(--terracotta-deep);
  }
  .underline {
    display: inline-block;
    position: relative;
  }
  .underline::after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    bottom: 0.05em;
    height: 0.32em;
    background: rgba(208, 132, 97, 0.45);
    z-index: -1;
    border-radius: 2px;
    transform: rotate(-0.6deg);
  }
`;

const Sub = styled.p`
  font-size: 19px;
  color: var(--ink-soft);
  margin: 24px 0 36px;
  max-width: 520px;
  line-height: 1.6;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
`;

const Meta = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 24px;
  align-items: center;
  color: var(--ink-faint);
  font-size: 14px;
`;

const Avatars = styled.div`
  display: flex;
  .av {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--paper);
    margin-left: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--serif);
    font-size: 14px;
    color: #fff;
  }
  .av:first-child { margin-left: 0; background: var(--terracotta); }
  .av:nth-child(2) { background: var(--ocean); }
  .av:nth-child(3) { background: var(--dusty-deep); }
  .av:nth-child(4) { background: var(--gold); }
`;

const Stars = styled.div`
  color: var(--gold);
  font-size: 13px;
  letter-spacing: 1px;
`;

const Art = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.05;
  max-width: 480px;
  margin: 0 auto;
  color: var(--terracotta-deep);
`;

const Card = styled.div<{ $variant?: 1 | 2 | 3 }>`
  position: absolute;
  background: var(--paper-white);
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(20, 40, 55, 0.05), 0 22px 48px -16px rgba(20, 40, 55, 0.22);
  padding: 28px 26px;
  border: 1px solid rgba(31, 53, 64, 0.05);
  ${({ $variant }) =>
    $variant === 1 &&
    `inset: 6% 14% 18% 0;
     transform: rotate(-4deg);
     background: linear-gradient(180deg, #FCF7E8 0%, #F4E7CB 100%);
     background-image:
       linear-gradient(to bottom, transparent 31px, rgba(31,53,64,.07) 31px, rgba(31,53,64,.07) 32px, transparent 32px),
       linear-gradient(180deg, #FCF7E8 0%, #F4E7CB 100%);
     background-size: 100% 32px, 100% 100%;
     background-position: 0 12px, 0 0;`}
  ${({ $variant }) =>
    $variant === 2 &&
    `inset: 14% 0 8% 16%;
     transform: rotate(3.5deg);`}
  ${({ $variant }) =>
    $variant === 3 &&
    `inset: 38% 28% 0 6%;
     transform: rotate(-2deg);
     background: linear-gradient(180deg, #FAEEE2 0%, #F4D9C0 100%);`}
`;

const CardDate = styled.div`
  font-family: var(--hand);
  font-size: 20px;
  color: var(--ink-faint);
  border-bottom: 1px solid rgba(31, 53, 64, 0.08);
  padding-bottom: 10px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Aff = styled.p`
  font-family: var(--serif);
  font-style: italic;
  font-size: 22px;
  line-height: 1.3;
  color: var(--ink);
  margin-bottom: 18px;
`;

const Qs = styled.div`
  counter-reset: q;
`;

const Q = styled.p`
  font-size: 14px;
  color: var(--ink-soft);
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  line-height: 1.45;
  &::before {
    counter-increment: q;
    content: counter(q);
    position: absolute;
    left: 0;
    top: 0;
    font-family: var(--hand);
    font-size: 18px;
    color: var(--terracotta-deep);
    font-weight: 600;
  }
`;

const Washi = styled.span<{ $variant?: 'peach' | 'lav' }>`
  position: absolute;
  width: 80px;
  height: 22px;
  background: ${({ $variant }) =>
    $variant === 'lav' ? 'rgba(143,168,180,.6)' : 'rgba(208,132,97,.6)'};
`;

export default function Hero() {
  return (
    <Header>
      <Wrap>
        <Grid>
          <Reveal>
            <Badge>
              <span className="pulse" />{c.badge}
            </Badge>
            <H1>
              {c.h1.line1} <span className="accent">{c.h1.accent}</span>
              <br />
              <span className="underline">{c.h1.underline}</span>
            </H1>
            <Sub>{c.sub}</Sub>
            <CtaRow>
              <BtnPrimary href="#plans">
                {c.ctaPrimary} <i className="fa-solid fa-arrow-right" />
              </BtnPrimary>
              <BtnGhost href="#how">{c.ctaGhost}</BtnGhost>
            </CtaRow>
            <Meta>
              <Avatars>
                <div className="av">A</div>
                <div className="av">M</div>
                <div className="av">K</div>
                <div className="av">Z</div>
              </Avatars>
              <div>
                <Stars>★★★★★</Stars>
                <div>{c.socialProof}</div>
              </div>
            </Meta>
          </Reveal>

          <Reveal>
            <Art>
              <PaintedSun
                style={{
                  position: 'absolute',
                  top: -50,
                  right: -30,
                  width: 180,
                  height: 180,
                  opacity: 0.7,
                  animation: 'drift 18s ease-in-out infinite',
                  pointerEvents: 'none',
                }}
              />

              <Card $variant={1}>
                <CardDate>
                  <span>{c.cards[0].date}</span>
                  <i className="fa-regular fa-sun" style={{ color: 'var(--terracotta-deep)' }} />
                </CardDate>
                <Aff>{c.cards[0].aff}</Aff>
                <Qs>
                  {c.cards[0].qs.map((q, i) => <Q key={i}>{q}</Q>)}
                </Qs>
              </Card>

              <Card $variant={2}>
                <Washi style={{ top: -8, left: 24, transform: 'rotate(-3deg)' }} />
                <CardDate>
                  <span>{c.cards[1].date}</span>
                  <span style={{ color: 'var(--ocean-deep)', fontFamily: 'var(--hand)' }}>
                    ~ Dearday
                  </span>
                </CardDate>
                <Aff>{c.cards[1].aff}</Aff>
                <Qs>
                  {c.cards[1].qs.map((q, i) => <Q key={i}>{q}</Q>)}
                </Qs>
              </Card>

              <Card $variant={3}>
                <Washi $variant="lav" style={{ top: -7, right: 18, transform: 'rotate(4deg)', width: 60 }} />
                <p
                  style={{
                    fontFamily: 'var(--hand)',
                    fontSize: 24,
                    color: 'var(--dusty-deep)',
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  {c.cards[2].note}
                </p>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18 }}>
                  {c.cards[2].noteDetail}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--hand)',
                    position: 'absolute',
                    bottom: 14,
                    right: 18,
                    color: 'var(--terracotta-deep)',
                    fontSize: 18,
                  }}
                >
                  {c.cards[2].signature}
                </p>
              </Card>

              <PaintedPalm
                style={{
                  position: 'absolute',
                  bottom: -40,
                  left: -50,
                  width: 160,
                  height: 160,
                  opacity: 0.55,
                  pointerEvents: 'none',
                }}
              />
            </Art>
          </Reveal>
        </Grid>
      </Wrap>
    </Header>
  );
}
