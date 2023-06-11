# Redux

Redux é uma biblioteca de gerenciamento de estado amplamente usada em aplicações JavaScript. Ele segue o padrão Flux e é comumente usado com bibliotecas como React.

<img src="https://www.alura.com.br/artigos/assets/estados-globais-diferencas-redux-context-api/imagem2.gif"/>

A ideia central do Redux é armazenar o estado da aplicação em um único objeto chamado "store". O estado é imutável, o que significa que não pode ser alterado diretamente. As alterações no estado são feitas por meio de objetos chamados "actions". Cada action descreve uma mudança específica no estado.

Quando uma action é despachada, ela é enviada para uma função chamada "reducer". O reducer é responsável por receber a action e atualizar o estado de acordo com a mudança solicitada. O reducer é uma função pura, o que significa que não deve ter efeitos colaterais e deve retornar uma nova cópia do estado atualizado.

As mudanças no estado são propagadas para os componentes da aplicação por meio de "conectores" como o "Provider" no caso do React. Os componentes podem se inscrever para receber atualizações do estado do Redux e atualizar sua exibição quando o estado é alterado.

Essa arquitetura unidirecional do Redux torna o fluxo de dados previsível e facilita o rastreamento de mudanças no estado da aplicação. Além disso, permite que o estado seja acessado e atualizado de forma consistente em toda a aplicação, mesmo em componentes distantes um do outro.

- *Actions* são funções que alteram algum estado dentro da aplicação.
- *Reducers* são funções que recebem um estado e o atualizam com a devida *Action*.
- *Store* é onde os estados ficam guardados.
- *Dispatch* é quem presta atenção em eventos dentro da aplicação (trata-se de um *event listener* ou "ouvinte de eventos" do Redux). Ou seja, quando um evento for chamado - um clique em botão, por exemplo -, ele executa um *reducer* com a devida *action*.
