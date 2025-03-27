// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 146.2
    return valueInYen
}

const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 179.8
    return valueInPound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
