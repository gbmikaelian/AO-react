import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import 'element-theme-default';
import './index.css';

render(
    <AppContainer>
        <Provider store={configureStore}>
            <RootContainer/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}
serviceWorker.unregister();
