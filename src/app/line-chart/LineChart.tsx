import * as d3 from "d3";
import React, { useEffect, useState, useRef } from "react";

type LineChartProps = {
  data: {
    MCU: { name: string; value: number }[];
    DCU: { name: string; value: number }[];
  };
  withHover?: boolean;
  withGridlines?: boolean;
  withCurveLine?: boolean;
  withDots?: boolean;
};

type Visibility = {
  MCU: boolean;
  DCU: boolean;
};

// Definer farver for hver datasæt
const colorScale = d3
  .scaleOrdinal<string>()
  .domain(["MCU", "DCU"])
  .range(d3.schemeSet2);

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
  const [visibility, setVisibility] = useState<Visibility>({
    MCU: true,
    DCU: true,
  });

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

    const margin = { top: 20, right: 40, bottom: 60, left: 40 };
    const width = containerWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const allData = [...data.MCU, ...data.DCU];
    const x = d3
      .scalePoint()
      .range([0, width])
      .domain(
        allData
          .map((d) => d.name)
          .filter((value, index, self) => self.indexOf(value) === index)
      );

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(allData, (d) => d.value)!]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(d3.max(allData, (d) => d.value));

    g.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

    g.append("g").call(yAxis);

    if (withGridlines) {
      g.selectAll(".grid-line")
        .data(y.ticks())
        .enter()
        .append("line")
        .classed("grid-line", true)
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", y)
        .attr("y2", y)
        .attr("stroke", "#ccc");
    }

    const generateLine = (
      dataset: { name: string; value: number }[],
      color: string,
      label: keyof Visibility
    ) => {
      if (!visibility[label]) return; // Only draw if visible

      const line = d3
        .line<{ name: string; value: number }>()
        .x((d) => x(d.name)!)
        .y((d) => y(d.value));

      if (withCurveLine) {
        line.curve(d3.curveMonotoneX);
      }

      const path = g
        .append("path")
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", colorScale(label as string))
        .attr("stroke-width", 2)
        .attr("d", line);

      if (withDots) {
        const dots = g
          .selectAll(`.dot-${label}`)
          .data(dataset)
          .enter()
          .append("circle")
          .attr("class", `dot dot-${label}`)
          .attr("cx", (d) => x(d.name)!)
          .attr("cy", (d) => y(d.value))
          .attr("r", 5)
          .attr("fill", colorScale(label));

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

      return path; // Return the path for possible manipulation later
    };

    // Generate lines for each dataset
    generateLine(data.MCU, "MCU", "MCU");
    generateLine(data.DCU, "DCU", "DCU");

    // Add a legend below the chart
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${margin.left}, ${height + margin.top + 30})`
      ); // Positioning the legend below the chart

    legend
      .selectAll(null)
      .data(["MCU", "DCU"])
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100) // Horizontal spacing
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (d) => colorScale(d))
      .on("click", (event, d) => {
        // Add click handler to toggle visibility
        setVisibility((prev) => ({
          ...prev,
          [d as keyof typeof prev]: !prev[d as keyof typeof prev],
        }));
      })
      .on("mouseenter", function (event, d) {
        d3.select(this).classed("stroke-2 stroke-gray-400", true);
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).classed(`stroke-2 stroke-gray-400`, false);
      });

    legend
      .selectAll(null)
      .data(["MCU", "DCU"])
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 100 + 24)
      .attr("y", 9) // Vertically align text
      .attr("dy", ".35em")
      .text((d) => d)
      .on("click", (event, d) => {
        // Add same click handler to text
        setVisibility((prev) => ({
          ...prev,
          [d as keyof typeof prev]: !prev[d as keyof typeof prev],
        }));
      });
  }, [
    data,
    withGridlines,
    withCurveLine,
    containerWidth,
    withDots,
    withHover,
    visibility,
  ]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
