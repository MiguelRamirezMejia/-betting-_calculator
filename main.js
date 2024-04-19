document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bettingForm');
    const resultsTable = document.getElementById('resultsTable');
    const totalGainedInput = document.getElementById('totalGained');
    const netGainedInput = document.getElementById('netGained');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturar valores
        let initialBet = parseFloat(document.getElementById('initialBet').value);
        const odds = parseFloat(document.getElementById('odds').value);
        const numBets = parseInt(document.getElementById('numBets').value);
        
        // Valores para almacenar totales
        let totalLost = 0;
        let currentBet = initialBet;

        // Limpiar resultados anteriores
        resultsTable.innerHTML = '';
        
        // Bucle para calcular cada apuesta según el número de apuestas especificado
        for (let i = 0; i < numBets; i++) {
            let row = resultsTable.insertRow();
            let betNumberCell = row.insertCell(0);
            let betAmountCell = row.insertCell(1);
            let totalLostCell = row.insertCell(2);
            
            betNumberCell.textContent = i + 1;
            betAmountCell.textContent = currentBet.toFixed(0);

            // Suponiendo una pérdida para simplificar el cálculo
            totalLost += currentBet;
            totalLostCell.textContent = totalLost.toFixed(0);

            // Duplica la apuesta para la siguiente ronda en caso de pérdida
            currentBet *= 3;
        }
        
        // Calculamos el total ganado como la última apuesta multiplicada por las cuotas
        let totalGained = currentBet / 3 * odds; // Dividimos por 2 porque currentBet ya se duplicó para la siguiente ronda
        totalGainedInput.value = totalGained.toFixed(0);
        netGainedInput.value = (totalGained - totalLost).toFixed(0);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleDarkMode');
    const body = document.body;
    const elementsWithDarkMode = document.querySelectorAll('.container, input, button, th, .input-group label');

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        elementsWithDarkMode.forEach(el => {
            el.classList.toggle('dark-mode');
        });
        
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Modo Claro';
        } else {
            toggleButton.textContent = 'Modo Oscuro';
        }
    });
});


