import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	CryptoDetails,
	Exchanges,
	Cryptocurrencies,
	HomePage,
	News,
} from "./components";

import "./app.css";

function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route path="/" exact element={<HomePage />} />

							<Route
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>

							<Route path="/exchanges" element={<Exchanges />} />

							<Route path="/news" element={<News />} />

							<Route
								path="/crypto/:coinId"
								element={<CryptoDetails />}
							/>
						</Routes>
					</div>
				</Layout>

				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						Copyright © 2021
						<Link to="/">Cryptoverse Inc.</Link> <br />
						All Rights Reserved.
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;
