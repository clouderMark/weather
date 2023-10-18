import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface IInitialState {
  message: string;
}

const initialState: IInitialState = {
  message: '',
};

export const messageSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const selectAlert = (state: RootState) => state.message;
