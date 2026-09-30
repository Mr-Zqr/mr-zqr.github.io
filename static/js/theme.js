(() => {
  const key = 'qingrui-theme';
  const modes = ['system', 'light', 'dark'];
  const labels = { system: 'System', light: 'Light', dark: 'Dark' };
  const icons = { system: '◐', light: '☀', dark: '☾' };
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let mode = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (modes.includes(saved)) mode = saved;
  } catch (_) { /* System preference still works when storage is unavailable. */ }
  const apply = () => {
    document.documentElement.dataset.theme = mode === 'system' ? (system.matches ? 'dark' : 'light') : mode;
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    button.querySelector('.theme-icon').textContent = icons[mode];
    button.querySelector('.theme-label').textContent = labels[mode];
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    button.setAttribute('aria-label', `Theme: ${labels[mode]}. Switch to ${labels[next]}`);
    button.title = `Theme: ${labels[mode]} — switch to ${labels[next]}`;
  };
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    mode = modes.includes(event.newValue) ? event.newValue : 'system';
    apply();
  });
  document.addEventListener('click', event => {
    if (event.target.closest('.theme-toggle')) {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      try { localStorage.setItem(key, mode); } catch (_) {}
      apply();
    }
  });
  const navigationReady = new MutationObserver(() => {
    if (document.querySelector('.theme-toggle')) {
      apply();
      navigationReady.disconnect();
    }
  });
  navigationReady.observe(document.documentElement, { childList: true, subtree: true });
})();
