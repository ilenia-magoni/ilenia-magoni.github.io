import { projects } from './projects.js';
import { shuffle } from './shuffle.js';
import { socialMedia } from './socialMedia.js';

const projectsSection = document.querySelector('#projects-section');
shuffle(projects);
projects.forEach(({ name, description, url, fontAwesome }) => {
  const div = document.createElement('div');
  div.innerHTML = `<a href="${url}" target="_blank"><i class="${fontAwesome}"></i></a>
    <h2><a href="${url}">${name}</a></h2>
    <p>${description}</p>`;
  div.classList.add('project-tile');
  projectsSection.append(div);
});

const internetPresence = document.querySelector('#internet-presence');
shuffle(socialMedia);
socialMedia.forEach(({ link, name, fontAwesome }) => {
  const div = document.createElement('div');
  div.innerHTML = `<a href="${link}" title="${name}" target="_blank"><i class="${
    fontAwesome || 'fa-solid fa-question'
  }"></i></a>`;
  div.classList.add('social-tile');
  internetPresence.append(div);
});
