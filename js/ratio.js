(function (doc, win) {
  var docEl = doc.querySelector('html'),
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      var widthDoc = doc;
      docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    };
  win.addEventListener('resize', recalc, false);
  doc.addEventListener('load', recalc, false);
  recalc();
})(document, window);
