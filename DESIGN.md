---
name: GENESIS+
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#4a4453'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#7b7485'
  outline-variant: '#ccc3d6'
  surface-tint: '#713dcc'
  primary: '#420093'
  on-primary: '#ffffff'
  primary-container: '#5b21b6'
  on-primary-container: '#c7aaff'
  inverse-primary: '#d3bbff'
  secondary: '#6f5092'
  on-secondary: '#ffffff'
  secondary-container: '#d9b5ff'
  on-secondary-container: '#614283'
  tertiary: '#363041'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d4658'
  on-tertiary-container: '#beb5ca'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250059'
  on-primary-fixed-variant: '#581db3'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dbb8ff'
  on-secondary-fixed: '#29074a'
  on-secondary-fixed-variant: '#573878'
  tertiary-fixed: '#e9def5'
  tertiary-fixed-dim: '#cdc2d9'
  on-tertiary-fixed: '#1e1929'
  on-tertiary-fixed-variant: '#4a4456'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.8rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.0rem
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.4rem
    fontWeight: '500'
    lineHeight: '1.4'
  body:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.85rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 5rem
---

## Brand & Style

The design system is centered on **Empathetic Professionalism**. It serves as a digital sanctuary for social and psychological intervention, prioritizing a "stigma-free" user experience. The brand personality is calm, private, and restorative.

The visual direction follows a **Soft-Edge Modernism** approach. This style combines the cleanliness of high-end SaaS with the warmth of wellness applications. By utilizing generous whitespace, soft lilac accents, and substantial rounded corners, the interface reduces cognitive load and fosters a sense of security and approachability for users in vulnerable states.

## Colors

The palette is designed to be soothing yet authoritative. 
- **Deep Purple (#5B21B6)** functions as the anchor, providing a sense of stability and professional "gravity" for critical actions and brand markers.
- **Classic Lilac (#D8B4FE)** and **Soft Pastel Lilac (#F3E8FF)** create a layered, monochromatic depth that feels more inviting than standard grays. 
- **Pure White** and **Off-White** are used aggressively to maintain a spacious, "breathable" layout, essential for psychological clarity.

## Typography

**Plus Jakarta Sans** is the sole typeface for this design system. Its soft, rounded geometric terminals echo the "Soft-Edge" brand philosophy. 

- **Headlines:** Use tight letter-spacing for H1s to maintain a modern, "compact" editorial feel.
- **Body:** A generous 1.6 line height is mandated for all long-form reading to ensure high legibility and a relaxed reading pace.
- **Captions:** Used for secondary metadata and micro-copy, providing clear hierarchy without overwhelming the primary content.

## Layout & Spacing

This design system utilizes a **Fluid-Fixed Hybrid** grid. 
- **Desktop:** A 12-column grid with a maximum content width of 1280px. Margins are generous (5rem) to create the "safe space" effect.
- **Mobile:** A 4-column grid with 16px margins.
- **Spacing Logic:** All spacing is based on a 4px (0.25rem) baseline. Use larger increments (lg, xl) for section breaks to emphasize the spacious, calm aesthetic. Content should never feel "cramped"; when in doubt, increase the vertical padding.

## Elevation & Depth

Hierarchy is established through **Tonal Elevation** and **Indigo-Tinted Shadows**. 

Instead of traditional neutral shadows, this design system uses a subtle purple bias in its depth effects. Shadows are extremely soft and diffused:
- **Base Shadow:** `0 4px 6px -1px rgba(91, 33, 182, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`
- **Hover/Active Shadow:** Slightly more spread with a 0.08 opacity on the purple tint.

Surfaces use the "Subtle Background" (#F9FAFB) to define secondary containers, while "Pure White" is reserved for the highest-level cards and interactive elements.

## Shapes

The shape language is consistently rounded to remove "sharp edges" that can feel aggressive or clinical.
- **Container Elements:** Cards, modals, and large panels must use a **16px** (rounded-lg) radius.
- **Interactive Elements:** Buttons, inputs, and chips use an **8px** radius to maintain a distinct but cohesive feel.
- **Avatars/Icons:** Use full circles (pill-shaped) to represent human elements and active status indicators.

## Components

### Buttons & Inputs
- **Primary Button:** Solid #5B21B6 with white text. 8px radius.
- **Secondary Button:** Solid #F3E8FF with #5B21B6 text. No border.
- **Inputs:** #F9FAFB background with a subtle 1px border in #D8B4FE. Focus state uses a 2px #5B21B6 ring.

### Cards & Containers
- **Information Cards:** White background, 16px radius, with the indigo-tinted shadow.
- **Mood Trackers/Chips:** Use #F3E8FF as the background for selected states and #F9FAFB for unselected.

### Chat & Messaging
- **User Bubbles:** Solid #5B21B6 with white text; bottom-right corner slightly less rounded (4px) to indicate direction.
- **System/Support Bubbles:** Solid #F3E8FF with #1F2937 text; bottom-left corner slightly less rounded.

### Specialized Components
- **Privacy Shield:** A specialized icon/label combo using #5B21B6 to reassure users that the current section is encrypted and private.