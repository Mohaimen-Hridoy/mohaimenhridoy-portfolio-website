import { getProjectById, projects } from './projects-data.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const project = getProjectById(id);
const root = document.getElementById('projectContent');

function linkOrPlaceholder(url, label) {
  if (url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">${label} &rarr;</a>`;
  }
  return `<span class="btn btn-outline btn-disabled" aria-disabled="true" title="Coming soon">${label} (coming soon)</span>`;
}

function render(p) {
  document.title = `${p.title} | Mohaimen Hridoy`;

  root.innerHTML = `
    <div class="detail-header reveal">
      <div class="project-icon detail-icon">${p.icon}</div>
      <div>
        <div class="section-label" style="margin-bottom:8px;">Project Detail</div>
        <h1 class="section-title" style="margin-bottom:0;">${p.title}</h1>
      </div>
    </div>

    <p class="detail-tagline reveal">${p.tagline}</p>

    <div class="detail-actions reveal">
      ${linkOrPlaceholder(p.liveLink, 'Live Project')}
      ${linkOrPlaceholder(p.githubLink, 'GitHub Repository')}
    </div>

    <div class="tech-stack detail-tech reveal">
      ${p.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
    </div>

    <div class="detail-grid">
      <div class="card detail-card reveal">
        <h3>Overview</h3>
        <p>${p.description}</p>
      </div>

      <div class="card detail-card reveal">
        <h3>Challenges Faced</h3>
        <ul>
          ${p.challenges.map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="card detail-card reveal">
        <h3>Future Improvements</h3>
        <ul>
          ${p.improvements.map((i) => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

function renderNotFound() {
  root.innerHTML = `
    <div class="detail-header reveal visible">
      <div>
        <h1 class="section-title">Project not found</h1>
        <p class="detail-tagline">This project link looks broken. Here are all available projects:</p>
        <ul style="margin-top:16px;">
          ${projects.map((p) => `<li><a href="/project-detail.html?id=${p.id}">${p.title}</a></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

if (project) {
  render(project);
} else {
  renderNotFound();
}
