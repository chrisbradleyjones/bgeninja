// Loads the Fovicon, CSS for style3 and syntax highlight
// Just loading this .js file does all the job nice.


function loadCSS(filePath) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filePath;

  document.head.appendChild(link);
}
loadCSS("../../code/vs2015.css");

function favicon(dirpath){
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = dirpath;

  document.head.appendChild(link);
}
favicon("../../img/bgeninja.ico");

function tutorial(filePath) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filePath;

  document.head.appendChild(link);
}
tutorial("../../style3.css");