const convertButton = document.querySelector(".convert-button");
const currencySelected = document.querySelector(".currency-type-to");
const currencySelectedFrom = document.querySelector(".currency-type-from");

function convertValues() {
    const inputCurrencyToConvert = parseFloat(document.querySelector(".input-currency-to-convert").value);
    const currencyValueBox = document.querySelector("#currency-value-to-convert");
    const currencyValueConvertedBox = document.querySelector("#currency-value-converted");

    const exchangeRates = {
        "Real": 1,
        "Dollar": 5.23,
        "Euro": 5.69,
        "Libra": 6.68,
        "Bitcoin": 334.34
    };

    const fromCurrency = currencySelectedFrom.value;
    const toCurrency = currencySelected.value;

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    // Convert the input value to the base currency (Real) first, then to the target currency
    const valueInReals = inputCurrencyToConvert * fromRate;
    const convertedValue = valueInReals / toRate;

    currencyValueBox.innerHTML = new Intl.NumberFormat("en", {
        style: "currency",
        currency: fromCurrency === "Real" ? "BRL" : fromCurrency === "Dollar" ? "USD" : fromCurrency === "Euro" ? "EUR" : fromCurrency === "Libra" ? "GBP" : "BTC"
    }).format(inputCurrencyToConvert);

    currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
        style: "currency",
        currency: toCurrency === "Real" ? "BRL" : toCurrency === "Dollar" ? "USD" : toCurrency === "Euro" ? "EUR" : toCurrency === "Libra" ? "GBP" : "BTC"
    }).format(convertedValue);
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name");
    const currencyNameFrom = document.querySelector("#currency-name-from");
    const currencyImage = document.querySelector(".currency-img");
    const currencyFromImage = document.querySelector(".currency-from-img");

    const currencyData = {
        "Real": { name: "Real", img: "./assets/icons/brasil 2.png" },
        "Dollar": { name: "US Dollar", img: "./assets/icons/estados-unidos (1) 1.png" },
        "Euro": { name: "Euro", img: "./assets/icons/Euro.png" },
        "Libra": { name: "Libra Esterlina", img: "./assets/icons/libra 1.png" },
        "Bitcoin": { name: "Bitcoin", img: "./assets/icons/bitcoin 1.png" }
    };

    const fromCurrency = currencySelectedFrom.value;
    const toCurrency = currencySelected.value;

    if (currencyData[fromCurrency]) {
        currencyNameFrom.innerHTML = currencyData[fromCurrency].name;
        currencyFromImage.src = currencyData[fromCurrency].img;
    }

    if (currencyData[toCurrency]) {
        currencyName.innerHTML = currencyData[toCurrency].name;
        currencyImage.src = currencyData[toCurrency].img;
    }

    convertValues();
}

currencySelectedFrom.addEventListener("change", changeCurrency);
currencySelected.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
