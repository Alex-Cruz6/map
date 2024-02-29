document.addEventListener('DOMContentLoaded', function () {
    const svgElements = document.querySelectorAll('#svg7145 [id]');
    const tooltip = document.getElementById('tooltip1');

    svgElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    function showTooltip(event) {
        const element = event.target;

        // Puedes ajustar aquí el texto del tooltip según el ID del elemento SVG
        const textoTooltip = obtenerTextoTooltip(element.id);

        // Muestra el tooltip en la posición del ratón
        tooltip.innerHTML = textoTooltip;
        tooltip.style.display = 'block';
        tooltip.style.top = (event.clientY + 10) + 'px';
        tooltip.style.left = (event.clientX + 10) + 'px';
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    function obtenerTextoTooltip(elementId) {
        // Puedes personalizar el texto según el ID del elemento SVG
        switch (elementId) {
            // Santa Ana
            case 'path21682':
                return 'Santa Ana Este';
            case 'path21688':
                return 'Santa Ana Centro';
            case 'path21692':
                return 'Santa Ana Oeste';
            case 'path21706':
                return 'Santa Ana Norte';
            // Ahuachapan
            case 'path20869':
                return 'Ahuachapán Sur';
            case 'path20879':
                return 'Ahuachapán Centro';
            case 'path20889':
                return 'Ahuachapán Norte';
            // Sonsonate
            case 'path20908':
                return 'Sonsonate Oeste';
            case 'path20912':
                return 'Sonsonate Centro';
            case 'path20924':
                return 'Sonsonate Este';
            case 'path20938':
                return 'Sonsonate Norte';
            // Chalatenango
            case 'path1689':
                return 'Chalatenango Sur';
            case 'path1731':
                return 'Chalatenango Centro';
            case 'path1757':
                return 'Chalatenango Norte';
            // La Libertad
            case 'path1832':
                return 'La Libertad Sur';
            case 'path1838':
                return 'La Libertad Costa';
            case 'path1850':
                return 'La Libertad Este';
            case 'path1862':
                return 'La Libertad Oeste';
            case 'path1874':
                return 'La Libertad Centro';
            case 'path1880':
                return 'La Libertad Norte';
            // San Salvador
            case 'path2265':
                return 'San Salvador Sur';
            case 'path2193':
                return 'San Salvador Centro';
            case 'path2281':
                return 'San Salvador Este';
            case 'path2017':
                return 'San Salvador Oeste';
            case 'path2023':
                return 'San Salvador Norte';
            // Cuscatlán
            case 'path1616':
                return 'Cuscatlán Sur';
            case 'path1640':
                return 'Cuscatlán Norte';
            // La Paz
            case 'path1776':
                return 'La Paz Centro';
            case 'path1802':
                return 'La Paz Este';
            case 'path1810':
                return 'La Paz Oeste';
            // Cabañas
            case 'path1656':
                return 'Cabañas Este';
            case 'path1672':
                return 'Cabañas Oeste';
            // San Vicente
            case 'path1426':
                return 'San Vicente Sur';
            case 'path1440':
                return 'San Vicente Norte';
            // Usulutan
            case 'path21723':
                return 'Usulután Este';
            case 'path21745':
                return 'Usulután Oeste';
            case 'path21755':
                return 'Usulután Norte';
            // San Miguel
            case 'path1564':
                return 'San Miguel Centro';
            case 'path1578':
                return 'San Miguel Oeste';
            case 'path1592':
                return 'San Miguel Norte';
            // Morazán
            case 'path1352':
                return 'Morazán Sur';
            case 'path1388':
                return 'Morazán Norte';
            // La Unión
            case 'path1460':
                return 'La Unión Sur';
            case 'path1504':
                return 'La Unión Norte';
            default:
                return '';
        }
    }
});
