import React, { useState, useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
	"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
	const [cryptoNews, setCryptoNews] = useState(null);
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	const { data: cryptoData } = useGetCryptoQuery(100);
	useEffect(() => {
		setCryptoNews(data);
	}, [data]);
	console.log(data);
	if (!cryptoNews) return <Loader />;
	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						className="select-news"
						showSearch
						placeholder="Select crypto"
						optionFilterProp="children"
						onChange={(val) => setNewsCategory(val)}
						filterOption={(input, option) =>
							option.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="Cryptocurrency">Cryptocurrency</Option>
						{cryptoData?.data.coins.map((coin) => (
							<Option value={coin.name} key={Math.random()}>
								{coin.name}
							</Option>
						))}
					</Select>
				</Col>
			)}
			{cryptoNews?.value?.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable className="news-card">
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title
									className="news-title"
									level={5}
									style={{ fontWeight: "bold" }}
								>
									{news.name}
								</Title>
								<img
									src={
										news?.image?.thumbnail?.contentUrl ||
										demoImage
									}
									alt={news.name}
									style={{
										maxWidth: "200px",
										maxHeight: "100px",
										padding: "5px 10px",
									}}
								/>
							</div>
							<p>
								{news.description.length > 100
									? `${news.description.substring(0, 100)}...`
									: news.description}
							</p>
							<div className="provider-container">
								<div>
									<Avatar
										src={
											news.provider[0]?.image?.thumbnail
												?.contentUrl || demoImage
										}
										alt={news.name}
									/>
									<Text className="provider-name">
										{news.provider[0]?.name}
									</Text>
								</div>
								<Text>
									{moment(news.datePublished)
										.startOf("ss")
										.fromNow()}
								</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default News;
