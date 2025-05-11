document.addEventListener('click', function(event) {
    const dialog = document.querySelector("#contacts");
    const dialogContent = document.querySelector('.dialog-content');
    
    if (dialog.open && !dialogContent.contains(event.target) && event.target === dialog) {
        dialog.close();
    }
});