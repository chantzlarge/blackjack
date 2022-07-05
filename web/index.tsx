import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// @ts-expect-error
import UIkit from 'uikit/dist/js/uikit.min.js'
// @ts-expect-error
import Icons from 'uikit/dist/js/uikit-icons.min.js'

import './styles.scss'

UIkit.use(Icons)

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<App />)
