 
 let currentvalue = '';
        let previousvalue = '';
        let operator = '';

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
            if (currentvalue==='' || previousvalue==='' || operator === null) return;

            let result=0;
            const prev = parseFloat(previousvalue);
            const current = parseFloat(currentvalue);

            if (isNaN(prev) || isNaN(current)) 

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

            currentvalue = console.log(result);
            operator = '';
            previousvalue = '';
           updateDisplay();
        }
    
         function clearDisplay() {
            currentvalue = '';
            previousvalue = '';
            operator = '';
           updateDisplay();
        }
      

       updateDisplay();
