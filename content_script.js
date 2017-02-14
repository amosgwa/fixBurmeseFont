
var fontURL = chrome.extension.getURL('fonts/zawgyi.ttf');

var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.textContent = '@font-face { font-family: zawgyi; src: url("'
        + chrome.extension.getURL('fonts/zawgyi.ttf')
        + '"); } '
        + "div, span, p, h1, h2, h3, h4, h5, h6, body, section, article, form, pre, a { font-family: zawgyi !important; } ";

document.head.appendChild(newStyle);