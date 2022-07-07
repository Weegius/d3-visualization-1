// import * as d3 from "d3";
// import { useD3 } from "./useD3";
import data from "../data/Movies.json";
import { BarGraph } from "react-d3-bar-graph";

/* Filtering the data to only show movies from 2020, then sorting them by their imdb score, and then
slicing the top 5 movies. */
const all2020shows = data.filter((d) => d.release_year === 2022 && d.type === "SHOW");
//find the top 5 movies of 2020 and put them in an array
const fiveMovies = all2020shows
  .sort((a, b) => b.imdb_score - a.imdb_score)
  .slice(0, 5);

console.log(fiveMovies);

const TopShows = () => {
  return (
    <BarGraph
      width={400}
      height={400}
      yRange={10}
      xValue="title"
      yValue="imdb_score"
      data={fiveMovies}
      ticks={10}
      styles={{
        fill: "#d62828",
        "margin-top": "1300px",
      }}
      axisStyles={{
        color: "d62828",
        "font-size": "15px",
      }}
      title="What are the 5 top shows of 2022 on netflix (IMDB Rating)"
			titleStyles={{color: '#d62828'}}
      xAxisSlanted={true}
    />
  );
};
export default TopShows;

// function BarChart({ data }) {
// 	const ref = useD3((svg) => {
// 		const height = 500
// 		const width = 800
// 		const margin = { top: 20, right: 30, bottom: 30, left: 80 }

// 		const xScale = d3
// 			.scaleBand()
// 			.domain(data.map(d => d.title))
// 			.range([margin.left, width])
// 			.padding(0.125);

// 		const yScale = d3
// 			.scaleLinear()
// 			.domain([0, d3.max(data, d => d.imdb_score)])
// 			.rangeRound([height - margin.bottom, margin.top])

// 		const bottomAxis = d3.axisBottom(xScale)
// 		const leftAxis = d3.axisLeft(yScale)

// 		svg
// 			.select('.x-axis')
// 			.attr('transform', `translate(0, ${height - margin.bottom})`)
// 			.call(bottomAxis)

// 		svg
// 			.select('.y-axis')
// 			.attr('transform', `translate(${margin.left}, 0)`)
// 			.call(leftAxis)

// 		svg
// 			.select('.plot-area')
// 			.selectAll('.bar')
// 			.data(data)
// 			.enter()
// 			.append('rect')
// 			.attr('class', 'bar')
// 			.attr('x', d => xScale(d.title))
// 			.attr('width', xScale.bandwidth())
// 			.attr('y', d => yScale(d.imdb_score))
// 			.attr('height', d => yScale(0) - yScale(d.imdb_score))
// 	}, [JSON.stringify(data)])

//   return (
//     <svg
// 			ref={ref} // *** Don't forget to add this line! ***
//       style={{
//         height: 500,
//         width: "100%",
//         marginRight: "0px",
//         marginLeft: "0px",
//       }}
//     >
//       <g className="plot-area" />
//       <g className="x-axis" />
//       <g className="y-axis" />
//     </svg>
//   )
// }

// export default BarChart
