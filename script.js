const convertButton = document.querySelector(".convert-button")
const currencySelected = document.querySelector(".currency-type-to")
const currencySelectedFrom = document.querySelector(".currency-type-from") 

function convertValues(){
    const inputCurrencyToConvert = document.querySelector(".input-currency-to-convert").value 
    const currencyValueBox = document.querySelector("#currency-value-to-convert")
    const currencyValueConvertedBox = document.querySelector("#currency-value-converted") 
    
             // Tuve que agregar const exchangeRates

    const exchangeRates = {
        "Real" : 0.19,
        "Dollar" : 5.23,
        "Euro" : 5.69,
        "Libra" : 6.68,
        "Bitcoin" : 334.34
    }
           // Tuve que agregar const valueFromConvert y const valueToConvert

    const valueFromConvert = currencySelectedFrom.value
    const valueToConvert = currencySelected.value

          // Tube que agregar const fromRate y const toRate

    const fromRate = exchangeRates[valueFromConvert]
    const toRate = exchangeRates[valueToConvert]

          // Tube que agregar const valueInReals y const convertedValues
          
    const valueInReals = inputCurrencyToConvert * fromRate
    const convertedValues = valueInReals / toRate

    if (currencySelectedFrom.value =="Real"){
        currencyValueBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyToConvert)
    }

    if (currencySelectedFrom.value =="Dollar"){
        currencyValueBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyToConvert)
        
    }

    if (currencySelectedFrom.value =="Euro"){
        currencyValueBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyToConvert)
    }

    if (currencySelectedFrom.value =="Libra"){
        currencyValueBox.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyToConvert)
    }  
    
    if (currencySelectedFrom.value =="Bitcoin"){
        currencyValueBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyToConvert)
    }

    if (currencySelected.value == "Dollar"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(convertedValues )
    }

    if (currencySelected.value == "Euro"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValues )
    }

    if (currencySelected.value == "Libra"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValues )
    }

    if (currencySelected.value == "Bitcoin"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValues )
    }

    if (currencySelected.value == "Real"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValues ) 
    }
    
    


}

function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyNameFrom = document.querySelector("#currency-name-from")
    const currencyImage = document.querySelector(".currency-img")
    const currencyFromImage = document.querySelector(".currency-from-img")

    if (currencySelectedFrom.value == "Real"){
        currencyNameFrom.innerHTML = "Real"
        currencyFromImage.src = "./assets/icons/brasil 2.png"
    }

    if (currencySelectedFrom.value == "Dollar"){
        currencyNameFrom.innerHTML = "Dollar"
        currencyFromImage.src = "./assets/icons/estados-unidos (1) 1.png"
    }

    if (currencySelectedFrom.value == "Euro"){
        currencyNameFrom.innerHTML = "Euro"
        currencyFromImage.src = "./assets/icons/Euro.png"
    }

    if (currencySelectedFrom.value == "Libra"){
        currencyNameFrom.innerHTML = "Libra"
        currencyFromImage.src = "./assets/icons/libra 1.png"
    }

    if (currencySelectedFrom.value == "Bitcoin"){
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyFromImage.src = "./assets/icons/bitcoin 1.png"
    }

    if(currencySelected.value == "Dollar"){
        currencyName.innerHTML = "US Dollar"
        currencyImage.src = "./assets/icons/estados-unidos (1) 1.png"
    }

    if(currencySelected.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/icons/Euro.png"
    }

    if(currencySelected.value == "Libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/icons/libra 1.png"
    }

    if(currencySelected.value == "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "assets/icons/bitcoin 1.png"
    }

    if(currencySelected.value == "Real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/icons/brasil 2.png"
    }

    

    convertValues()
}

currencySelectedFrom.addEventListener("change", changeCurrency)
currencySelected.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)