let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button','btn2');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=='!p'){
             var fact =1;
             var num1 = screenValue;
            for(i =1 ; i <=num1; i++  ){
                fact *=i;
            }
            screenValue= fact;
            
         
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}