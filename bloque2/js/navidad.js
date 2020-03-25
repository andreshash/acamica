$(document).ready(_ => {
    var fechaActual = moment();
    var ultimoDiaDelAnio = moment().endOf('year');

    var diasFaltantes = ultimoDiaDelAnio.diff(fechaActual, 'days');

    alert('Faltan ' + diasFaltantes + ' para el final del año.')
});