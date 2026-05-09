'use client';

import Reveal from '../Reveal';
import { Wrap, Section, Eyebrow } from '../shared';
import { delivery as copy } from '@/copy';
import { Grid, Channels, Channel, Preview, Phone, Bubble } from './styles';

export default function Delivery() {
  return (
    <Section id="delivery" style={{ paddingTop: 40 }}>
      <Wrap>
        <Grid>
          <Reveal>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2 style={{ marginTop: 8 }}>{copy.h2}</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: 18, fontSize: 17 }}>
              {copy.pBefore}{' '}
              <strong style={{ fontWeight: 600 }}>{copy.pHighlight}</strong>
              {copy.pAfter}
            </p>
            <Channels>
              {copy.channels.map((ch) => (
                <Channel key={ch.h4} $variant={ch.variant}>
                  <i className={ch.icon} />
                  <h4>{ch.h4}</h4>
                  <p>{ch.p}</p>
                </Channel>
              ))}
            </Channels>
            <p
              style={{
                marginTop: 24,
                color: 'var(--ink-faint)',
                fontFamily: 'var(--hand)',
                fontSize: 20,
              }}
            >
              {copy.switchNote}
            </p>
          </Reveal>

          <Reveal>
            <Preview>
              <Phone>
                <Bubble>
                  <div className="from">
                    <span>Dearday</span>
                    <span className="time">{copy.phone.bubble1.time}</span>
                  </div>
                  <p className="aff">{copy.phone.bubble1.aff}</p>
                  <ol>
                    {copy.phone.bubble1.qs.map((q, i) => <li key={i}>{q}</li>)}
                  </ol>
                </Bubble>
                <Bubble $alt>
                  <div className="from">
                    <span>Dearday</span>
                    <span className="time">{copy.phone.bubble2.time}</span>
                  </div>
                  <p className="aff" style={{ marginBottom: 0 }}>
                    {copy.phone.bubble2.aff}
                  </p>
                </Bubble>
              </Phone>
            </Preview>
          </Reveal>
        </Grid>
      </Wrap>
    </Section>
  );
}
