import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
// const userFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{}

const initialState={
    // openDrawer:{success:true},
    // userLogin:{userInfo:userFromStorage.data}
}
const composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(reducers,initialState,composeEnhances(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)