const convertButton = document.querySelector(".convert-button")
const currencySelected = document.querySelector(".currency-type-to")
const currencySelectedFrom = document.querySelector(".currency-type-from") 

function convertValues(){
    const inputCurrencyToConvert = document.querySelector(".input-currency-to-convert").value 
    const currencyValueBox = document.querySelector("#currency-value-to-convert")
    const currencyValueConvertedBox = document.querySelector("#currency-value-converted") 
    
    
    const dollarToday = 5.23
    const euroToday = 5.69
    const libraToday = 6.68
    const bitcoinToday = 334.34
    const realToday = 0.19

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

    if (currencySelected.value == "Dollar"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyToConvert / dollarToday)
    }

    if (currencySelected.value == "Euro"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyToConvert / euroToday)
    }

    if (currencySelected.value == "Libra"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyToConvert / libraToday)
    }

    if (currencySelected.value == "Bitcoin"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyToConvert / bitcoinToday)
    }

    if (currencySelected.value == "Real"){
        currencyValueConvertedBox.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyToConvert / realToday) 
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
