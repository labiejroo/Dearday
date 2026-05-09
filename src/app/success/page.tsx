'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { PaintedSun, PaintedPalm } from '@/components/Painted';
import { success as copy } from '@/copy';

const Outer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 28px;
  position: relative;
`;

const Card = styled.div`
  background: var(--paper-white);
  border-radius: 22px;
  padding: 64px 48px;
  max-width: 560px;
  width: 100%;
  text-align: center;
  box-shadow: 0 22px 48px -16px rgba(20, 40, 55, 0.22);
  border: 1px solid rgba(31, 53, 64, 0.06);
  position: relative;
  z-index: 2;
  h1 {
    font-size: clamp(36px, 5vw, 56px);
    margin-bottom: 14px;
  }
  p {
    color: var(--ink-soft);
    font-size: 17px;
    line-height: 1.6;
    margin-bottom: 32px;
    text-wrap: balance;
  }
  .hand {
    font-family: var(--hand);
    font-size: 28px;
    color: var(--terracotta-deep);
    margin: 24px 0 8px;
  }
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--ink);
  color: rgb(242, 243, 244);
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

export default function SukcesPage() {
  return (
    <Outer>
      <PaintedSun
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          width: 180,
          height: 180,
          opacity: 0.45,
          color: 'var(--terracotta-deep)',
        }}
      />
      <PaintedPalm
        style={{
          position: 'absolute',
          bottom: 40,
          left: 40,
          width: 200,
          height: 200,
          opacity: 0.35,
          transform: 'rotate(-15deg)',
        }}
      />
      <Card>
        <p className="hand">{copy.tagline}</p>
        <h1>
          {copy.h1Before} <span style={{ fontStyle: 'italic', color: 'var(--terracotta-deep)' }}>{copy.h1Accent}</span>
        </h1>
        <p>{copy.p1}</p>
        <p style={{ fontSize: 15 }}>{copy.p2}</p>
        <Back href="/">
          <i className="fa-solid fa-arrow-left" /> {copy.back}
        </Back>
      </Card>
    </Outer>
  );
}
