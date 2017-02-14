function fixit() {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
    window.close();
};

document.addEventListener('DOMContentLoaded', function() {
    $('#fixText').click(function() {
        fixit();
    });
});
