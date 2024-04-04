import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from './redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
