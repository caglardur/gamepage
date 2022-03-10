import ReactDOM from "react-dom"

import { store } from "./store/store"
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./index.css"

import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
