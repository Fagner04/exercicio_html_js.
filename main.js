function validarFormulario() {
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("mensagem").textContent = "Formulário válido!";
        // document.querySelector('message2').style.display = "block"

    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido. O número B deve ser maior que o número A.";
        // document.querySelector('message').style.display = "block"
    }
}