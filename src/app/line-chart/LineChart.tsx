import * as d3 from "d3";
import { useMemo } from "react";
import React, { useEffect, useState, useRef } from "react";

type LineChartProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];
const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

export default function LineChart({ data }: LineChartProps) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // This effect sets up a ResizeObserver to adjust chart size based on its container
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
        setContainerHeight(entry.contentRect.height);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    if (containerWidth && containerHeight) {
      drawChart();
    }
  }, [data, containerWidth, containerHeight]);

  const drawChart = () => {
    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", containerWidth)
      .attr("height", containerHeight);

    const boundsWidth = containerWidth - MARGIN.left - MARGIN.right;
    const boundsHeight = containerHeight - MARGIN.top - MARGIN.bottom;

    const chart = svg
      .append("g")
      .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    // Y axis
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value+10) || 0])
      .range([boundsHeight, 0]);
    chart.append("g").call(d3.axisLeft(yScale));

    // X axis
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, boundsWidth])
      .padding(0.1);
    chart
      .append("g")
      .attr("transform", `translate(0,${boundsHeight})`)
      .call(d3.axisBottom(xScale));

    // Line
    const line = d3
      .line()
      .x((d) => xScale(d.name) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.value));

    chart
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors[0])
      .attr("stroke-width", 3)
      .attr("d", line);
  };

  useEffect(() => {
    // Clean up SVG to prevent duplicates
    return () => {
      d3.select(containerRef.current).select("svg").remove();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
