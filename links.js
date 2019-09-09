const Marked = require('marked');

// Función para extraer los links usando marked


function (markdown) {
  const links = [];

  const renderer = new Marked.Renderer();


  renderer.link = function(href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  renderer.image = function(href, title, text) {
     

      links.push({
        href: href,
        text: text,
        title: title,
      });
  };
  Marked(markdown, {renderer: renderer});

  return links;
};
