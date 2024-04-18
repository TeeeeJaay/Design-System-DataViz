import * as d3 from "d3";
import React, { useEffect, useState, useRef } from "react";

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
  withHover: boolean;
  withGridlines: boolean;
  ranked: boolean;
};

const colorScale = d3.scaleOrdinal(d3.schemeSet2);

export default function BarChart({
  data,
  withHover,
  withGridlines,
  ranked,
}: BarplotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!svgRef.current) {
      svgRef.current = d3.select(containerRef.current).append("svg").node();
    }

    let sortedData = [...data];
    if (ranked) {
      sortedData.sort((a, b) => b.value - a.value);
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = containerWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(sortedData.map((d) => d.name));

    const y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(sortedData, (d) => d.value * 1.2)]);

    if (withGridlines) {
      const yAxisTicks = y.ticks().slice(1);
      g.selectAll(".grid-line")
        .data(yAxisTicks, (d) => d)
        .enter()
        .append("line")
        .attr("class", "grid-line")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", (d) => y(d))
        .attr("y2", (d) => y(d))
        .attr("stroke", "#ccc");
    }

    g.selectAll(".bar")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.name)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.value))
      .attr("fill", (d, i) => colorScale(i))
      .on("mouseenter", function (event, d) {
        if (withHover) {
          const activeBar = d3.select(this);

          activeBar.classed("stroke stroke-gray-400", true);

          d3.selectAll(".bar")
            .filter((p) => p !== d)
            .classed("opacity-50", true);

          g.append("text")
            .attr("class", "bar-text")
            .attr("x", x(d.name)! + x.bandwidth() / 2)
            .attr("y", y(d.value) - 5)
            .attr("text-anchor", "middle")
            .text(d.value);
        }
      })
      .on("mouseleave", function (event, d) {
        d3.selectAll(".bar").classed("opacity-50", false);
        g.selectAll(".bar-text").remove(); // Remove text when the mouse leaves
      });

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y));
  }, [data, withHover, withGridlines, containerWidth, ranked]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
