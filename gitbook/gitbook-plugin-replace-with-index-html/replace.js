require(['gitbook', 'jQuery'], function (gitbook, $) {

  function updateIndexHref() {

      $(document).ready(function () {
          $('a').not('[href^="http"],[href^="https"],[href^="mailto:"],[href*=".html#"],[href$=".html"]').each(function () {
              $(this).attr('href', function (index, value) {
                  if (value.charAt(0) === '.' && value.slice(-1) === "/") {
                      value = value + "index.html";
                  }
                  return value;
              });
          });
      });
  }

  gitbook.events.bind('start', function () {
    updateIndexHref();
  });

  gitbook.events.bind('page.change', function () {
    updateIndexHref();
  });

});
