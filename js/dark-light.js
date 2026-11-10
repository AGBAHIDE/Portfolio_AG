/*======================================
Dark / Light Mode Controller
========================================*/
(function () {
    var savedTheme = localStorage.getItem('rs_theme_scheme') || 'rs-theme-light';
    document.documentElement.setAttribute("rs-theme", savedTheme);
    if (document.body) {
        document.body.setAttribute("rs-theme", savedTheme);
    }
})();

function rs_theme_toggler() {
    var toggler = document.getElementById('rs-theme-toggler');
    if (!toggler) return;

    function rs_set_scheme(theme) {
        localStorage.setItem('rs_theme_scheme', theme);
        document.documentElement.setAttribute("rs-theme", theme);
        if (document.body) {
            document.body.setAttribute("rs-theme", theme);
        }
    }

    $('#rs-theme-toggler').off("change").on("change", function () {
        if (this.checked) {
            rs_set_scheme('rs-theme-dark');
        } else {
            rs_set_scheme('rs-theme-light');
        }
    });

    var currentTheme = localStorage.getItem('rs_theme_scheme') || 'rs-theme-light';
    rs_set_scheme(currentTheme);
    toggler.checked = (currentTheme === 'rs-theme-dark');
}

$(document).ready(function () {
    if ($("#rs-theme-toggler").length > 0) {
        rs_theme_toggler();
    }
});
