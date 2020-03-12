function calcularIva() {
    let input = document.getElementById('importe')
    let neto = input.value;
    let impuesto = iva(neto);
    alert('El importe correspondiente a IVA es $' + impuesto);
}