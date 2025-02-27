'use client';
import { useState, useEffect } from 'react';
import { buscarFuncionarios, getTodosFuncionarios } from '@/service'; // Importa funções para buscar dados de funcionários
import Header from '@/componentes/Header'; // Componente de cabeçalho
import NavBusca from '@/componentes/NavBusca'; // Componente de navegação/busca
import Main from '@/componentes/Main'; // Componente principal para exibir dados
import Footer from '@/componentes/Footer'; // Componente de rodapé
import styles from './page.module.css'; // Estilos CSS específicos para page.js, estilos mais específicos estão nos respectivos componentes

// Função para sanitizar a entrada antes da busca, prevenindo injeção de código malicioso
function sanitizarInput(input) {
  return input.replace(/&/g, 'Caractere NÃO permitido!')
              .replace(/</g, 'Caractere NÃO permitido!')
              .replace(/>/g, 'Caractere NÃO permitido!')
              .replace(/"/g, 'Caractere NÃO permitido!')
              .replace(/'/g, 'Caractere NÃO permitido!'); 
}

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState([]); // Estado para armazenar dados filtrados
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState(""); // Estado para armazenar o texto de busca

  useEffect(() => {
    // Carrega todos os funcionários na inicialização do componente
    const carregarFuncionarios = async () => {
      const funcionarios = await getTodosFuncionarios();
      setDadosFiltrados(funcionarios);
    };
    carregarFuncionarios();
  }, []); // Executa apenas uma vez na montagem do componente

  function validarEntrada(texto) {
    if (texto.length > 30) {
      return false; // Limita o comprimento da entrada para 30 caracteres
    }
    return true;
  }

  const handleBusca = async (textoDigitado) => {
    const textoSanitizado = sanitizarInput(textoDigitado); // Sanitiza a entrada

    if (!validarEntrada(textoSanitizado)) {
      return; // Se ultrapassar o limite, não aceita mais a digitação
    }

    setTextoBuscaDigitado(textoSanitizado); // Atualiza o estado com o texto sanitizado

    if (textoSanitizado.length >= 1) {
      // Busca funcionários com base no texto digitado
      const filtrados = await buscarFuncionarios(textoSanitizado);
      setDadosFiltrados(filtrados);
    } else {
      // Se a busca estiver vazia, exibe todos os funcionários
      const todos = await getTodosFuncionarios();
      setDadosFiltrados(todos);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <NavBusca handleBusca={handleBusca} textoBuscaDigitado={textoBuscaDigitado} />
      <main>
        <Main funcionarios={dadosFiltrados} />
      </main>
      <Footer />
    </div>
  );
}