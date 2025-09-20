document.getElementById("calcular").addEventListener("click", async function calcular() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  const resultadoEl = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0) {
    resultadoEl.textContent = "Formato inválido: informe o peso corretamente";
    resultadoEl.style.color = "crimson";
    return;
  }
  if (isNaN(altura) || altura <= 0) {
    resultadoEl.textContent = "Formato inválido: informe a altura corretamente.";
    resultadoEl.style.color = "crimson";
    return;
  }

  if (altura > 3) altura = altura / 100;

  try {
    const response = await fetch("/imc/calcular", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ peso, altura }),
    });

    if (!response.ok) throw new Error("Erro no servidor");

    const data = await response.json();
    resultadoEl.style.color = "";
    resultadoEl.innerHTML = `<strong>IMC: ${data.imc.toFixed(1)}</strong> — ${data.classificacao}`;
  } catch (error) {
    resultadoEl.textContent = "Ocorreu um erro ao calcular. Tente novamente.";
    resultadoEl.style.color = "crimson";
  }
});

document.getElementById("limpar").addEventListener("click", () => {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").innerHTML = "";
});