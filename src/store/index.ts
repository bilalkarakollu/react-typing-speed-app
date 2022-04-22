import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameSlice from './slices/gameSlice';

export const store = configureStore({
    reducer: {
        game: gameSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;