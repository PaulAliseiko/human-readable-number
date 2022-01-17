module.exports = function toReadable (number) {
    let strNumber = String(number);
    let resultOne = '';
    let resultTen = '';
    let resultHundred = '';
    let result = '';
    const zero = 'zero';
    const one = ['one','two','three','four','five', 'six','seven','eight','nine'];
    const tenToTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const ten = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundred = 'hundred';
      
    // one check
    if (strNumber.length === 1) {
        if (strNumber[0] == 0) {
            resultOne = zero;
            }
        else {
            for(let i = 0; i <= one.length; i++) {
                if (String(i) === strNumber[0]) {
                    resultOne = one[i-1];   
                }         
            }    
        }
        result = resultOne;
    }
    //ten to 99 check
    else if (strNumber.length === 2) {
        //ten to twenty check
        if (strNumber[0] == 1 && (strNumber[1] >= 1 && strNumber[1] <= 9)) {
            for(let k = 0; k <= tenToTwenty.length; k++) {
                if (String(k) === strNumber[1]) {
                    resultTen = tenToTwenty[k - 1];
                }         
            }
        }
        //twenty to 99 check
        else {
            for(let i = 0; i <= one.length; i++) {
                if (strNumber[1] == 0) {
                    resultOne = '';
                    }
                else if(String(i) === strNumber[1]) {
                    resultOne = ` ${one[i - 1]}`;   
                    }         
                } 
            for(let j = 0; j <= one.length; j++) {
                if (String(j) === strNumber[0]) {
                 resultTen = ten[j - 1];
                }         
            } 
        }   
        result = resultTen + resultOne;
    }
    //hundreds check
    else if (strNumber.length === 3) {
        //hundreds and ten to twenty check
        if (strNumber[1] == 1 && (strNumber[1] >= 1 && strNumber[2] <= 9 && strNumber[2] != 0)) {
            for (let i = 0; i <= one.length; i++) {   //hundreds
                if(String(i) === strNumber[0]) {
                    resultOne = `${one[i - 1]} ${hundred} `;   
                } 
            }    
            for(let k = 0; k <= tenToTwenty.length; k++) {   //ten to twenty
                if (String(k) === strNumber[2]) {
                    resultTen = tenToTwenty[k - 1];
                }         
            }
            result = resultOne + resultTen;
        }  
        //hundred and ten check  
        else if (strNumber[1] == 1 && strNumber[2] == 0) {            
            for(let i = 0; i <= one.length; i++) {
                if (String(i) === strNumber[0]) {
                    resultHundred = `${one[i - 1]} ${hundred} `;   
                }         
            }
            result = resultHundred + ten[0];
        }
        //full hundreds check
        else {
            for(let i = 0; i <= one.length; i++) {   //one
                if (strNumber[2] == 0) {
                    resultOne = '';
                }
                else if(String(i) === strNumber[2]) {
                    resultOne = ` ${one[i - 1]}`;   
                }         
            }     
            for(let j = 0; j <= one.length; j++) {   //tens
                if (strNumber[1] == 0) {
                    resultTen = '';
                }

                else if(String(j) === strNumber[1]) {
                    resultTen = ` ${ten[j - 1]}`;
                }         
            }
            for(let i = 0; i <= one.length; i++) {   //hundreds
                if (String(i) === strNumber[0]) {
                    resultHundred = `${one[i - 1]} ${hundred}`;   
                }         
            } 
            result = resultHundred + resultTen + resultOne; 
        }
    }    
        return result; 
}

