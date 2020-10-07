import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {increaseCurrentQuestion} from './store/actions/questionsAction'
import {questionsReducer} from './store/reducer/questionsReducer'

let store = createStore(questionsReducer)

store.subscribe(() => console.log(store.getState())) 

store.dispatch(increaseCurrentQuestion)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



