 
 let currentvalue = '';
        let previousvalue = '';
        let operator = null;

      function updateDisplay(){
        document.getElementById('currentvalue').textContent = currentvalue;
          if(operator){ 



            document.getElementById('previousvalue').textContent= `${previousvalue} ${operator}`;
          }
          else{
            document.getElementById('previousvalue').textContent = previousvalue;
          }
         }
     
    function appendNumber(number) {
           
            if (currentvalue === '0' && number !== '') {
                currentvalue = number;
            } else {
                currentvalue += number;
            }
           updateDisplay();
        }
            
    function chooseOperator(op) {
            if (currentvalue === '') return;
            if (previousvalue !== '') {
                calculate();
            }
            operator = op;
            previousvalue = currentvalue;
            currentvalue = '';
           updateDisplay();
        }
     function calculate() {
    if (currentvalue === '' || previousvalue === '' || operator === null) return;

    const prev = parseFloat(previousvalue);
    const current = parseFloat(currentvalue);

    if (isNaN(prev) || isNaN(current)) return;

    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
    }

    currentvalue = result.toString();
    operator = null;
    previousvalue = '';
    updateDisplay();
}

    
         function clearDisplay() {
            currentvalue = '';
            previousvalue = '';
            operator = null;
           updateDisplay();
        }
      

       updateDisplay();
