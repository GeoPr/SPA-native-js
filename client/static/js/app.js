import HomeView from './views/HomeView.js';
import SettingsView from './views/SettingsView.js';
import PostsView from './views/PostsView.js';
import PostView from './views/PostView.js';

const root = document.getElementById('root');
const render = html => (root.innerHTML = html);

const pathToRegExp = path => {
  const replacedPath = path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)');
  return new RegExp('^' + replacedPath + '$');
};

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.path.matchAll(/:(\w+)/g)).map(result => {
    return result[1];
  });

  return Object.fromEntries(
    keys.map((key, idx) => {
      return [key, values[idx]];
    }),
  );
};

const router = async () => {
  const routes = [
    { path: '/', view: HomeView },
    { path: '/setting', view: SettingsView },
    { path: '/posts', view: PostsView },
    { path: '/posts/:id', view: PostView },
  ];

  const matches = routes.map(route => ({
    ...route,
    result: location.pathname.match(pathToRegExp(route.path)),
  }));

  let match = matches.find(m => m.result);

  if (!match) {
    match = {
      ...routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.view(getParams(match));
  render(view.getHtml());
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router); // for history navigate

window.addEventListener('load', () => {
  router();

  const links = document.querySelectorAll('[data-type="link"]');

  const clickHandler = e => {
    e.preventDefault(); //!
    navigateTo(e.target.href);
  };
  links.forEach(link => link.addEventListener('click', clickHandler));
});
