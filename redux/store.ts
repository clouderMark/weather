import {configureStore} from '@reduxjs/toolkit';
import {messageSlice} from './messageSlice';

export const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
