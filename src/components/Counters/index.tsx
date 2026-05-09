'use client';

import { useEffect, useRef, useState } from 'react';
import { counters as counterItems } from '@/copy';
import { Wrap, Grid, Counter, Num, Label } from './styles';

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
