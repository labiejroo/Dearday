'use client';

import Reveal from '../Reveal';
import { Wrap, SectionHead, Eyebrow } from '../shared';
import { plans as copy } from '@/copy';
import { Outer, Grid, Card, Tag, Name, Desc, Price, Billed, Savings, Features, CtaPrimary, CtaGhost } from './styles';

export default function Plans() {
  return (
    <Outer id="plans">
      <Wrap>
        <Reveal>
          <SectionHead>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2>{copy.h2}</h2>
            <p>{copy.p}</p>
          </SectionHead>
        </Reveal>

        <Grid>
          {copy.items.map((p, i) => (
            <Reveal key={i}>
              <Card $featured={p.featured}>
                {p.tag && <Tag $variant={p.tagVariant}>{p.tag}</Tag>}
                <Name>{p.name}</Name>
                <Desc>{p.desc}</Desc>
                <Price>
                  <span className="amount">{p.price}</span>
                  <span className="period">{p.period}</span>
                </Price>
                <Billed>…that's {p.daily}</Billed>
                {p.savings && <Savings>{p.savings}</Savings>}
                <Features>
                  {p.features.map((f, j) => (
                    <li key={j}>
                      <i className="fa-solid fa-check" /> {f}
                    </li>
                  ))}
                </Features>
                {p.featured ? (
                  <CtaPrimary href={`/checkout?offerId=${p.offerId}`}>Choose {p.name}</CtaPrimary>
                ) : (
                  <CtaGhost href={`/checkout?offerId=${p.offerId}`}>Choose {p.name}</CtaGhost>
                )}
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Wrap>
    </Outer>
  );
}
