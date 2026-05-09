'use client';

import Reveal from '../Reveal';
import { Wrap, BtnPrimary, BtnGhost } from '../shared';
import { PaintedSun, PaintedPalm } from '../Painted';
import { hero as copy } from '@/copy';
import { Header, Grid, Badge, H1, Sub, CtaRow, Meta, Avatars, Stars, Art, Card, CardDate, Aff, Qs, Q, Washi } from './styles';

export default function Hero() {
  return (
    <Header>
      <Wrap>
        <Grid>
          <Reveal>
            <Badge>
              <span className="pulse" />{copy.badge}
            </Badge>
            <H1>
              {copy.h1.line1} <span className="accent">{copy.h1.accent}</span>
              <br />
              <span className="underline">{copy.h1.underline}</span>
            </H1>
            <Sub>{copy.sub}</Sub>
            <CtaRow>
              <BtnPrimary href="#plans">
                {copy.ctaPrimary} <i className="fa-solid fa-arrow-right" />
              </BtnPrimary>
              <BtnGhost href="#how">{copy.ctaGhost}</BtnGhost>
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
                <div>{copy.socialProof}</div>
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
                  <span>{copy.cards[0].date}</span>
                  <i className="fa-regular fa-sun" style={{ color: 'var(--terracotta-deep)' }} />
                </CardDate>
                <Aff>{copy.cards[0].aff}</Aff>
                <Qs>
                  {copy.cards[0].qs.map((q, i) => <Q key={i}>{q}</Q>)}
                </Qs>
              </Card>

              <Card $variant={2}>
                <Washi style={{ top: -8, left: 24, transform: 'rotate(-3deg)' }} />
                <CardDate>
                  <span>{copy.cards[1].date}</span>
                  <span style={{ color: 'var(--ocean-deep)', fontFamily: 'var(--hand)' }}>
                    ~ Dearday
                  </span>
                </CardDate>
                <Aff>{copy.cards[1].aff}</Aff>
                <Qs>
                  {copy.cards[1].qs.map((q, i) => <Q key={i}>{q}</Q>)}
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
                  {copy.cards[2].note}
                </p>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18 }}>
                  {copy.cards[2].noteDetail}
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
                  {copy.cards[2].signature}
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
