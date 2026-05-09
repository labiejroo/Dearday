'use client';

import styled from 'styled-components';
import Reveal from './Reveal';
import { Wrap, Section, SectionHead, Eyebrow } from './shared';
import { affirmations as c } from '@/copy';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  align-items: start;
  ${({ theme }) => theme.media.xl} {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const JCard = styled.article<{ $i: number }>`
  background: var(--paper-white);
  border-radius: 8px;
  padding: 32px 30px 36px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  border: 1px solid rgba(31, 53, 64, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-image: linear-gradient(
    to bottom,
    transparent 33px,
    rgba(125, 160, 174, 0.18) 33px,
    rgba(125, 160, 174, 0.18) 34px,
    transparent 34px
  );
  background-size: 100% 34px;
  background-position: 0 14px;
  ${({ $i }) =>
    $i === 0 &&
    `transform: rotate(-1.2deg);
     background:
       linear-gradient(to bottom, transparent 33px, rgba(125,160,174,.18) 33px, rgba(125,160,174,.18) 34px, transparent 34px) 0 14px / 100% 34px,
       linear-gradient(180deg, #FCF7E8, #F2E6C8);`}
  ${({ $i }) =>
    $i === 1 &&
    `transform: rotate(.8deg); margin-top: 24px;`}
  ${({ $i }) =>
    $i === 2 &&
    `transform: rotate(-.4deg);
     background:
       linear-gradient(to bottom, transparent 33px, rgba(125,160,174,.18) 33px, rgba(125,160,174,.18) 34px, transparent 34px) 0 14px / 100% 34px,
       linear-gradient(180deg, #EEF2F4, #D8DFE3);`}
  &:hover {
    transform: rotate(0) translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lift};
    z-index: 2;
  }
`;

const Washi = styled.span<{ $i: number }>`
  position: absolute;
  top: -12px;
  left: 50%;
  height: 24px;
  ${({ $i }) =>
    $i === 0 &&
    `transform: translateX(-50%) rotate(-2deg);
     width:120px;
     background: rgba(208,132,97,.55);
     border-left: 2px dashed rgba(184,98,59,.4);
     border-right: 2px dashed rgba(184,98,59,.4);`}
  ${({ $i }) =>
    $i === 1 &&
    `transform: translateX(-50%) rotate(2deg);
     width:140px;
     background: rgba(125,160,174,.5);`}
  ${({ $i }) =>
    $i === 2 &&
    `transform: translateX(-50%) rotate(-1.5deg);
     width:110px;
     background: rgba(143,168,180,.55);`}
`;

const Date = styled.div`
  font-family: var(--hand);
  color: var(--ink-faint);
  font-size: 22px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Aff = styled.p`
  font-family: var(--serif);
  font-style: italic;
  font-size: 24px;
  line-height: 1.3;
  color: var(--ink);
  margin-bottom: 24px;
  text-wrap: balance;
  &::before {
    content: '"';
    font-size: 48px;
    color: var(--terracotta-deep);
    line-height: 0;
    vertical-align: -12px;
    margin-right: 4px;
    opacity: 0.6;
  }
`;

const Qs = styled.ol<{ $i: number }>`
  counter-reset: q;
  list-style: none;
  border-top: 1px dashed rgba(31, 53, 64, 0.15);
  padding-top: 20px;
  li {
    padding: 10px 0 10px 32px;
    position: relative;
    font-size: 15px;
    line-height: 1.5;
    color: var(--ink-soft);
    border-bottom: 1px dotted rgba(31, 53, 64, 0.08);
  }
  li:last-child {
    border-bottom: none;
  }
  li::before {
    counter-increment: q;
    content: counter(q);
    position: absolute;
    left: 0;
    top: 10px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-family: var(--hand);
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $i }) =>
      $i === 0 ? 'rgba(208,132,97,.35)' : $i === 1 ? 'rgba(125,160,174,.3)' : 'rgba(143,168,180,.4)'};
    color: ${({ $i }) =>
      $i === 0 ? 'var(--terracotta-deep)' : $i === 1 ? 'var(--ocean-deep)' : 'var(--dusty-deep)'};
  }
`;

const Corner = styled.span`
  position: absolute;
  bottom: 14px;
  right: 18px;
  color: var(--ink-faint);
  font-family: var(--hand);
  font-size: 18px;
  opacity: 0.5;
`;


export default function Affirmations() {
  return (
    <Section id="examples" style={{ paddingTop: 60 }}>
      <Wrap>
        <Reveal>
          <SectionHead>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2>{c.h2}</h2>
            <p>{c.p}</p>
          </SectionHead>
        </Reveal>

        <Grid>
          {c.cards.map((d, i) => (
            <Reveal key={i}>
              <JCard $i={i}>
                <Washi $i={i} />
                <Date>
                  <span>{d.date}</span>
                  <span style={{ color: d.icon.color }}>
                    <i className={d.icon.c} />
                  </span>
                </Date>
                <Aff>{d.aff}</Aff>
                <Qs $i={i}>
                  {d.qs.map((q, j) => (
                    <li key={j}>{q}</li>
                  ))}
                </Qs>
                <Corner>{c.dayLabel} {d.day}</Corner>
              </JCard>
            </Reveal>
          ))}
        </Grid>
      </Wrap>
    </Section>
  );
}
