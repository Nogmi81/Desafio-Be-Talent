# Desafio Be Talent
Projeto desenvolvido para um desafio proposto pela Be Talent

# Projeto de Busca de Funcionários

Este projeto é uma aplicação React que permite buscar informações de funcionários.

## Funcionalidades

-   Busca de funcionários por nome, cargo e telefone.
-   A busca é efetuada a partir de 1 (um) caractere.
-   Exibição de todos os funcionários caso a busca esteja vazia.
-   Sanitização de entrada para prevenir injeção de código malicioso (como os caracteres <, >, aspas ' e " e &).
-   No caso do descumprimento da regra acima, o input exibe uma mensagem ao usuário: #Caractere NÃO permitido!#.
-   Validação de entrada para limitar o comprimento do texto de busca (até 30 caracteres, ultrapassando esse limite o input não aceita mais inserção).
-   A logo quando o mouse sobre ela aplica o efeito de opacidade.
-   O input quando em foco exibe uma borda azul.
-   No caso de redimensionamento da tela (menor que 510px) OU em mobile a tabela é ajustada para exibir apenas os campos FOTO e NOME. E uma opção de menu suspenso é disponibilizado para o usuário visualizar os detalhes dos outros campos (CARGO,	DATA DE ADMISSÃO eTELEFONE).

## Como Executar

1.  Clone o repositório: `git clone https://github.com/Nogmi81/Desafio-Be-Talent.git`

## Estrutura do Projeto

-   `src/pages/page.js`: Componente principal da aplicação.
-   `src/componentes`: Pasta com componentes reutilizáveis.
-   `src/service`: Pasta com funções para buscar dados de funcionários.
-   `src/styles`: Pasta com estilos CSS.
-   `src/public`: Pasta com imagens do projeto.
-   `src/public/data`: Pasta contendo JSON.

## Tecnologias Utilizadas

-   React
-   JavaScript
-   JSON
-   CSS Modules

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
