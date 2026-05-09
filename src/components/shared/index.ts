'use client';

import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
`;

export const Section = styled.section`
  padding: 120px 0;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.media.md} {
    padding: 80px 0;
  }
`;

export const Eyebrow = styled.span`
  font-family: var(--hand);
  font-size: 24px;
  color: var(--ocean-deep);
  font-weight: 500;
`;

export const SectionHead = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 64px;
  ${Eyebrow} {
    display: block;
    margin-bottom: 8px;
  }
  p {
    color: var(--ink-soft);
    margin-top: 18px;
    font-size: 18px;
    text-wrap: balance;
  }
`;

const baseBtn = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 26px;
  border-radius: 999px;
  font-family: var(--sans);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.005em;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  white-space: nowrap;
`;

export const BtnPrimary = styled.a`
  ${baseBtn};
  background: var(--ink);
  color: var(--paper);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 22px -10px rgba(31, 53, 64, 0.6);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px var(--paper), 0 14px 30px -10px rgba(31, 53, 64, 0.7);
  }
`;

export const BtnGhost = styled.a`
  ${baseBtn};
  background: transparent;
  color: var(--ink);
  border: 1px solid rgba(31, 53, 64, 0.2);
  &:hover {
    background: rgba(31, 53, 64, 0.04);
    border-color: rgba(31, 53, 64, 0.32);
  }
`;

export const PaperCard = styled.article`
  background: var(--paper-white);
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid rgba(31, 53, 64, 0.06);
`;
