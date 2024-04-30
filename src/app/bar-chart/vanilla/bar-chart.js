// Data
const data = [
  { name: "Tony", value: 9 },
  { name: "Peter", value: 6 },
  { name: "Pietro", value: 1 },
  { name: "Steve", value: 7 },
  { name: "Thor", value: 8 },
];

// definere farvepalletten
const colorScale = d3.scaleOrdinal(d3.schemeSet2);

//vælger containeren og svg'en fra html'en
const container = d3.selectAll("#chart-container");
const svg = d3.select("#chart-svg");

//definere dimentionerne

const margin = { top: 20, right: 20, bottom: 40, left: 20 };
const height = 500 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;

function renderChart() {
  svg.selectAll("*").remove(); // Clear previous SVG content

  svg.attr("width", width).attr("height", height);

  //laver en gruppe og placere den i svg'en
  let g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  let sortedData = [...data];

  //udkommenter eller slet hvis du ikke ønsker rangering baseret på værdien
  sortedData.sort((a, b) => b.value - a.value);

  // definere akser
  const x = d3
    .scaleBand()
    .rangeRound([0, width])
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
    .attr("x2", width)
    .attr("y1", (d) => y(d))
    .attr("y2", (d) => y(d))
    .attr("stroke", "#ccc");
  //

  // definere barerne
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

  //tilføjer akser
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .attr("font-size", "16");

  g.append("g").call(d3.axisLeft(y));
}

renderChart();
