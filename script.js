import { projects } from './projects.js';

const projectsSection = document.querySelector('#projects-section');

projects.forEach(({ name, description, url, fontAwesome }) => {
  const div = document.createElement('div');
  div.innerHTML = `<a href="${url}"><i class="${fontAwesome}"></i></a>
    <h2><a href="${url}">${name}</a></h2>
    <p>${description}</p>`;
  div.classList.add('project-tile');
  projectsSection.append(div);
});
