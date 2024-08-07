import theme from "@/theme";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import 'antd/dist/antd.css';
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
