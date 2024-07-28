const convertButton = document.getElementById("convertButton");
const inputTemperature = document.getElementById("inputTemperature");
const result = document.getElementById("result");
const select = document.getElementById("select");
let temperature = 0;

convertButton.addEventListener("click", convert)
inputTemperature.addEventListener("change", (e) => {
    temperature = parseFloat(e.target.value);
})

function convert() {
    const selectOption = select.value;
    if (selectOption === "Celsius"){
        temperature = (temperature * 9/5) + 32;
        result.textContent = `fahrenheit temperature is: ${temperature}`;
    }
    else if (selectOption === "Fahrenheit"){
        temperature = (temperature - 32) * 5/9;
        result.textContent = `celsius temperature is: ${temperature}`;
    }
    else {
        result.textContent = "Please enter a valid temperature";
    }
}