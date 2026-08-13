javascript:(function () {
  const domain = window.location.hostname;
  const page = window.location.href;

  const url =
    'https://search.google.com/search-console/performance/search-analytics' +
    '?resource_id=' +
    encodeURIComponent('sc-domain:' + domain) +
    '&page=' +
    encodeURIComponent(page);

  window.open(url, '_blank');
})();
