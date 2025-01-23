const res = document.getElementById("res");
const valuer = document.getElementById("value");
const convertForme = document.getElementById("convert-from");
const convertTo = document.getElementById("convert-to");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (convertForme.value === "mm" && convertTo.value === "cm") {
        const result = valuer.value * 0.1
        res.innerHTML = result + "cm";
    } else if (convertForme.value === "cm" && convertTo.value === "mm") {
        const result = valuer.value * 10;
        res.innerHTML = result + "mm";
    } else {
        alert("vous ne pouvez pas convertir  " + convertForme.value + " en " + convertTo.value);
    }

})


