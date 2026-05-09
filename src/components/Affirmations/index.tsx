'use client';

import Reveal from '../Reveal';
import { Wrap, Section, SectionHead, Eyebrow } from '../shared';
import { affirmations as copy } from '@/copy';
import { Grid, JCard, Washi, DateLabel, Aff, Qs, Corner } from './styles';

export default function Affirmations() {
  return (
    <Section id="examples" style={{ paddingTop: 60 }}>
      <Wrap>
        <Reveal>
          <SectionHead>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2>{copy.h2}</h2>
            <p>{copy.p}</p>
          </SectionHead>
        </Reveal>

        <Grid>
          {copy.cards.map((d, i) => (
            <Reveal key={i}>
              <JCard $i={i}>
                <Washi $i={i} />
                <DateLabel>
                  <span>{d.date}</span>
                  <span style={{ color: d.icon.color }}>
                    <i className={d.icon.c} />
                  </span>
                </DateLabel>
                <Aff>{d.aff}</Aff>
                <Qs $i={i}>
                  {d.qs.map((q, j) => (
                    <li key={j}>{q}</li>
                  ))}
                </Qs>
                <Corner>{copy.dayLabel} {d.day}</Corner>
              </JCard>
            </Reveal>
          ))}
        </Grid>
      </Wrap>
    </Section>
  );
}
