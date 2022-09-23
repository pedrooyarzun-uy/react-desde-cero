import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { CounterApp } from './useState/CounterApp';
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
//import { SimpleForm } from './useEffect/SimpleForm';
import { FormWithCustomHook } from './useEffect/FormWithCustromHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <FormWithCustomHook/>
  
);
