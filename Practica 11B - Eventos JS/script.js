document.addEventListener('keydown', (evento) => {
    const direccion = document.getElementById('direccion');
    const espacio = document.getElementById('espacio');

    switch (evento.key) {
        case 'a':
        case 'A':
            direccion.textContent = 'Izquierda';
            break;
        case 'w':
        case 'W':
            direccion.textContent = 'Arriba/Adelante';
            break;
        case 's':
        case 'S':
            direccion.textContent = 'Atrás/Retrocede';
            break;
        case 'd':
        case 'D':
            direccion.textContent = 'Derecha';
            break;
        case ' ':
            espacio.classList.add('activo');
            break;
        default:
            direccion.textContent = 'Ninguna';
    }
});

document.addEventListener('keyup', (evento) => {
    if (evento.key === ' ') {
        const espacio = document.getElementById('espacio');
        espacio.classList.remove('activo');
    }
});
