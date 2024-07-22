// script.js

function generarReporte(tipo) {
    let contenidoPopup = document.getElementById('contenidoPopup');
    let reporte = '';

    switch (tipo) {
        case 'ventas':
            reporte = `
                <h3>Reporte de Ventas</h3>
                <p>Periodo: Enero - Junio</p>
                <p>Productos más vendidos: Leche, Huevo</p>
                <p>Total de ingresos: $50,000</p>
            `;
            break;
        case 'inventario':
            reporte = `
                <h3>Reporte de Inventario</h3>
                <p>Productos en stock: 150</p>
                <p>Productos bajos en stock: 30</p>
                <p>Productos agotados: 10</p>
            `;
            break;
        case 'clientes':
            reporte = `
                <h3>Reporte de Clientes</h3>
                <p>Clientes frecuentes: 50</p>
                <p>Productos favoritos: Leche, Huevo</p>
            `;
            break;
        case 'entregas':
            reporte = `
                <h3>Reporte de Entregas</h3>
                <p>Promedio de tiempos de entrega: 1 días</p>
                <p>Satisfacción del cliente: 90%</p>
            `;
            break;
    }

    contenidoPopup.innerHTML = reporte;
    mostrarPopup();
}

function mostrarPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}
