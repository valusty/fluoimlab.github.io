/* ==========================================================================
   FIL — script.js
   Sidebar, routing, language switching, theme toggle, Markdown rendering
   ========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Configuration
  // ---------------------------------------------------------------------------
  const SECTIONS = [
    {
      id: 'about',
      icon: '🏛',
      label: { uk: 'Про лабораторію', en: 'About' },
    },
    {
      id: 'equipment',
      icon: '🔬',
      label: { uk: 'Обладнання', en: 'Equipment' },
    },
    {
      id: 'services',
      icon: '🧪',
      label: { uk: 'Послуги', en: 'Services' },
    },
    {
      id: 'team',
      icon: '👥',
      label: { uk: 'Колектив', en: 'Team' },
    },
    {
      id: 'research',
      icon: '📄',
      label: { uk: 'Наукова робота', en: 'Research' },
    },
    {
      id: 'events',
      icon: '📅',
      label: { uk: 'Заходи', en: 'Events' },
    },
  ];

  const DEFAULT_SECTION = 'about';
  const DEFAULT_LANG = 'uk';
  const DEFAULT_THEME = 'dark';
  const STORAGE_KEY_LANG = 'fil-lang';
  const STORAGE_KEY_THEME = 'fil-theme';

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  let currentLang = localStorage.getItem(STORAGE_KEY_LANG) || DEFAULT_LANG;
  let currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || DEFAULT_THEME;
  let currentSection = null;

  // ---------------------------------------------------------------------------
  // DOM helpers
  // ---------------------------------------------------------------------------
  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  // ---------------------------------------------------------------------------
  // Build sidebar HTML
  // ---------------------------------------------------------------------------
  function buildSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'sidebar';

    // Header
    const header = document.createElement('div');
    header.className = 'sidebar-header';
    header.innerHTML = `
      <img src="assets/logo.png" alt="FIL Logo" class="sidebar-logo">
      <div class="sidebar-title">
        <span class="sidebar-title-name">FIL</span>
        <span class="sidebar-title-sub">Fluorescence Imaging Laboratory</span>
      </div>
    `;
    sidebar.appendChild(header);

    // Nav
    const nav = document.createElement('nav');
    nav.className = 'sidebar-nav';
    const ul = document.createElement('ul');

    SECTIONS.forEach((sec) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${sec.id}`;
      a.dataset.section = sec.id;
      a.innerHTML = `<span class="nav-icon">${sec.icon}</span><span class="nav-label">${sec.label[currentLang]}</span>`;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(sec.id);
        closeMobileMenu();
      });
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    sidebar.appendChild(nav);

    // Footer with language toggle + theme toggle
    const footer = document.createElement('div');
    footer.className = 'sidebar-footer';
    footer.innerHTML = `
      <span class="sidebar-footer-label">${currentLang === 'uk' ? 'Мова' : 'Language'}</span>
      <div class="toggle-group" id="lang-toggle">
        <button class="toggle-btn ${currentLang === 'uk' ? 'active' : ''}" data-lang="uk">UA</button>
        <button class="toggle-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      </div>
      <span class="sidebar-footer-label" style="margin-top: 0.25rem">${currentLang === 'uk' ? 'Тема' : 'Theme'}</span>
      <div class="toggle-group" id="theme-toggle">
        <button class="toggle-btn ${currentTheme === 'light' ? 'active' : ''}" data-theme="light">☀️</button>
        <button class="toggle-btn ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">🌙</button>
      </div>
    `;
    sidebar.appendChild(footer);

    // Language button events
    footer.querySelectorAll('#lang-toggle .toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    // Theme button events
    footer.querySelectorAll('#theme-toggle .toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
      });
    });

    return sidebar;
  }

  // ---------------------------------------------------------------------------
  // Build topbar (mobile)
  // ---------------------------------------------------------------------------
  function buildTopbar() {
    const topbar = document.createElement('header');
    topbar.className = 'topbar';
    topbar.id = 'topbar';
    topbar.innerHTML = `
      <span class="topbar-title">FIL</span>
      <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
    `;
    return topbar;
  }

  // ---------------------------------------------------------------------------
  // Build overlay
  // ---------------------------------------------------------------------------
  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebar-overlay';
    overlay.addEventListener('click', closeMobileMenu);
    return overlay;
  }

  // ---------------------------------------------------------------------------
  // Initialize DOM structure
  // ---------------------------------------------------------------------------
  function initDOM() {
    // Apply saved theme immediately
    document.documentElement.setAttribute('data-theme', currentTheme);

    const body = document.body;

    // Sidebar
    const sidebar = buildSidebar();
    body.prepend(sidebar);

    // Overlay
    body.appendChild(buildOverlay());

    // Main wrapper
    let main = $('.main');
    if (!main) {
      main = document.createElement('main');
      main.className = 'main';
      body.appendChild(main);
    }

    // Topbar (inside main, before content)
    const topbar = buildTopbar();
    main.prepend(topbar);

    // Content container
    let content = $('#content');
    if (!content) {
      content = document.createElement('div');
      content.className = 'content';
      content.id = 'content';
      main.appendChild(content);
    }

    // Footer
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.id = 'footer';
    footer.textContent = `© ${new Date().getFullYear()} FIL — Fluorescence Imaging Laboratory`;
    main.appendChild(footer);

    // Hamburger event
    $('#hamburger').addEventListener('click', toggleMobileMenu);
  }

  // ---------------------------------------------------------------------------
  // Mobile menu
  // ---------------------------------------------------------------------------
  function toggleMobileMenu() {
    const sidebar = $('#sidebar');
    const overlay = $('#sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  }

  function closeMobileMenu() {
    const sidebar = $('#sidebar');
    const overlay = $('#sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  function navigateTo(sectionId) {
    if (!SECTIONS.find((s) => s.id === sectionId)) {
      sectionId = DEFAULT_SECTION;
    }

    currentSection = sectionId;
    window.location.hash = sectionId;

    // Update active nav link
    document.querySelectorAll('.sidebar-nav a').forEach((a) => {
      a.classList.toggle('active', a.dataset.section === sectionId);
    });

    // Load content
    loadContent(sectionId, currentLang);
  }

  // ---------------------------------------------------------------------------
  // Load & render Markdown content
  // ---------------------------------------------------------------------------
  async function loadContent(sectionId, lang) {
    const content = $('#content');
    content.innerHTML = '<div class="content-loading">Loading…</div>';

    const url = `${sectionId}/content_${lang}.md`;

    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const md = await resp.text();
      content.innerHTML = marked.parse(md);
      updateImagePaths(content, sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(`Failed to load ${url}:`, err);
      content.innerHTML = `
        <h1>⚠️ Content Not Found</h1>
        <p>Could not load <code>${url}</code>.</p>
        <p>Please ensure the file exists in the repository.</p>
      `;
    }
  }

  // ---------------------------------------------------------------------------
  // Fix relative image paths in rendered content
  // ---------------------------------------------------------------------------
  function updateImagePaths(container, sectionId) {
    container.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith(sectionId + '/')) {
        img.src = `${sectionId}/${src}`;
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Language switching
  // ---------------------------------------------------------------------------
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY_LANG, lang);

    // Update toggle buttons
    document.querySelectorAll('#lang-toggle .toggle-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update nav labels
    document.querySelectorAll('.sidebar-nav a').forEach((a) => {
      const sec = SECTIONS.find((s) => s.id === a.dataset.section);
      if (sec) {
        a.querySelector('.nav-label').textContent = sec.label[lang];
      }
    });

    // Update footer labels
    const labels = document.querySelectorAll('.sidebar-footer-label');
    if (labels.length >= 2) {
      labels[0].textContent = lang === 'uk' ? 'Мова' : 'Language';
      labels[1].textContent = lang === 'uk' ? 'Тема' : 'Theme';
    }

    // Reload current section content
    if (currentSection) {
      loadContent(currentSection, lang);
    }
  }

  // ---------------------------------------------------------------------------
  // Theme switching
  // ---------------------------------------------------------------------------
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle buttons
    document.querySelectorAll('#theme-toggle .toggle-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  // ---------------------------------------------------------------------------
  // Hash-based routing
  // ---------------------------------------------------------------------------
  function handleHash() {
    const hash = window.location.hash.replace('#', '') || DEFAULT_SECTION;
    navigateTo(hash);
  }

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------
  function init() {
    initDOM();
    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
