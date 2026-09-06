---
eyebrow: Service
title: L-SPIM
subtitle: Volumetric imaging of large fixed samples.
hero_image: img/spim.jpg
hero_caption: Light sheet in FITC solution · FIL
---

:::note
This setup is currently under active development; technical specifications and instrument availability are subject to change. Please contact us for up-to-date information.
:::

:::figures
### L-SPIM v0 setup
image: img/spim_v0/l_spim_v0.jpg
source: https://github.com/fluoimlab/SPIM-Im
source_label: GitHub repo of the project
:::

## What is L-SPIM

The defining feature of selective-plane illumination microscopy (SPIM) is orthogonal planar illumination of the focal plane, the light sheet. Illuminating only a thin optical section at any given time substantially reduces photodamage and phototoxicity while providing intrinsic optical sectioning, which enhances the signal-to-noise ratio (SNR) relative to conventional widefield epifluorescence. In a typical horizontal configuration, the specimen is suspended vertically from above and translated through the light sheet via a motorized stage. 

For successful visualization of large or optically inhomogeneous samples, [optical clearing](facility/service-clearing) is a mandatory step in sample processing.

_Light-sheet systems generate substantial data streams — often reaching tens of Gb during continuous multi-channel acquisitions. Because these data volumes vastly exceed standard workstation RAM, basic visualization, processing, and downstream analysis present significant computational bottlenecks._

:::figures 2
### L-SPIM schematic
image: img/l_spim_schematic.png
source: https://doi.org/10.1038/nmeth.3222
source_label: Reynaud et al., 2014
ratio: 1/1

### Test sample in the L-SPIM imaging chamber
image: img/l_spim_v0_imaging_chamber.jpeg
source_label: FIL, 2026
ratio: 1/1
:::

## Setup parameters

| Parameter                                      | Value                                                        |
| ---------------------------------------------- | ------------------------------------------------------------ |
| Detection objective                            | Olympus PlaN 10x 0.25                                        |
| Magnification                                  | 5.56x                                                        |
| Camera                                         | 5320x3032 px (16.1 Mpx), Basler Ace 2R Pro (a2A5320-23umPRO) |
| Pixel size                                     | 0.493 μm/px                                                  |
| Field of view                                  | 2.62x1.49 mm                                                 |
| Maximum sample size                            | approx. 5x3x3 mm*                                            |                    
| Z-stack step resolution                        | 16 μstep/μm (0.0625 μm/μstep)                                |
| Lateral resolution, FWHM theoretical/estimated | 1.12 μm / __2.19 μm__                                        |
| Axial resolution, FWHM theoretical/estimated   | 11.70 μm / __3.56 μm__                                      |
| Excitation lasers                              | 510 nm, 640 nm                                               |
| Emission filters                               | Chroma HQ545/40m, Chroma D620/20m, 700/50m                   |

*Exact sample size limitation depends on geometry and optical properties of a specific sample. There are two available imaging chamber options: 10x10 mm thin wall quartz glass cuvette and 10x20 mm thick wall quartz glass cuvette.

## Image examples

:::figures
### Max intensity projection of the beads sample
image: img/spim_v0/pannel.png
source: https://opendata.nas.gov.ua/dataset.xhtml?persistentId=doi:10.48788/DVUA/Q8I551
source_label: Dataverse UA repository

Sample of the poorly homogenised 0.2 μm yellow-green fluorescence beads embedded in agarose, total sample volume approx. 3 mm³.

:::

## Resolution test

:::figures
### Resolution report of the L-SPIM v0 setup
image: img/spim_v0/spim_v0_report.png
source: https://opendata.nas.gov.ua/dataset.xhtml?persistentId=doi:10.48788/DVUA/Q8I551
source_label: Dataverse UA repository

Point spread function measured on sub-resolution beads, fitted along the
lateral and the axial axis.
:::

Code for PSF distillation and fitting is available in the [GitHub repo](https://github.com/wisstock/PSFDistiller.jl).
