import React from 'react'
import List from './components/List/List'
import Navbar from './components/Nav/Navbar'
import './reset.css'
import { Provider } from 'react-redux'
import store from './state/store'
function App() {
    return (
        <Provider store={store}>
            <Navbar  />
            <List />
        </Provider>
    )
}   

export default App