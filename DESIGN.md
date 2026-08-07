---
name: Corpo Atelier
description: A gallery-like clinic experience for discovering Corpo's approach to movement.
colors:
  ink: "#17191a"
  bone: "#f3f0e7"
  paper: "#e8e4d9"
  cobalt: "#2945e8"
  cobalt-soft: "#b8c3ff"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3.5rem, 8vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.89
    letterSpacing: "-0.065em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.63rem"
    fontWeight: 400
    letterSpacing: "0.08em"
    textTransform: uppercase
rounded:
  none: "0px"
spacing:
  page: "8vw"
  section: "clamp(6rem, 12vw, 13rem)"
  row: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0 1.3rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 4vw"
---

# Design System: Corpo Atelier

## Overview

**Creative North Star: "The Movement Gallery"**

Corpo Atelier treats the clinic like a quiet gallery of movement rather than a standard medical landing page. Photography is framed as an object, services are catalogued as a sequence of works, and the visitor moves from the space to the method to the visit.

The world is precise without feeling cold: bone paper, ink, cobalt, editorial display type, and small inventory labels. The page uses flat surfaces and thin rules instead of decorative panels. Its signature is the cobalt information strip and the framed image with a slightly imperfect outer line.

**Key Characteristics:**
- Framed, object-like photography.
- Cobalt used as a single decisive signal.
- Service rows instead of a grid of cards.
- Display type paired with measured mono labels.

## Colors

The palette is a physical paper-and-ink room with one saturated blue signal that guides discovery and action.

### Primary
- **Cobalt Signal** (#2945e8): Navigation emphasis, section labels, the information strip, and the main visual signal.

### Secondary
- **Soft Cobalt** (#b8c3ff): Secondary emphasis on the dark and cobalt visit sections.

### Neutral
- **Ink** (#17191a): Primary text, dark practice section, and primary action surface.
- **Bone** (#f3f0e7): Main page ground and reversed text on dark surfaces.
- **Paper** (#e8e4d9): Alternating service surface for tonal separation.
- **Line** (rgba(23, 25, 26, 0.22)): Rules and inventory dividers.

**The Single Signal Rule.** Cobalt is the only saturated voice on a light section. It should guide the eye, not become decoration.

## Typography

**Display Font:** Bodoni Moda (with Georgia fallback)
**Body Font:** IBM Plex Sans (with sans-serif fallback)
**Label/Mono Font:** Azeret Mono (with monospace fallback)

**Character:** Bodoni Moda gives the clinic a composed, tactile editorial voice. IBM Plex Sans keeps practical information open and legible; Azeret Mono is reserved for coordinates, labels, and measured metadata.

### Hierarchy
- **Display** (400, clamp(3.5rem, 8vw, 8rem), 0.89): Opening and section statements.
- **Headline** (400, clamp(3.5rem, 6vw, 6.6rem), 0.89): Major section titles.
- **Title** (400, clamp(1.5rem, 2.5vw, 2.35rem), 1): Service row names.
- **Body** (400, 1rem, 1.5): Explanatory and contact copy, kept to readable measures.
- **Label** (400, 0.63rem, 0.08em tracking, uppercase): Navigation, inventory information, and metadata.

**The Two Voices Rule.** Display type carries the feeling; sans-serif carries the facts. Mono only marks information that behaves like a label or coordinate.

## Layout

The opening is a two-column gallery room: copy on the left, framed portrait photography on the right. Sections use a wide 8vw gutter, large vertical breathing room, and asymmetric content columns. The services section is a ruled catalogue of rows, not a repeated card grid.

At 800px and below, the gallery becomes a single reading column. The opening copy precedes the image, service descriptions move beneath their titles, and the contact details remain visible without horizontal scrolling.

## Elevation & Depth

The system is flat by default. Depth comes from the framed image, the slight outer-line rotation, tonal paper changes, and section color changes. Avoid shadows; the object treatment should feel printed and architectural rather than floating.

**The Flat Room Rule.** Do not add drop shadows or glass effects. If a section needs hierarchy, use space, a rule, or a change of material.

## Shapes

Edges are square and calm. Buttons, images, service rows, and information strips do not use rounded corners. The only irregularity is the slight rotation of the image's outer frame, which makes the photograph feel placed rather than rendered.

## Components

### Buttons
- **Shape:** Square, unrounded (0px).
- **Primary:** Ink background, bone text, mono uppercase label, 48px minimum height.
- **Hover / Focus:** Cobalt background on hover; retain a visible browser focus ring for keyboard users.
- **Secondary:** Underlined text link with a cobalt arrow.

### Cards / Containers
- **Corner Style:** No radius.
- **Background:** Bone, paper, ink, or cobalt full-width regions.
- **Shadow Strategy:** No shadows; depth is tonal and typographic.
- **Border:** 1px ink or white-alpha rules used as catalogue dividers.
- **Internal Padding:** Generous section padding; rows use approximately 1.5rem vertical padding.

### Navigation
- **Style:** 78px light bar with a bottom rule, editorial wordmark left, three text links centered, and a text action right. Links turn cobalt on hover. Mobile hides the secondary links while retaining the wordmark and action.

### Service Catalogue Row
- **Style:** Number, display title, description, and directional mark in one ruled row. Desktop hover reveals a small service image beside the title; mobile keeps the content static and removes the hover-only image.

## Do's and Don'ts

### Do:
- **Do** let one image or headline own each region.
- **Do** use cobalt to direct attention to the next meaningful action.
- **Do** keep the clinic's address and contact paths visible in the visit section.
- **Do** let service copy explain the difference between treatments in plain language.

### Don't:
- **Don't** turn the service catalogue into equal-size cards.
- **Don't** add invented testimonials, prices, patient counts, or clinical outcomes.
- **Don't** use rounded pills, gradients, glass panels, or decorative shadows in this world.
- **Don't** use mono type for ordinary paragraphs or display type for practical instructions.
