'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider} from 'react-redux';
import { createStore } from 'redux';

import MainComponent from './components/MainComponent';
import ResearchForm from './components/ResearchForm';

import { rootReducer } from './store/reducers';


import { EMITTER } from './emitter';

// ===================================================

const store = createStore(rootReducer);

// ===================================================

EMITTER.on('researchFormSubmit', globalOnSubmit);

function globalOnSubmit (data) {
    console.log('data :', data);
}

ReactDOM.render(<Provider store={store}>
        <ResearchForm />
    </Provider>,
    document.querySelector('#app')
)