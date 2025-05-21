document.addEventListener('DOMContentLoaded', function() {
    // Manejador para el enlace de inicio
    document.querySelector('a[href="#inicio"]').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Desplazamiento suave hacia la sección de productos
        document.querySelector('#productos').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});