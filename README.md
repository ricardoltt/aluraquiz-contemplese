# Imersão React Next.Js Alura![File:React-icon.svg - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png)![File:Nextjs-logo.svg - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/100px-Nextjs-logo.svg.png)

# Sobre a Imersão

O objetivo da imersão é desenvolver uma aplicação de um Quiz, de qualquer tema escolhido, utilizando as tecnologias React e Next.Js e Styled Components. 



## Meu projeto

O meu Quiz foi baseado no trabalho da nutricionista do [@contemple.se](https://www.instagram.com/contemple.se/), que é especializada em Comportamento Alimentar. Confira o projeto [aqui!](https://quiz-contemplese.ricardoltt.vercel.app/)



## Primeira Aula

Nessa primeira aula de **React** criamos uma página inicial e colocamos no ar com a ajuda do Vercel! Utilizamos **styled-components** para criar componentes com estilo e diversos recursos do **Next.js** para dar o código inicial do projeto e gerar os arquivos de *build*.

<details><summary><b>Conteúdo detalhado da primeira aula:</b></summary>

- Iniciar um projeto com o *boilerplate* do React com Next.js e styled-components;

- Criar componentes React usando styled-components;

- Implementar tema (*theme*) para a interface;

- Fornecer as informações de tema e dados do quiz através de uma base de dados "mockada";

- Usaremos o Next.js para criar a tag `<head>` e as meta-infos necessárias;

- Faremos a publicação (*deploy*) na Vercel.

  

  Resultado:

  ![Gif tela aula 1](https://github.com/ricardoltt/aluraquiz-contemplese/blob/main/src/assets/gifAula1.gif)

  </details>



## Segunda Aula

Aprendemos como lidar com os estados (*states*) do **React** através dos **React hooks**, entendemos o que é uma **SPA**(Single Page Application), criamos rotas dentro da nossa aplicação, utilizamos **ESLint** e evoluímos nossos componentes. Eu realizei uma alteração no design da página para melhorar a interação do usuário.

<details><summary><b>Conteúdo detalhado da segunda aula:</b></summary>

- Instalar e rodar o Eslint, biblioteca de *linting* para JS;

- Entender o que é uma SPA;

- Criar componentes complexos com styled-components;

- Utilizar *props* com os componentes;

- Capturar de eventos em formulários (como clique);

- Gerenciar estado (*state*) de componentes com *hooks*;

- Passar dados em URLs através de `query params`;

- Utilizar `next/router` para implementação de rotas;

  

  Resultado:

  ![Gif tela aula 2](https://github.com/ricardoltt/aluraquiz-contemplese/blob/main/src/assets/gifAula2.gif)

  </details>

  ## Terceira Aula

  Nesta aula reforçamos um dos temas principais do React: o gerenciamento de estados e do ciclo de vida dos componentes. Alteramos estados e identificamos para momento do ciclo, com isso foi possível atualizar cada componente, alterar os componentes da tela e adicionar efeitos.
  Para isso, associamos as ferramentas do React (hooks, componentes e JSX) à lógica do JavaScript moderno para carregar as questões e alternativas do nosso quiz.

  <details><summary><b>Conteúdo detalhado da terceira aula:</b></summary>

  - Criar o componente <Input>

  - Trabalhar com as propriedades (props) dos componentes

  - Garantir a tipagem das propriedades com a biblioteca prop-types

  - Criar a página de quiz e seus componentes

  - Criar componente <LoadingWidget> a partir do <Widget>

  - Exibir as perguntas e alternativas na tela a partir do arquivo db.json

  - Criar formulários para gerenciar as alternativas

  - Trabalhar com os estados (states) da página de quiz para alternar carregamento, questões e resultado

  - Entender o ciclo de vida dos componentes do React

  - utilizar useEffects() para adicionar ações ao componente da tela de quiz

  </details>

  ## Quarta Aula

  Finalizamos a página de quiz, com todos os passos necessários para jogar: selecionar a alternativa, receber feedback na tela em caso de erro ou acerto, contagem de pontos e exibição da tela de resultados.
  Durante o desenvolvimento, entendemos mais sobre o funcionamento das props, como trabalhar com mais de uma instância do mesmo componente na tela, pensar na lógica para capturar cliques, tratar os resultados e engatilhar mudanças de estado a cada ação do usuário.
  Para que publicar o meu quiz e divulgar outros quizzes na tela, começamos com as ferramentas do Next.js para criação de endpoints e manejo de requisições e respostas.

  <details><summary><b>Conteúdo detalhado da quarta aula:</b></summary>

  - Desenvolver o algoritmo de seleção de alternativa para cada pergunta

  - Statements x expressões no React

  - Ver mais sobre props do React e a prop key

  - Manejo de estados com a renderização de várias instâncias de um mesmo componente

  - Lógica da seleção de alternativas, habilitação do botão e troca de pergunta (utilizando estados, atributos do HTML e índices da array)

  - Lógica da contagem de pontos com alteração de estado

  - Atualização dos pontos com o ciclo de atualização do React

  - Exibir a tela de resultados com a soma dos pontos e as alternativas escolhidas ao final das perguntas

  - Usar atributo data-[] para passar informações de estilo para o componente das alternativas

  - Criar lambda servers com Next.js para retornar endpoints

  - Passar configurações de CORS para poder acessar quizes externos

  </details>

  ## Quinta Aula

  Aula final desta Imersão! Para fechar, utilizamos os poderes do Next.js para criar conteúdos dinâmicos a partir de templates e fazer o gerenciamento destas páginas. Utilizamos também animações com Framer Motion para dar movimento para a montagem dos componentes.

<details><summary><b>Conteúdo detalhado da quinta aula:</b></summary>

- Listar endereços dos quizes da galera na página principal, a partir do arquivo db.json

- Reaproveitar o componente de Widget

- Acrescentar botões para os quizes da galera

- Criar rotas com parâmetros dinâmicos com Next.js

- Usar métodos de otimização por SSR para criar páginas dinâmicas

- Trabalhar com promessas utilizando a Fetch API e Promises

- Organizar o projeto com a pasta screens para definir leiautes de páginas

- Passar para a página de quiz as props dos quizes externos

- Usar o Framer Motion para criar animações de entrada para os widgets

  </details>

  Resultado final:

  ![Gif tela final](https://github.com/ricardoltt/aluraquiz-contemplese/blob/main/src/assets/gifAulaFinal.gif)


Agradecimento especial a [Alura](https://www.alura.com.br/) pela semana incrível de Imersão.


### 💻 Tecnologias utilizadas

- React
- Next.Js
- Styled Components
- JavaScript
- ESLint

------

### Let's code! 🚀

Made with love by **Ricardo Temoteo** ❤️ Me adiciona no [Linkedin!](https://www.linkedin.com/in/ricardoltt/)



