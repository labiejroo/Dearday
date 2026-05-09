'use client';

import Reveal from '../Reveal';
import { Wrap, Section, SectionHead, Eyebrow } from '../shared';
import { PaintedPalm } from '../Painted';
import { howItWorks as copy } from '@/copy';
import { Steps, Step } from './styles';

export default function HowItWorks() {
  return (
    <Section id="how">
      <PaintedPalm
        className="painted"
        style={{
          top: 60,
          left: -60,
          width: 240,
          height: 240,
          transform: 'rotate(-15deg)',
          opacity: 0.28,
        }}
      />
      <Wrap>
        <Reveal>
          <SectionHead>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2>{copy.h2}</h2>
            <p>{copy.p}</p>
          </SectionHead>
        </Reveal>

        <Steps>
          {copy.steps.map((s, i) => (
            <Reveal key={i}>
              <Step $i={i}>
                <div className="icon">
                  <i className={s.icon} />
                </div>
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i < 2 && <span className="arrow">~~&gt;</span>}
              </Step>
            </Reveal>
          ))}
        </Steps>
      </Wrap>
    </Section>
  );
}
