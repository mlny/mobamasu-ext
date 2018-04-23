function save_options() {
    var showToolbar = document.getElementById("showToolbar").checked
    var status = document.getElementById('status');
    
    // storageに設定を書き込む
    chrome.storage.local.set({
            showtoolbar: showToolbar
        }, function () {
            status.textContent = 'Options saved.';
            setTimeout(function() {
                status.textContent = '';
            }, 750);
    })
}
function restore_options() {
    chrome.storage.local.get({
        showtoolbar: false
    }, function (items) {
        document.getElementById("showToolbar").checked = items.showtoolbar;
    })
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
