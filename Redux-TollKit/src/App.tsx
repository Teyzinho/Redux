// Importando os hooks do react-redux e o arquivo de estilo
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// Importando as ações increment e incrementAmount do arquivo redux-toolkit
import { increment, incrementAmount } from "./state/redux-toolkit";

// Importando o hook personalizado useAppSelector
import { useAppSelector } from './hooks';

// Definindo o componente App
function App() {
  // Usando o hook useAppSelector para obter o valor do contador do estado
  const count = useAppSelector((state) => state.counter.value);

  // Obtendo o dispatch da store usando o useDispatch
  const dispatch = useDispatch();

  // Função de clique para incrementar o contador em 1
  function handleClick() {
    dispatch(increment());
  }

  // Função de clique para incrementar o contador em uma quantidade específica (10)
  function handleClickAmount() {
    dispatch(incrementAmount(10));
  }

  // Renderização do componente
  return (
    <div className='App'>
      <div className='content'>
        {/* Botão para incrementar o contador em 1 */}
        <button onClick={handleClick}>+1</button>
        {/* Botão para incrementar o contador em 10 */}
        <button onClick={handleClickAmount}>+10</button>
        {/* Exibição do valor atual do contador */}
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
