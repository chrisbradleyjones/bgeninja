function loadCSS(filePath) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filePath;

  document.head.appendChild(link);
}
loadCSS("../../vs2015.css");

function favicon(dirpath){
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = dirpath;

  document.head.appendChild(link);
}
favicon("../../img/bgeninja.ico");