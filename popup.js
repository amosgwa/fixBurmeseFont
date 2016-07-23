function fixit() {
    console.log("converting to standard");
    chrome.tabs.executeScript(null, {
        code: "var newStyle = document.createElement('style');\
                newStyle.appendChild(document.createTextNode(\"\
                  @font-face{\
                    font-family:Zawgyi-One;\
                    src:local('Zawgyi-One'),url('http://cdn.myanmapress.com/fonts/zawgyi.ttf');\
                  }\
                \")); document.head.appendChild(newStyle); document.body.style.fontFamily='Zawgyi-One'; console.log(newStyle);"
    });
    window.close();
};

document.addEventListener('DOMContentLoaded', function() {
    $('#fixText').click(function() {
        fixit();
    });
});
