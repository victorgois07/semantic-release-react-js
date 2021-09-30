import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './containers/app/index.js'
import reportWebVitals from './config/reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18n from 'config/i18n'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
