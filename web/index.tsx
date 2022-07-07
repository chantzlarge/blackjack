import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// @ts-expect-error
import UIkit from 'uikit/dist/js/uikit.min.js'
// @ts-expect-error
import Icons from 'uikit/dist/js/uikit-icons.min.js'
import { Provider } from 'react-redux'
import './styles.scss'
import { store } from './store'
import { CookiesProvider } from 'react-cookie'

UIkit.use(Icons)

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
)
