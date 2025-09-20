document.getElementById("calcular").addEventListener("click", async () => {
  const peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  const resultadoEl = document.getElementById("resultado");

  // validações simples
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

  try {
    const response = await fetch("/api/imc/calcular", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ peso: peso, altura: altura }),
    });

    if (!response.ok) {
      throw new Error("Erro no servidor");
    }

    const data = await response.json();
    resultadoEl.style.color = "";
    resultadoEl.innerHTML = `<strong>IMC: ${data.imc}</strong> — ${data.categoria}<br>${data.mensagem}`;
  } catch (error) {
    resultadoEl.textContent = "Ocorreu um erro ao calcular. Tente novamente.";
    resultadoEl.style.color = "crimson";
  }
});