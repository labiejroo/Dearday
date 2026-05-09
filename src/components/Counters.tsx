'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { counters as counterItems } from '@/copy';

const Wrap = styled.div`
  padding: 40px 28px 30px;
  border-top: 1px solid rgba(31, 53, 64, 0.08);
  border-bottom: 1px solid rgba(31, 53, 64, 0.08);
  margin: 0 auto;
  max-width: 1180px;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Counter = styled.div`
  &:not(:last-child) {
    border-right: 1px dashed rgba(31, 53, 64, 0.14);
  }
  ${({ theme }) => theme.media.sm} {
    &:not(:last-child) {
      border-right: none;
      border-bottom: 1px dashed rgba(31, 53, 64, 0.14);
      padding-bottom: 24px;
    }
  }
`;

const Num = styled.div`
  font-family: var(--serif);
  font-size: clamp(36px, 4.2vw, 54px);
  color: var(--ink);
  line-height: 1;
  .unit {
    font-family: var(--hand);
    color: var(--terracotta-deep);
    font-size: 0.7em;
    margin-left: 4px;
  }
`;

const Label = styled.div`
  font-size: 13.5px;
  color: var(--ink-faint);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 10px;
`;

type Item = { target: number; unit: string; label: string };

const items: Item[] = counterItems;

function formatNum(n: number, target: number) {
  if (target >= 1000) return Math.floor(n).toLocaleString('en-US');
  return Math.floor(n).toString();
}

function CounterBlock({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const duration = 1600;
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(item.target * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(item.target);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [item.target]);

  return (
    <Counter ref={ref}>
      <Num>
        {formatNum(value, item.target)}
        <span className="unit">{item.unit}</span>
      </Num>
      <Label>{item.label}</Label>
    </Counter>
  );
}

export default function Counters() {
  return (
    <Wrap className="reveal in">
      <Grid>
        {items.map((it, i) => (
          <CounterBlock key={i} item={it} />
        ))}
      </Grid>
    </Wrap>
  );
}
