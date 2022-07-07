import React from "react";
import data from "../data/Movies.json";
import { BarGraph } from "react-d3-bar-graph";


const all2020movies = data.filter((d) => d.release_year === 2022 && d.type === "MOVIE");
//find the top 5 movies of 2020 and put them in an array
const fiveMovies = all2020movies
  .sort((a, b) => b.imdb_score - a.imdb_score)
  .slice(0, 5);

console.log(fiveMovies);

const TopMovies = () => {
  return (
    <div>
     <BarGraph
      width={400}
      height={500}
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
      title="What are the 5 top movies of 2022 on netflix (IMDB Rating)"
			titleStyles={{color: '#d62828'}}
      xAxisSlanted={true}
    />
    </div>
  );
}
export default TopMovies;