
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
        let totalGained = 0;
        let totalStaked = 0;
        
        // Limpiar resultados anteriores
        resultsTable.innerHTML = '';
        
        // Bucle para calcular cada apuesta
        for (let i = 0; i < numBets; i++) {
            let row = resultsTable.insertRow();
            let betNumberCell = row.insertCell(0);
            let betAmountCell = row.insertCell(1);
            let potentialGainCell = row.insertCell(2);
            let totalGainCell = row.insertCell(3);
            
            betNumberCell.textContent = i + 1;
            betAmountCell.textContent = initialBet;
            
            // Calcular ganancia potencial
            let potentialGain = initialBet * odds;
            potentialGainCell.textContent = potentialGain.toFixed(2);
            
            // Suponiendo un ciclo de pérdida hasta ganar
            if (Math.random() < 0.5) { // Supongamos 50% de probabilidad de ganar para simplificar
                // Gana
                totalGained += potentialGain;
                totalStaked += initialBet;
                totalGainCell.textContent = (totalGained - totalStaked).toFixed(2);
                initialBet = 200; // Reiniciar a la apuesta inicial
            } else {
                // Pierde
                totalStaked += initialBet;
                totalGainCell.textContent = (totalGained - totalStaked).toFixed(2);
                initialBet *= 2; // Duplicar la apuesta
            }
        }
        
        // Actualizar totales
        totalGainedInput.value = totalGained.toFixed(2);
        netGainedInput.value = (totalGained - totalStaked).toFixed(2);
    });
});

