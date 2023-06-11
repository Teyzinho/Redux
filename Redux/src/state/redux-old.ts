import { createStore } from 'redux';

// Estado inicial da aplicação
const initialState = {
  counter: {
    value: 0
  }
};

// Função redutora que atualiza o estado com base nas ações recebidas
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment': {
      // Retorna um novo estado com o contador incrementado em 1
      return {
        ...state,
        counter: {
          value: state.counter.value + 1
        },
      };
    }
    case 'counter/incrementAmount': {
      // Retorna um novo estado com o contador incrementado pela quantidade especificada na ação
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        },
      };
    }
    default:
      // Retorna o estado atual se a ação não corresponder a nenhum caso
      return state;
  }
}

// Cria a store do Redux, passando a função redutora e uma extensão para o Redux DevTools
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
