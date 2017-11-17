/* Theme changer */

(function() {

    var selectTheme = document.querySelector('.select-theme');
    var themeClassName = document.querySelector('.theme');

    selectTheme.addEventListener('change', function() {
        themeClassName.className = '';
        themeClassName.className = this.value.toLowerCase();
    })

})();