import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "chart.js/auto";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./appStore/store";

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("root")
);
