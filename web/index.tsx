import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
// @ts-expect-error
import UIkit from 'uikit/dist/js/uikit.min.js'
// @ts-expect-error
import Icons from 'uikit/dist/js/uikit-icons.min.js'
import './styles.scss'
import App from './app'
import { store } from './store'

UIkit.use(Icons)

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
)
