function validarCPF() {
  const input = document.getElementById("cpf");
  const resultado = document.getElementById("resultado");

  // Remove tudo que não for número
  const cpf = input.value.replace(/\D/g, '');

  // Validação básica de comprimento e sequência repetida
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    resultado.textContent = "CPF inválido";
    resultado.className = "resultado invalido";
    return;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let dig1 = 11 - (soma % 11);
  if (dig1 >= 10) dig1 = 0;

  if (dig1 !== parseInt(cpf.charAt(9))) {
    resultado.textContent = "CPF inválido";
    resultado.className = "resultado invalido";
    return;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let dig2 = 11 - (soma % 11);
  if (dig2 >= 10) dig2 = 0;

  if (dig2 !== parseInt(cpf.charAt(10))) {
    resultado.textContent = "CPF inválido";
    resultado.className = "resultado invalido";
    return;
  }

  resultado.textContent = "CPF válido!";
  resultado.className = "resultado valido";
}