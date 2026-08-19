---
# ============================================================================
# GLOBAL SITE SETTINGS — ENGLISH VERSION
# Everything written below, down to the second --- line, controls the site
# header and footer. Edit the text to the right of each colon.
#
# logo: the logo file shown in the site header. The path is written from the
#       project root, for example assets/logo.png
#       Leave the value empty (just `logo:`) to remove the logo and show
#       only the FIL wordmark.
# logo_size: the height of the header logo (for example 2rem, 40px).
#       The width follows automatically. Remove the line to get 2rem.
# footer: whether the site footer is shown.
#       Write `footer: off`, or put a `#` after the colon (`footer: # on`),
#       to hide the footer completely.
# ============================================================================
brand: FIL
brand_full: Fluorescence Imaging Laboratory
logo: assets/logo.png
logo_size: 3rem
tagline: Kyiv Academic University & Kyiv Aviation Institute
home: about
cta_label: Connect
cta_link: mailto:fil@kau.edu.ua
email: fil@kau.edu.ua
phone:
address: Liubomyra Huzara Ave, 1К12, Kyiv, 02000
footer: on
copyright: © {year} FIL — Fluorescence Imaging Laboratory
partners_label: The laboratory is part of
partners_logo_size: 3rem
collaborators_label: Partner organisations
collaborators_logo_size: 3rem
---

<!-- MAIN MENU (top bar).
     Line format:  - [Menu label](section_folder)
     The order of the lines is the order of the menu items. -->

:::nav
- [Home](about)
- [Research](research)
- [Equipment & Services](facility)
- [Team](team)
- [Protocols](protocols)
<!-- - [Events](events)
- [Blog](blog) -->
:::

<!-- FOOTER MENU.
     An entry such as  legal:ethics  (with a colon) opens the legal page and
     scrolls to the <a id="ethics"></a> marker inside legal/content_en.md. -->

:::footer
<!-- - [Legal Documents](legal)
- [Research Ethics](legal:ethics)
- [Privacy Policy](legal:privacy)
- [Data Governance](legal:data) -->
- [Support Ukraine](support)
:::

<!-- LOGOS OF THE ORGANISATIONS THE LABORATORY IS PART OF.
     Every `###` is one organisation.
     url:          the organisation's website (clicking the logo opens it)
     image:        the logo file (the normal colour version, the way the
                   logo looks on white paper)
     size:         the height of this particular logo (for example 4rem).
                   Optional: without this line partners_logo_size applies.
                   Useful when one logo is a round mark and the other
                   is a wide wordmark.
     Put the logo files into the site/img/ folder.
     To remove this row of logos, delete the block or wrap it
     in comment lines. -->

:::partners
### Kyiv Academic University
url: https://kau.org.ua/
image: img/kau_logo.png
size: 6rem

### Kyiv Aviation Institute
url: https://nau.edu.ua/
image: img/kai_logo.png
size: 4.5rem
:::

<!-- ЛОГОТИПИ ОРГАНІЗАЦІЙ-ПАРТНЕРІВ / PARTNER ORGANISATION LOGOS.
     Другий рядок логотипів під першим. Той самий формат, інший відтінок тла.
     A second row of logos under the first one. Same format, different shade.
     Заповніть назви й приберіть рядки коментаря нижче.
     Fill in the names and remove the comment lines below to show the row. -->


:::collaborators
### Partner organisation name
url: https://example.org
image: img/partner-1.png
size: 3rem

### Another partner
url: https://example.org
image: img/partner-2.png
:::

