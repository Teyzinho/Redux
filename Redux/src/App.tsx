import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // Acessa o valor do estado 'counter' utilizando o hook 'useSelector' do React Redux
  const count = useSelector(state => state.counter.value);

  // Cria uma instância do despachante (dispatch) para enviar ações ao Redux
  const dispatch = useDispatch();

  // Função chamada quando o botão "+1" é clicado
  function handleClick() {
    // Envia uma ação para incrementar o contador
    dispatch({ type: 'counter/increment' });
  }

  // Função chamada quando o botão "+10" é clicado
  function handleClickAmount() {
    // Envia uma ação para incrementar o contador em uma quantidade específica
    dispatch({ type: 'counter/incrementAmount', payload: 10 });
  }

  return (
    <div className='App'>
      <div className='content'>
        <button onClick={handleClick}>+1</button>
        <button onClick={handleClickAmount}>+10</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
