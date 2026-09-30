(() => {
  const section = document.querySelector('.visitor-statistics');
  if (!section) return;
  const map = section.querySelector('.visitor-map');
  const caption = section.querySelector('.visitor-count');
  if (!map || !caption) return;

  // The provider inserts and updates its counter asynchronously.
  const update = () => {
    const counter = map.querySelector('.mapmyvisitors-visitors');
    const match = counter?.textContent.match(/([\d][\d, .]*?)\s*(?:page\s*views?|views?|visits?)\b/i);
    if (!match) return;
    caption.textContent = `${match[1].trim()} views, `;
    caption.hidden = false;
    const period = map.querySelector('.mapmyvisitors-date')?.textContent.trim();
    if (period) caption.title = `Reporting period: ${period}`;
  };
  new MutationObserver(update).observe(map, { childList: true, subtree: true, characterData: true });
  update();
})();
