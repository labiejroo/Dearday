'use client';

import { useState } from 'react';
import { Wrap, Section, SectionHead, Eyebrow } from '../shared';
import { PaintedPalm } from '../Painted';
import { faq as copy } from '@/copy';
import { FaqBox, Item } from './styles';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" style={{ paddingTop: 60 }}>
      <PaintedPalm
        className="painted"
        style={{
          top: 30,
          right: -50,
          width: 240,
          height: 240,
          transform: 'rotate(35deg) scaleX(-1)',
          opacity: 0.28,
        }}
      />
      <Wrap>
        <SectionHead>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2>{copy.h2}</h2>
        </SectionHead>

        <FaqBox>
          {copy.items.map((it, i) => (
            <Item key={i} $open={open === i}>
              <button className="q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="icon">
                  <i className="fa-solid fa-plus" />
                </span>
              </button>
              <div className="a">
                <div className="a-inner">{it.a}</div>
              </div>
            </Item>
          ))}
        </FaqBox>
      </Wrap>
    </Section>
  );
}
