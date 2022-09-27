import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { CounterApp } from './useState/CounterApp';
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
//import { SimpleForm } from './useEffect/SimpleForm';
//import { FormWithCustomHook } from './useEffect/FormWithCustromHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './useRef/FocusScreen';
//import { Layout } from './useLayoutEffect/Layout';
//import { Memorize } from './memos/Memorize';
//import { MemoHook } from './memos/MemoHook';
//import { CallbackHook } from './memos/CallbackHook';
//import { Padre } from './tareas/tarea-memo/Padre';
//import './useReducer/intro-reducer'
import { TodoApp } from './useReducer/TodoApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <TodoApp/>
  
);
