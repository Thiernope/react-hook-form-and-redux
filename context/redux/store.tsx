import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import todoSlice from './todoSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
 key: 'root',
 storage
}

const persistedCounterSlice = persistReducer(persistConfig, counterSlice);
const persistedTodoSlice = persistReducer(persistConfig, todoSlice)

const store = configureStore({
    reducer: {
     counterSlice: persistedCounterSlice,
     todoSlice: persistedTodoSlice
    }
})
const persistor = persistStore(store);

export {store, persistor}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>