document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.host);
});

window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});

function loadPageContent(content) {
    const app = document.getElementById('app');
    app.innerHTML = content;
};
