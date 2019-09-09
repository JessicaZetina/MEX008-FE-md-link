const Marked = require('marked');

// Función para extraer los links usando marked


function (markdown) {
  const links = [];


  const.link = function(href, title, text) {
    links.push({
      href: href= link (1)
      text: text= link(2)
      title: title,
    });
  };
   function(href, title, text) {
     

      links.push({
        href: href,
        text: text,
        title: title,
      });
  };
  Marked(markdown, {});

  return links;
};
