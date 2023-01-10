import validator from 'validator';

const botao = document.getElementById('button');
const inputArea = document.getElementById('valor');
const select = document.getElementById('select');
const result = document.getElementById('resultado');

const captureValue = () => {
    const selectedArea = select.options[select.selectedIndex];
    return selectedArea.text;
};

const validEmail = () => {
    if (validator.isEmail(inputArea.value)) {
        result.innerHTML = 'True!';
    } else {
        result.innerHTML = 'False!';
    }
};

const validMoeda = () => {
    if(validator.isCurrency(inputArea.value)) {
        result.innerHTML = 'True!';
    }
};

botao.addEventListener('click', (event) => {
    const value = captureValue();
    if (value === 'Email') {
        validEmail();        
    }
    if (value === 'Valor em moeda') {
        validMoeda();        
    }
    event.preventDefault();
    
});

