'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --paper: ${({ theme }) => theme.colors.paper};
    --paper-deep: ${({ theme }) => theme.colors.paperDeep};
    --paper-ruled: ${({ theme }) => theme.colors.paperRuled};
    --paper-white: ${({ theme }) => theme.colors.paperWhite};
    --ink: ${({ theme }) => theme.colors.ink};
    --ink-soft: ${({ theme }) => theme.colors.inkSoft};
    --ink-faint: ${({ theme }) => theme.colors.inkFaint};
    --ocean: ${({ theme }) => theme.colors.ocean};
    --ocean-deep: ${({ theme }) => theme.colors.oceanDeep};
    --terracotta: ${({ theme }) => theme.colors.terracotta};
    --terracotta-deep: ${({ theme }) => theme.colors.terracottaDeep};
    --dusty: ${({ theme }) => theme.colors.dusty};
    --dusty-deep: ${({ theme }) => theme.colors.dustyDeep};
    --gold: ${({ theme }) => theme.colors.gold};
    --serif: ${({ theme }) => theme.fonts.serif};
    --hand: ${({ theme }) => theme.fonts.hand};
    --sans: ${({ theme }) => theme.fonts.sans};
  }

  *{ box-sizing:border-box; margin:0; padding:0 }
  html{ scroll-behavior:smooth; overflow-x:hidden }
  body{
    font-family: var(--sans);
    font-weight:400;
    font-size:17px;
    line-height:1.65;
    color: var(--ink);
    background: var(--paper);
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
    background-image:
      radial-gradient(ellipse 800px 600px at 80% -10%, rgba(208,132,97,.18), transparent 60%),
      radial-gradient(ellipse 700px 500px at -10% 30%, rgba(125,160,174,.14), transparent 60%),
      radial-gradient(ellipse 900px 700px at 100% 80%, rgba(143,168,180,.14), transparent 60%);
  }
  body::before{
    content:""; position:fixed; inset:0;
    background-image: radial-gradient(circle at 20% 30%, rgba(31,53,64,.018) 1px, transparent 1.5px);
    background-size: 5px 5px;
    pointer-events:none;
    z-index:1;
    opacity:.5;
  }
  img{ max-width:100%; display:block }
  a{ color:inherit; text-decoration:none }
  button{ font:inherit; cursor:pointer; border:none; background:none; color:inherit }

  h1,h2,h3,h4{
    font-family: var(--serif);
    font-weight:500;
    letter-spacing:-.01em;
    line-height:1.15;
    color: var(--ink);
    text-wrap:balance;
  }
  h1{ font-size: clamp(44px, 6.4vw, 86px) }
  h2{ font-size: clamp(32px, 4.2vw, 52px) }
  h3{ font-size: clamp(22px, 2.4vw, 28px) }

  /* Reveal-on-scroll */
  .reveal{ opacity:0; transform:translateY(24px); transition: opacity .8s ease, transform .8s ease }
  .reveal.in{ opacity:1; transform:none }

  /* Painted decoration helpers */
  .painted{ position:absolute; pointer-events:none; user-select:none; mix-blend-mode:multiply }
  .painted svg{ width:100%; height:100%; display:block; overflow:visible }

  @keyframes drift {
    0%,100%{ transform: translate(0,0) rotate(0) }
    50%   { transform: translate(-6px, 4px) rotate(-2deg) }
  }
  @keyframes pulse {
    0%   { box-shadow: 0 0 0 0 rgba(44,90,107,.5) }
    70%  { box-shadow: 0 0 0 10px rgba(44,90,107,0) }
    100% { box-shadow: 0 0 0 0 rgba(44,90,107,0) }
  }
`;
