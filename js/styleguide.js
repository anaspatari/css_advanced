document.querySelectorAll('.js-styleguide-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const linkUrl = new URL(link.href);
    const iframe = document.querySelector('.js-styleguide-iframe');
    const url = new URL(iframe.src)
    url.hash = linkUrl.hash;
    iframe.src = url.href;
  });
});



document.querySelectorAll('.js-toggle-device-width').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.js-styleguide-iframe').style.width = link.dataset.responsive;
  });
});