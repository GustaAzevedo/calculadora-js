const btn = document.querySelectorAll('button');
const resultado = document.querySelector('#resultado');


btn.forEach(function (button) {
    button.addEventListener('click', calcula)
});

function calcula(e) {
    // current clicked buttons value
    const clickedButtonValue = e.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (resultado.value !== '') {
            // calculate and show the answer to display
            resultado.value = eval(resultado.value);
        }
    } else if (clickedButtonValue === 'limpar') {
        // clear everything on display
        resultado.value = '';
    } else {
        // otherwise concatenate it to the display
        resultado.value += clickedButtonValue;
    }

}