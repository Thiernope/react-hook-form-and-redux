import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store, persistor } from "../context/redux/store.tsx";
import { PersistGate } from 'redux-persist/integration/react';
import { CounterContextProvider} from '../context/contextApi/Counter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CounterContextProvider>
    <App />
        </CounterContextProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)

