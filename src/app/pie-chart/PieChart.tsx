import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { mydatatype } from "@/types";

type DataItem = {
  name: string;
  value: number;
};

type DonutChartProps = {
  width: number;
  height: number;
  percentageLabel?: boolean;
  withLabels?: boolean;
  withLegend?: boolean;
  withHover?: boolean;
  data: DataItem[];
};

const MARGIN = 30;

export default function PieChart({
  width,
  height,
  data,
  percentageLabel,
  withLabels,
  withLegend,
  withHover,
}: DonutChartProps) {
  const radius = Math.min(width, height) / 2 - MARGIN;
  const innerRadius = radius / 4;
  const ref = useRef<SVGSVGElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  const [labels, setLabels] = useState<{ [key: string]: any }[]>([]);

  const colorScale = d3.scaleOrdinal(d3.schemeSet2);

  const updateLabelVisibility = (id: number, visible: boolean) => {
    setLabels((currentLabels) =>
      currentLabels.map((label) => ({
        ...label,
        visible: label.id === id ? visible : label.visible,
      }))
    );
  };

  useEffect(() => {
    if (!ref.current || !data) return; // Sikrer at ref og data er tilgængelige
    console.log("effecten er startet");

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .classed("pie-chart", true);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pieGenerator = d3
      .pie<DataItem>()
      .sort(null)
      .value((d) => d.value);

    const pieData = pieGenerator(data);

    const arcPathGenerator = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    const paths = g.selectAll("path").data(pieData);

    paths
      .enter()
      .append("path")
      .attr("d", arcPathGenerator)
      .attr("fill", (d, i) => colorScale(i.toString()))

      .on("mouseenter", function (event, d) {
        if (withHover) {
          d3.select(this).classed("scale-[1.02]", true);
          d3.selectAll("path")
            .filter((p) => p !== d)
            .classed("opacity-50", true);
          updateLabelVisibility(d.index, true);
        }
      })
      .on("mouseleave", function (event, d) {
        if (withHover) {
          d3.selectAll("path").classed("opacity-50", false);
          d3.select(this).classed("scale-[1.02]", false);
          updateLabelVisibility(d.index, false);
        }
        if (withLabels) {
          d3.selectAll("path").classed("opacity-50", false);
          d3.select(this).classed("scale-[1.02]", false);
          updateLabelVisibility(d.index, true);
        }
      });

    paths.exit().remove();

    const arcLabelGenerator = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .padAngle(0.01)
      .padRadius(innerRadius);

    const initialLabels = pieData.map((d, index) => {
      const [x, y] = arcLabelGenerator.centroid(d);
      return {
        id: index,
        position: { x: x + width / 2, y: y + height / 2 },
        name: d.data.name,
        value: percentageLabel
          ? `${(d.data.value * 100).toFixed(1)}%`
          : d.data.value.toString(),
        visible: withLabels, // Control visibility directly based on withLabels
      };
    });

    setLabels(initialLabels);

    if (withLegend) {
      // Create legend
      const legendContainer = d3.select(legendRef.current);
      legendContainer.selectAll("*").remove(); // Clear previous legend items

      const legendItems = legendContainer
        .selectAll(".legend-item")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "legend-item flex items-center mb-2");

      legendItems
        .append("div")
        .attr("class", "legend-color-block")
        .style("background-color", (d, i) => colorScale(i.toString()))
        .style("width", "20px")
        .style("height", "20px")
        .style("margin-right", "10px");

      legendItems.append("div").text((d) => d.name);
    } else {
      d3.selectAll(".legend-item").remove();
    }
  }, [
    data,
    width,
    height,
    withLegend,
    withLabels,
    withHover,
    percentageLabel,
    useEffect,
  ]);

  return (
    <div
      style={{ width: width, height: height }}
      className="relative flex justify-center"
    >
      <svg ref={ref} className="absolute top-0 left-0"></svg>
      {labels
        .filter((label) => label.visible)
        .map((label, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-zinc-800"
            style={{
              position: "absolute",
              left: `${label.position.x}px`,
              top: `${label.position.y}px`,
              transform: `translate(-50%, -50%)`,
              pointerEvents: "none", // Disable pointer events for labels
            }}
          >
            <div className=" font-semibold text-lg">{label.name}</div>
            <div>{label.value}</div>
          </div>
        ))}
      <div ref={legendRef} className="absolute bottom-[-20px] flex gap-2"></div>
    </div>
  );
}
