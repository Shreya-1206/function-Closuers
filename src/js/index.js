import Row from './Row';

const outputDiv = document.querySelector('#output');
const inputEl = document.querySelector("input[name='inputTemp']");

const convertTo = function (formula) {
    const template = `
    try {
        if(Number.isFinite(t)) {
            return (${formula}).toPrecision(5);
        }
        throw new Error();
    } catch {
        return 'N/A'
    }`;

    return new Function('t=0', template);
};
const kelvin = convertTo('t + 273.15');
const fahrenheit = convertTo('(t * (9/5))+ 32')

const renderUi = function(t)  {
  outputDiv.innerHTML = Row('kelvin', kelvin(Number(t))) + Row('Fahrenheit', fahrenheit(Number(t)));
}

inputEl.addEventListener('keyup', function(evt) {
    evt.preventDefault();
    renderUi(this.value);
});

renderUi(0);