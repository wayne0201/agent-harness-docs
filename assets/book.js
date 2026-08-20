(function () {
  var btn = document.getElementById('menuBtn');
  var sb = document.getElementById('sidebar');
  var bd = document.querySelector('.sidebar-backdrop');
  if (!btn || !sb || !bd) return;
  function open() { sb.classList.add('open'); bd.classList.add('show'); document.body.classList.add('no-scroll'); }
  function close() { sb.classList.remove('open'); bd.classList.remove('show'); document.body.classList.remove('no-scroll'); }
  btn.addEventListener('click', function () { sb.classList.contains('open') ? close() : open(); });
  bd.addEventListener('click', close);
  sb.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
})();