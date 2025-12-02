const genBtn = document.getElementById("generate");
const length = document.getElementById("length");

genBtn.addEventListener("click", () => {
    const lengthValue = Number(length.value);

    let result = randomLetter(lengthValue);

    if (document.querySelector('#upperCase').checked) {
        result = applyUpperCase(result);
    }

    if (document.querySelector('#numbers').checked) {
        result = applyNumber(result);
    }

    if (document.querySelector('#symbols').checked) {
        result = applySymbols(result);
    }

    document.getElementById("password").value = result;
})

function randomLetter(length) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        result += letters[randomIndex];
    }

    return result;
};

function applyUpperCase(str) {
    const chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        if (Math.random() < 0.5) {
            chars[i] = chars[i].toUpperCase();
        }
    }

    return chars.join("");
}

function applyNumber(str) {
    const chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        if (Math.random() < 0.5) {
            chars[i] = Math.floor(Math.random() * 10).toString();
        }
    }

    return chars.join("");
}

function applySymbols(str) {
    const chars = str.split("");
    const symbols = "!@#$%^&*()_+{};~?,./";
    for (let i = 0; i < chars.length; i++) {
        if (Math.random() < 0.5) {
            const r = Math.floor(Math.random() * symbols.length);
            chars[i] = symbols[r];
        }
    }

    return chars.join("");
}