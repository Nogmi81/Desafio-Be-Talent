export const buscarFuncionarios = async (textoDigitado) => {
  console.log("buscarFuncionarios: " + textoDigitado);

  try {
    const response = await fetch('/data/db.json');
    const data = await response.json();
    const funcionarios = data.employees; // Acessa a chave correta do JSON

    return funcionarios.filter(
      (funcionario) =>
        funcionario.name.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        funcionario.job.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        funcionario.phone.toLowerCase().includes(textoDigitado.toLowerCase())      
    );
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    return [];
  }
};

export const getTodosFuncionarios = async () => {
  try {
    const response = await fetch('/data/db.json');
    const data = await response.json();
    return data.employees;
  } catch (error) {
    console.error("Erro ao carregar funcionários:", error);
    return [];
  }
};
