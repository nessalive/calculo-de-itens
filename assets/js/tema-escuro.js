var checkbox = document.getElementById('cbx');
if (!checkbox.checked) {
    document.documentElement.classList.add('temaEscuro');
}
checkbox.addEventListener('change', function() {
    if(!this.checked) {
        
        document.documentElement.classList.add('temaEscuro');
    } else {
        
        document.documentElement.classList.remove('temaEscuro');
    }
});