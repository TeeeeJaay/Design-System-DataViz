import * as d3 from "d3";
import React, { useEffect, useState, useRef } from "react";

type LineChartProps = {
  data: { name: string; value: number }[];
  withHover?: boolean;
  withGridlines?: boolean;
  withCurveLine?: boolean;
  withDots?: boolean;
};

const colorScale = d3.scaleOrdinal(d3.schemeSet2);

export default function LineChart({
  data,
  withHover,
  withGridlines,
  withCurveLine,
  withDots,
}: LineChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
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
    if (!tooltipRef.current) {
      tooltipRef.current = d3
        .select(containerRef.current)
        .append("div")
        .classed(
          "absolute hidden p-3 bg-white bg-opacity-80 border rounded pointer-events-none text-sm",
          true
        )
        .node();
    }

    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
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
      .scalePoint()
      .range([0, width])
      .domain(data.map((d) => d.name));

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => d.value * 1.2)!]);

    if (withGridlines) {
      const yAxisTicks = y.ticks().slice(1);
      g.selectAll(".grid-line")
        .data(yAxisTicks, (d) => d as number)
        .enter()
        .append("line")
        .attr("class", "grid-line")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", (d) => y(d))
        .attr("y2", (d) => y(d))
        .attr("stroke", "#ccc");
    }

    const line = d3
      .line<{ name: string; value: number }>()
      .x((d) => x(d.name)!)
      .y((d) => y(d.value));

    if (withCurveLine) {
      line.curve(d3.curveMonotoneX); // This makes the line smoother
    }

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colorScale("1"))
      .attr("stroke-width", 2)
      .attr("d", line);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colorScale("1"))
      .attr("stroke-width", 3)
      .attr("d", line);

    // Tilføjer cirkler på hvert datapunkt
    if (withDots) {
      const dots = g
        .selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", (d) => x(d.name)!)
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", colorScale("1"));
      if (withHover) {
        dots
          .on("mouseover", function (event, d) {
            d3.select(this).attr("r", 8);
            tooltip
              .html(`<strong>${d.name}</strong>: ${d.value}`)
              .classed("hidden", false)
              .style("top", `${event.pageY - 10}px`)
              .style("left", `${event.pageX + 10}px`);
          })

          .on("mouseout", function () {
            d3.select(this).attr("r", 5);

            tooltip.classed("hidden", true);
          });
      }
    }

    g.append("g").call(d3.axisLeft(y));
  }, [data, withGridlines, withCurveLine, containerWidth, withDots, withHover]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
