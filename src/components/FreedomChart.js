import { VictoryPie, VictoryLegend } from "victory"
import React, { useState, useEffect } from "react"
import axios from "axios"
import "./CSS/freedom.css"

export default function FreedomChart() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetch = async () => {
			const res = await axios(
				"https://enigmatic-temple-08680.herokuapp.com/page/1/10"
			)
			setData(res.data)
		}
		fetch()
	}, [])

	const handleCountryData = () => {
		return (
			data &&
			data.map((elm) => {
				return { name: elm["Country or region"] }
			})
		)
	}

	const handleFreedomData = () => {
		return (
			data &&
			data.map((elm) => {
				return elm["Freedom to make life choices"]
			})
		)
	}

	return (
		<div className="freedom-container" id="freedom">
			<div className="freedom-container_info">
				<img src={require("./CSS/freedom.svg")}></img>
				<h5>Freedom to Make Life Choices</h5>
				<p>
					Here shows the data for the top ten countries that rank in freedom to
					make life choices. the data shows the national average of binary
					responses to the GWP question, "are you satisfied or dissatisfies with
					your freedom to choose what you do in life?"
				</p>
			</div>

			<div className="freedom-chart">
				<VictoryPie
					innerRadius={0}
					colorScale={[
						"green",
						"orange",
						"gold",
						"cyan",
						"navy",
						"blue",
						"red",
						"skyblue",
						"brown",
						"pink",
					]}
					labelRadius={({ innerRadius }) => innerRadius + 100}
					style={{
						labels: { fill: "white", fontSize: 15, fontWeight: "bold" },
					}}
					data={handleFreedomData()}
					labels={handleFreedomData()}
				/>
			</div>
			<div className="freedom-legend">
				<VictoryLegend
					orientation="vertical"
					gutter={0}
					height={300}
					width={300}
					data={handleCountryData()}
					colorScale={[
						"green",
						"orange",
						"gold",
						"cyan",
						"navy",
						"blue",
						"red",
						"skyblue",
						"brown",
						"pink",
					]}
				/>
			</div>
		</div>
	)
}
