document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('valor_1');
    const buttons = document.querySelectorAll('#contenedor button');

    let currentValue = '';
    let operator = null;
    let previousValue = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;

            if (!isNaN(buttonText) || buttonText === '.') {
                currentValue += buttonText;
                display.value = currentValue;
            } else if (buttonText === 'c') {
                currentValue = '';
                previousValue = null;
                operator = null;
                display.value = '0';
            } else if (buttonText === '=' ) {
                calculate();
            } else if (['+', '-', 'x', '/'].includes(buttonText)) {
                if (previousValue !== null) {
                    calculate();
                }
                previousValue = parseFloat(currentValue);
                operator = buttonText;
                currentValue = '';
            }
        });
    });

    function calculate() {
        if (operator && previousValue !== null && currentValue !== '') {
            const currentValueFloat = parseFloat(currentValue);
            let result;

            switch (operator) {
                case '+':
                    result = previousValue + currentValueFloat;
                    break;
                case '-':
                    result = previousValue - currentValueFloat;
                    break;
                case 'x':
                    result = previousValue * currentValueFloat;
                    break;
                case '/':
                    if (currentValueFloat === 0) {
                        alert("No se puede dividir por cero");
                        return;
                    }
                    result = previousValue / currentValueFloat;
                    break;
            }

            display.value = result;
            currentValue = result.toString();
            previousValue = null;
            operator = null;
        }
    }
});