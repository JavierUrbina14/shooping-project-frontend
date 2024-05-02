/* global localStorage */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import i18next from 'i18next'
import englishDictionary from './languages/en.json'
import spanishDictionary from './languages/es.json'
import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import './styles.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') || 'es',
  resources: {
    en: {
      global: englishDictionary
    },
    es: {
      global: spanishDictionary
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <AppRouter />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
