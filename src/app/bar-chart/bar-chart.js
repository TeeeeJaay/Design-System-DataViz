// Data and configuration
const data = [
  { name: "Tony", value: 9 },
  { name: "Peter", value: 6 },
  { name: "Pietro", value: 1 },
  { name: "Steve", value: 7 },
  { name: "Thor", value: 8 },
];

const colorScale = d3.scaleOrdinal(d3.schemeSet2);

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
let containerWidth = document.getElementById("chart").clientWidth;
const height = 400 - margin.top - margin.bottom;
let svg = d3.select("#chart").append("svg");

function resize() {
  containerWidth = document.getElementById("chart").clientWidth;
  updateChart();
}
window.addEventListener("resize", resize);

function updateChart() {
  svg.selectAll("*").remove(); // Clear previous SVG content

  svg
    .attr("width", containerWidth)
    .attr("height", height + margin.top + margin.bottom);

  let g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  let sortedData = [...data];
  //udkommenter eller slet hvis du ikke ønsker rangering baseret på værdien
  sortedData.sort((a, b) => b.value - a.value);

  // Scale setup
  const x = d3
    .scaleBand()
    .rangeRound([0, containerWidth - margin.left - margin.right])
    .padding(0.1)
    .domain(sortedData.map((d) => d.name));

  const y = d3
    .scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(sortedData, (d) => d.value * 1.2)]);

  //udkommenter eller slet hvis du ikke ønkser gridlines

  const yAxisTicks = y.ticks().filter((tick) => tick !== 0);
  g.selectAll(".grid-line")
    .data(yAxisTicks)
    .enter()
    .append("line")
    .attr("class", "grid-line")
    .attr("x1", 0)
    .attr("x2", containerWidth - margin.left - margin.right)
    .attr("y1", (d) => y(d))
    .attr("y2", (d) => y(d))
    .attr("stroke", "#ccc");

  //

  // Bars
  g.selectAll(".bar")
    .data(sortedData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.value))
    .attr("fill", (d, i) => colorScale(i))

    //udkommenter eller slet hvis du ikke ønsker hover effekt
    .on("mouseenter", function (event, d) {
      const activeBar = d3.select(this);
      activeBar.classed("stroke-gray-400", true);
      d3.selectAll(".bar")
        .filter((p) => p !== d)
        .classed("opacity-50", true);

      g.append("text")
        .attr("class", "bar-text")
        .attr("x", x(d.name) + x.bandwidth() / 2)
        .attr("y", y(d.value) - 5)
        .attr("text-anchor", "middle")
        .text(d.value);
    })
    .on("mouseleave", function (event, d) {
      d3.selectAll(".bar")
        .classed("opacity-50", false)
        .classed("stroke-gray-400", false);
      g.selectAll(".bar-text").remove();
    });
  ////

  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));
  g.append("g").call(d3.axisLeft(y));
}

updateChart(); // Initial chart rendering
