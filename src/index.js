import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import {reducer} from "./reducer.js";

const Settings = {
  ERRORS_COUNT: 3
};

const store = createStore(reducer);
const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={questions} />
    </Provider>,
    root
);
