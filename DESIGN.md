---
name: FIL
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bdc9c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#879392'
  outline-variant: '#3e4949'
  surface-tint: '#79d5d5'
  primary: '#79d5d5'
  on-primary: '#003737'
  primary-container: '#0c7f7f'
  on-primary-container: '#ddfffe'
  inverse-primary: '#006a6a'
  secondary: '#92da4e'
  on-secondary: '#1b3700'
  secondary-container: '#5fa116'
  on-secondary-container: '#173000'
  tertiary: '#ffaaf4'
  on-tertiary: '#5b005c'
  tertiary-container: '#b63fb3'
  on-tertiary-container: '#fff6f9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#96f2f1'
  primary-fixed-dim: '#79d5d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#adf767'
  secondary-fixed-dim: '#92da4e'
  on-secondary-fixed: '#0e2000'
  on-secondary-fixed-variant: '#2a5000'
  tertiary-fixed: '#ffd7f6'
  tertiary-fixed-dim: '#ffaaf4'
  on-tertiary-fixed: '#380038'
  on-tertiary-fixed-variant: '#810082'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: IBM Plex Serif
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: IBM Plex Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Karla
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Karla
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-page: clamp(1.5rem, 5vw, 4rem)
  gutter: 1.5rem
  section-gap: 8rem
  component-padding: 1rem
---
## Brand & Style
This design system is engineered for high-end research environments and scientific documentation. It evokes a sense of "Deep Discovery" through a high-contrast, dark-mode aesthetic that prioritizes clarity, precision, and immersive visual storytelling.

The style is **Scientific Minimalism**—a blend of structural rigor and modern digital patterns. It utilizes expansive "darkspace," sharp boundaries, and a "Glass-on-Black" layering technique. The emotional response is one of authority and curiosity, mirroring the experience of looking through a microscope into the unknown.

## Colors
The palette is anchored in a three-tier dark architecture. The primary background is a rich, near-black (`#131313`).
- **Primary (`#0C7F7F`)**: Deep teal for "Observation." Used for interaction, active states, and highlights.
- **Secondary (`#6CB027`)**: Biological green for "Growth/Discovery." Used for success states and accents.
- **Neutral Elements (`#1A1A1A`)**: For secondary UI components like code blocks or sidebar backgrounds.

## Typography
Balances **Academic Rigor** with **Modern Legibility**. 
- **IBM Plex Serif** (Display): Sophisticated and scholarly weight for headings and navigation.
- **Karla** (Body): Improved reading speed for long-form scientific papers.
- **Inter** (Technical): For labels, metadata, and technical specs.

## Layout & Spacing
- **Fluid Grid**: Vertical rhythm with generous 8rem section gaps.
- **The 12-Column Grid**: Content constrained to 1200px max-width.
- **Elevation**: Tonal stacking rather than shadows. Floor (`#131313`) -> Surface (`#20201F`) -> Overlay (Glassmorphism).

## Components
- **Buttons**: Ghost-style with 1px border of `#0C7F7F` and `Inter` uppercase text.
- **Cards**: Background-less with 1px border of `#3E4949`, shifting to Primary on hover.
- **Data Tables**: Striped with `label-caps` headers for a "spec sheet" appearance.
