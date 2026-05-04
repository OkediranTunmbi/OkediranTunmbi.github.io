/* ============================================================
   MAIN.JS  —  Renders content.js into the DOM
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderProjects();
  renderResults();
  renderPhilosophy();
  renderStack();
  renderContact();
  renderFooter();
  initNav();
  initScrollReveal();
  initRoleRotator();
});

/* ── Icons (inline SVG) ──────────────────────────────────── */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

/* ── Nav ─────────────────────────────────────────────────── */
function renderNav() {
  const { logo, links } = CONTENT.nav;
  document.getElementById('nav-logo').textContent = logo;
  const ul = document.getElementById('nav-links');
  links.forEach(l => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${l.href}">${l.label}</a>`;
    ul.appendChild(li);
  });
}

function initNav() {
  const navbar  = document.getElementById('navbar');
  const toggle  = document.getElementById('nav-toggle');
  const linksEl = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = linksEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  linksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => linksEl.classList.remove('open'));
  });
}

/* ── Hero ─────────────────────────────────────────────────── */
function renderHero() {
  const h = CONTENT.hero;

  document.getElementById('hero-greeting').textContent = h.greeting;
  document.getElementById('hero-name').innerHTML =
    h.name.replace('Tunmbi', '<em>Tunmbi</em>');
  document.getElementById('hero-tagline').textContent = h.tagline;

  const rolesEl = document.getElementById('hero-roles');
  h.roles.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'hero-role';
    div.setAttribute('data-role-index', i);
    div.textContent = r;
    rolesEl.appendChild(div);
  });

  const ctasEl = document.getElementById('hero-ctas');
  h.cta.forEach(c => {
    const a = document.createElement('a');
    a.href = c.href;
    a.className = `btn ${c.primary ? 'btn-primary' : 'btn-outline'}`;
    a.innerHTML = `${c.label} ${c.primary ? ICONS.arrowRight : ''}`;
    ctasEl.appendChild(a);
  });

  const img = document.getElementById('hero-photo');
  img.src = h.photo;
  img.alt = h.photoAlt;
}

function initRoleRotator() {
  // Subtle fade-in stagger on roles
  const roles = document.querySelectorAll('.hero-role');
  roles.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-12px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
}

/* ── About ───────────────────────────────────────────────── */
function renderAbout() {
  const a = CONTENT.about;
  document.getElementById('about-heading').textContent = a.heading;

  const bioEl = document.getElementById('about-bio');
  a.bio.forEach(para => {
    const p = document.createElement('p');
    p.textContent = para;
    bioEl.appendChild(p);
  });

  const statsEl = document.getElementById('about-stats');
  a.highlights.forEach(h => {
    statsEl.innerHTML += `
      <div class="stat-card reveal">
        <div class="stat-value">${h.value}</div>
        <div class="stat-label">${h.label}</div>
      </div>`;
  });
}

/* ── Projects ────────────────────────────────────────────── */
function renderProjects() {
  const p = CONTENT.projects;
  document.getElementById('projects-heading').textContent = p.heading;
  document.getElementById('projects-sub').textContent = p.subheading;

  const grid = document.getElementById('projects-grid');
  p.items.forEach(proj => {
    const metricsHtml = proj.metrics.map(m => `
      <div class="metric-pill">
        <span class="metric-value">${m.value}</span>
        <span class="metric-label">${m.label}</span>
      </div>`).join('');

    const tagsHtml = proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

    const honestHtml = proj.honestNote ? `
      <div class="honest-note">
        <strong>Honest result</strong>
        ${proj.honestNote}
      </div>` : '';

    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <span class="card-tag">${proj.tag}</span>
      <div>
        <h3 class="card-title">${proj.title}</h3>
        <p class="card-subtitle">${proj.subtitle}</p>
      </div>
      <p class="card-desc">${proj.description}</p>
      ${honestHtml}
      <div class="card-metrics">${metricsHtml}</div>
      <div class="card-tags">${tagsHtml}</div>
      <div class="card-footer">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="github-link">
          ${ICONS.github} View on GitHub ${ICONS.external}
        </a>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Results ─────────────────────────────────────────────── */
function renderResults() {
  const r = CONTENT.results;
  document.getElementById('results-heading').textContent = r.heading;
  document.getElementById('results-sub').textContent = r.subheading;

  const container = document.getElementById('results-tables');
  r.tables.forEach(t => {
    const headRow = t.columns.map(c => `<th>${c}</th>`).join('');
    const bodyRows = t.rows.map((row, i) => {
      const cls = (t.best !== null && i === t.best) ? 'row-best' : '';
      const cells = row.map(cell => `<td>${cell}</td>`).join('');
      return `<tr class="${cls}">${cells}</tr>`;
    }).join('');

    const noteHtml = t.honestNote ? `
      <div class="result-note">
        <strong style="display:block;margin-bottom:.3rem;font-family:var(--font-mono);font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--clr-stone)">Honest interpretation</strong>
        ${t.honestNote}
      </div>` : '';

    const block = document.createElement('div');
    block.className = 'result-block reveal';
    block.innerHTML = `
      <h3 class="result-block-title">${t.title}</h3>
      <div class="table-wrap">
        <table>
          <thead><tr>${headRow}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
      ${noteHtml}`;
    container.appendChild(block);
  });
}

/* ── Philosophy ──────────────────────────────────────────── */
function renderPhilosophy() {
  const p = CONTENT.philosophy;
  document.getElementById('philosophy-heading').textContent = p.heading;
  document.getElementById('philosophy-sub').textContent = p.subheading;

  const grid = document.getElementById('philosophy-grid');
  p.points.forEach(pt => {
    const card = document.createElement('div');
    card.className = 'philosophy-card reveal';
    card.innerHTML = `
      <span class="philosophy-icon" aria-hidden="true">${pt.icon}</span>
      <h3 class="philosophy-title">${pt.title}</h3>
      <p class="philosophy-body">${pt.body}</p>`;
    grid.appendChild(card);
  });
}

/* ── Stack ───────────────────────────────────────────────── */
function renderStack() {
  const s = CONTENT.stack;
  document.getElementById('stack-heading').textContent = s.heading;

  const grid = document.getElementById('stack-grid');
  s.categories.forEach(cat => {
    const items = cat.items.map(i => `<div class="stack-item">${i}</div>`).join('');
    const el = document.createElement('div');
    el.className = 'stack-category reveal';
    el.innerHTML = `<span class="stack-cat-label">${cat.label}</span><div class="stack-items">${items}</div>`;
    grid.appendChild(el);
  });
}

/* ── Contact ─────────────────────────────────────────────── */
function renderContact() {
  const c = CONTENT.contact;
  document.getElementById('contact-heading').textContent = c.heading;
  document.getElementById('contact-sub').textContent = c.subheading;

  const links = document.getElementById('contact-links');
  links.innerHTML = `
    <a href="mailto:${c.email}" class="contact-link">
      ${ICONS.email} ${c.email}
    </a>
    <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
      ${ICONS.linkedin} LinkedIn
    </a>
    <a href="${c.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
      ${ICONS.github} GitHub
    </a>`;

  document.getElementById('contact-note').textContent = c.repoNote;
}

/* ── Footer ──────────────────────────────────────────────── */
function renderFooter() {
  const f = CONTENT.footer;
  document.getElementById('footer-name').textContent = f.name;
  document.getElementById('footer-note').textContent = f.note;
  document.getElementById('footer-year').textContent = `© ${f.year}`;
}

/* ── Scroll reveal ───────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe existing .reveal elements; re-run after dynamic content renders
  const observeAll = () =>
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));

  observeAll();
  // Give dynamic content a moment to render
  setTimeout(observeAll, 100);
}
