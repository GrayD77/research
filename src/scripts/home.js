'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider} from 'react-redux';
import { createStore } from 'redux';

import MainComponent from './components/MainComponent';
import { rootReducer } from './store/reducers';

// ===================================================

const store = createStore(rootReducer);

// ===================================================

ReactDOM.render(<Provider store={store}>
        <MainComponent />
    </Provider>,
    document.querySelector('#app')
)