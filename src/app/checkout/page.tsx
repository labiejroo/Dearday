'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { PaintedSun } from '@/components/Painted';

const PUBLISHER_ID = '757730490';

const Outer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 28px 100px;
  position: relative;
  overflow: hidden;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  position: relative;
  z-index: 2;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink-soft);
  font-size: 15px;
  margin-bottom: 40px;
  transition: color 0.2s;
  &:hover {
    color: var(--ink);
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
  h1 {
    font-size: clamp(28px, 4vw, 42px);
    margin-bottom: 8px;
  }
  p {
    color: var(--ink-soft);
    font-size: 17px;
  }
`;

const Tagline = styled.div`
  font-family: var(--hand);
  font-size: 20px;
  color: var(--terracotta-deep);
  margin-bottom: 10px;
`;

function CheckoutWidget() {
  const params = useSearchParams();
  const offerId = params.get('offerId') ?? '';

  return (
    <div
      data-cleeng-offer-id={offerId}
      data-cleeng-publisher-id={PUBLISHER_ID}
      data-cleeng-widget="checkout"
    />
  );
}

export default function CheckoutPage() {
  return (
    <Outer>
      <PaintedSun
        style={{
          position: 'absolute',
          top: 40,
          right: -20,
          width: 200,
          height: 200,
          opacity: 0.3,
          color: 'var(--terracotta-deep)',
        }}
      />
      <Inner>
        <BackLink href="/#plans">
          <i className="fa-solid fa-arrow-left" /> Back to plans
        </BackLink>
        <Header>
          <Tagline>~ almost there ~</Tagline>
          <h1>
            Complete your <span style={{ fontStyle: 'italic', color: 'var(--terracotta-deep)' }}>order</span>
          </h1>
          <p>You're one step away from your daily practice.</p>
        </Header>
        <Suspense>
          <CheckoutWidget />
        </Suspense>
      </Inner>
    </Outer>
  );
}
