# Desafio Be Talent
Projeto desenvolvido para um desafio proposto pela Be Talent

# Projeto de Busca de Funcionários

Este projeto é uma aplicação React que permite buscar informações de funcionários.

## Funcionalidades

-   Busca de funcionários por nome, cargo e telefone.
-   A busca é efetuada a partir de 1 (um) caractere.
-   A busca filtra por qualquer caractere relacionado aos campos (nome, cargo e telefone). Ex: se for digitado 'ro' qualquer palavra que contenha essa sílaba será reportada, nesse exemplo trará da base tanto o nome: Roberto quanto os cargos Front-End. O mesmo ocorre com números, se for digitado por exemplo '78' há vários números na base de dados que tem esses dois digitos. Todos serão exibidos.
-   Exibição de todos os funcionários caso a busca esteja vazia.
-   Sanitização de entrada para prevenir injeção de código malicioso (como os caracteres <, >, aspas ' e " e &).
-   No caso do descumprimento da regra acima, o input exibe uma mensagem ao usuário: ##Caractere NÃO permitido!.
-   Validação de entrada para limitar o comprimento do texto de busca (até 30 caracteres, ultrapassando esse limite o input não aceita mais inserção).
-   A logo quando o mouse sobre ela aplica o efeito de opacidade.
-   O input quando em foco exibe uma borda azul.
-   No caso de redimensionamento da tela (menor que 510px) OU em mobile a tabela é ajustada para exibir apenas os campos FOTO e NOME. E uma opção de menu suspenso é disponibilizada para o usuário visualizar os detalhes dos outros campos (CARGO,	DATA DE ADMISSÃO e TELEFONE).

## Como Executar

1.  Clone o repositório: `git clone https://github.com/Nogmi81/Desafio-Be-Talent.git`
2.  Acesse pelo link: https://desafio-be-talent.vercel.app/

## Estrutura do Projeto

-   `src/pages/page.js`: Componente principal da aplicação.
-   `src/componentes`: Pasta com componentes reutilizáveis.
-   `src/service`: Pasta com funções para buscar dados de funcionários.
-   `src/public`: Pasta com imagens do projeto.
-   `src/public/data`: Pasta contendo JSON.

  ## Testes

  -   O link on-line hospedado no Vercel foi testado nos navegadores: Chrome, Edge, Firefox e Opera. 
  -   Foi testado em mobile
  -   Foi testado o redimensionamento de tela nos navegadores citados acima

  Em todos os testes apresentou comportamento como o esperado.

## Tecnologias Utilizadas

-   React
-   JavaScript
-   JSON
-   CSS Modules

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
