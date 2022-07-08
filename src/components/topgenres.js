import React from "react";
import data from "../data/Movies.json";
import { BarGraph } from "react-d3-bar-graph";

const all2022 = data.filter((d) => d.release_year === 2022);
const all2022Animation = all2022.filter((d) => d.genres.includes("animation"));
const top5Animation = all2022Animation
  .sort((a, b) => b.imdb_score - a.imdb_score)
  .slice(0, 5);

console.log(top5Animation);
const TopGenres = () => {
  return (
    <div>
      <BarGraph
        width={400}
        height={500}
        yRange={10}
        xValue="title"
        yValue="imdb_score"
        data={top5Animation}
        ticks={10}
        styles={{
          fill: "#d62828",
          "margin-top": "1300px",
        }}
        axisStyles={{
          color: "d62828",
          "font-size": "15px",
        }}
        title="Top 5 animated movies and shows of 2022"
        titleStyles={{ color: "#d62828" }}
        xAxisSlanted={true}
      />
    </div>
  );
};
export default TopGenres;
