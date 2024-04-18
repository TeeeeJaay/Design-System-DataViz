import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type DataItem = {
  name: string;
  value: number;
};
type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};
const MARGIN = 30;

export default function PieChart({ width, height, data }: DonutChartProps) {
  const radius = Math.min(width, height) / 2 - MARGIN;
  const innerRadius = radius / 4;
  const ref = useRef(null);

  const colorScale = d3.scaleOrdinal(d3.schemeSet2);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .classed("pie-chart", true);

    // Fjerner eksisterende .pie-chart
    svg.selectAll(".pie-chart").remove();

    // Laver en gruppe
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pieGenerator = d3
      .pie<DataItem>()
      .sort(null)
      .value((d) => d.value);

    const pieData = pieGenerator(data);

    const arcPathGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    // Binder data til specifikke arcs
    g.selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arcPathGenerator)
      .attr("fill", (d, i) => colorScale(i));
  }, [data, width, height, radius, innerRadius]);

  return <svg ref={ref}></svg>;
}
