import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

/*Para el correcto funcionamiento de las Rutas*/
import { BrowserRouter } from 'react-router-dom';

/* Para renderizar etiquetas script */
// import ScriptTag from 'react-script-tag';

/*Header y Footer*/
import Header from "./structure/Header";
import Footer from "./structure/Footer";

/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/core.css";
import "./css/custom.css";

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
	  	<Header />

    	<Main />

	  	<Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
