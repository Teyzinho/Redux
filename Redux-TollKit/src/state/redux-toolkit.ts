import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definindo a interface para o estado do contador
interface CounterState {
  value: number;
}

// Estado inicial da aplicação
const initialState: CounterState = {
  value: 0
};

// Criando o slice do reducer do contador
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Reducer para incrementar o contador em 1
    increment: (state) => {
      state.value += 1;
    },
    // Reducer para incrementar o contador em uma quantidade específica
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

// Exportando as actions geradas pelo slice
export const { increment, incrementAmount } = counterSlice.actions;

// Exportando o reducer do contador
export const counterReducer = counterSlice.reducer;
