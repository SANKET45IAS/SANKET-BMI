let form=document.querySelector("form");

// let heigth=document.getElementById("height").value;
//     console.log(heigth);
// this case give empty because we want the value at the time of Submit

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let BMI = document.getElementById("result");

    // Validating height input
    if (height === '' || height <= 0 || isNaN(height)) {
        BMI.value = "Invalid Height";
        return;
    }

    // Validating weight input
    if (weight === '' || weight <= 0 || isNaN(weight)) {
        BMI.value = "Invalid Weight";
        return;
    }

    // Calculating BMI
    let res = (weight / ((height / 100) * (height / 100))).toFixed(2);
    BMI.value = res;
    console.log(res);
});