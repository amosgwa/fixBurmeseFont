function fixit() {
    console.log("converting to standard");
    chrome.tabs.executeScript(null, {
        code: "var newStyle = document.createElement('style');\
                newStyle.appendChild(document.createTextNode(\"\
                  @font-face{\
                    font-family:Zawgyi-One !important;\
                    src:local('Zawgyi-One'),url('https://cdn.myanmapress.com/fonts/zawgyi.ttf');\
                  }\
                  div, span, p, h1, h2, h3, h4, h5, h6, body, section, article, form, pre, a {\
                    font-family:Zawgyi-One !important;\
                  }\
                \")); document.head.appendChild(newStyle);"
    });
    window.close();
};

document.addEventListener('DOMContentLoaded', function() {
    $('#fixText').click(function() {
        fixit();
    });
});
