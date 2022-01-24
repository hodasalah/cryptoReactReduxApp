import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
	const { data, isFetching } = useGetExchangesQuery();
	const exchangesList = data
		? data?.data?.exchanges
		: [
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/-zdvbieRdZ+binance",
					uuid: "-zdvbieRdZ",
					name: "Binance",
					iconUrl:
						"https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
					numberOfMarkets: 3,
					volume: "776337030.2052088",
					rank: 1,
					marketShare: "12.22",
					verified: true,
					recommended: true,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHp8eCjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHp33CjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHpklCjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHp65eCjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHp99CjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
				{
					coinrankingUrl:
						"https://coinranking.com/exchange/XHp8eCjIDc+zb",
					uuid: "XHp10eCjIDc",
					name: "ZB",
					iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/usdt.svg",
					lastTickerCreatedAt: 1546960123000,
					numberOfMarkets: 128,
					volume: "693976176.906341",
					rank: 2,
					marketShare: "10.92",
					verified: false,
					recommended: false,
					description:
						"Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.",
				},
		  ];
	if (isFetching) return <Loader />;

	return (
		<>
			<Row style={{ margin: "10px 0 20px 0" }}>
				<Col span={6}>Exchanges</Col>
				<Col span={6}>24h Trade Volume</Col>
				<Col span={6}>Markets</Col>
				<Col span={6}>Change</Col>
			</Row>
			<Row>
				{exchangesList.map((exchange) => (
					<Col span={24} key={exchange.uuid}>
						<Collapse>
							<Panel
								key={exchange.uuid}
								showArrow={false}
								header={
									<Row key={exchange.uuid}>
										<Col span={6}>
											<Text>
												<strong>
													{exchange.rank}.
												</strong>
											</Text>
											<Avatar
												className="exchange-image"
												src={exchange.iconUrl}
											/>
											<Text>
												<strong>{exchange.name}</strong>
											</Text>
										</Col>
										<Col span={6}>
											${millify(exchange.volume)}
										</Col>
										<Col span={6}>
											{millify(exchange.numberOfMarkets)}
										</Col>
										<Col span={6}>
											{millify(exchange.marketShare)}%
										</Col>
									</Row>
								}
							>
								{HTMLReactParser(exchange.description || "")}
							</Panel>
						</Collapse>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Exchanges;
