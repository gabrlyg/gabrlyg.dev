const getThemePreference = () => {
  const preferredTheme = localStorage.getItem('theme');
  return preferredTheme ? preferredTheme : 'light';
};

const setThemePreference = (theme) => {
  localStorage.setItem('theme', theme);
};

let currentTheme = getThemePreference();

const toggleTheme = (event) => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  event.target.setAttribute('aria-label', currentTheme);
};

const reflectThemePreference = (theme) => {
  theme === 'dark'
    ? document.firstElementChild.classList.remove('dark')
    : document.firstElementChild.classList.add('dark');
};

reflectThemePreference(currentTheme);

window.onload = () => {
  document
    .querySelector('#btn-toggle-theme')
    .addEventListener('click', (event) => {
      toggleTheme(event);
      setThemePreference(currentTheme);
      reflectThemePreference(currentTheme);
    });
};
