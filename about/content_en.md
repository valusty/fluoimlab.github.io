---
# ---------------------------------------------------------------------------
# HOME PAGE (English version)
#
# The block between the --- lines defines the page header:
#   eyebrow      — small label above the title
#   title        — main heading
#   subtitle     — text under the heading
#   hero_image   — large background image (a file inside about/img/)
#   hero_caption — caption under the image
# Delete the hero_image line to remove the large image.
# ---------------------------------------------------------------------------
eyebrow: Fluorescence Imaging Laboratory
title: Let's take a look together
subtitle: FIL is a hub for modern fluorescence microscopy - volumetric imaging and quantitative image analysis for fundamental and applied research.
hero_image: img/hero.png
hero_alt: Fluorescence microscopy composite image
hero_caption: Composite: Neurofilaments & NUCLEI in the rat sciatic nerve · confocal microscopy · Yu. Dobropolska (2020)
---

<!-- HEADLINE NUMBERS. Every `###` is a new number, the line below is its label. -->

<!-- :::metrics
### 15+
Imaging Modalities

### 24/7
Facility Access

### 50 nm
Lateral Resolution

### 6
Research Directions
::: -->

## Our Mission

FIL is a joint unit of the Department of Biomedicine and Neurosciences of the Kyiv Academic University and Department of Biotechnology of the Kyiv Aviation Institute and specializes in the development and application of modern methods
fluorescence microscopy for the study of biological systems. We combine
advanced visualization technologies with modern approaches to image analysis,
to answer fundamental and applied scientific questions.

The laboratory operates as an open resource: we provide instrument access,
methodological support and training for researchers from other institutions.

<!-- CARDS. Every `###` starts a new card.
     Lines such as `tag:` and `image:` are card properties (see README). -->

<!-- :::cards
### Fluorescence Microscopy
tag: Imaging
image: img/facility.svg

Confocal, widefield and epi-fluorescence microscopy of fixed and living
samples, multi-channel acquisition and z-stacks.

### Image Analysis
tag: Computation

Development and application of software for processing, segmentation and
quantitative analysis of microscopy images.

### Calcium Imaging
tag: Physiology

Investigation of intracellular calcium dynamics using chemical and genetically
encoded sensors.

### Spectral Analysis
tag: Methods

Spectral deconvolution and linear unmixing for separating overlapping
fluorophores.
::: -->

<!-- A MOSAIC OF IMAGES across the full page width.
     span:  how many of the 12 columns the image takes
            (12 = full width, 6 = half, 4 = a third, 3 = a quarter)
     ratio: the proportions, for example 3/2, 1/1, 16/9
     Put the files into the about/img/ folder and remove the comment lines. -->

:::static-gallery
### Optical table of the laboratory
image: img/mosaic-1.svg
span: 5
ratio: 4/3

### Aligning the system
image: img/mosaic-2.svg
span: 3
ratio: 3/4

### Live-cell acquisition
image: img/mosaic-3.svg
span: 4
ratio: 4/3

### General view of the room
image: img/mosaic-4.svg
span: 7
ratio: 16/9

### Acquisition indicator
image: img/mosaic-5.svg
span: 5
ratio: 16/9
:::

## Contact

:::contact

### Email
url: mailto:fil@kau.edu.ua
fil@kau.edu.ua

### GitHub
url: https://github.com/fluoimlab
github.com/fluoimlab
:::

:::note
For collaboration, instrument access or additional information, please contact
us using the details above.
:::
