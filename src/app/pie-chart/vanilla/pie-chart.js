// Define your data and options here
const width = 600;
const height = 600;

const data = [
  { name: "Fase 1", value: 6 },
  { name: "Fase 2", value: 6 },
  { name: "Fase 3", value: 11 },
  { name: "Fase 4", value: 15 },
];

const percentageLabel = false;
const withLabels = false;
const withLegend = true;
const withHover = true;

// Equivalent logic of React component
const MARGIN = 30;
const radius = Math.min(width, height) / 2 - MARGIN;
const innerRadius = radius / 4;
const colorScale = d3.scaleOrdinal(d3.schemeSet2);
const legendContainer = d3.selectAll("#legendContainer");

// D3 code to generate the chart
const svg = d3
  .select("#chartSVG")
  .attr("width", width)
  .attr("height", height)
  .classed("pie-chart", true);

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const pieGenerator = d3
  .pie()
  .sort(null)
  .value((d) => d.value);

const pieData = pieGenerator(data);
console.log(pieData);

const arcPathGenerator = d3.arc().innerRadius(innerRadius).outerRadius(radius);

const paths = g
  .selectAll("path")
  .data(pieData)
  .enter()
  .append("path")
  .attr("d", arcPathGenerator)
  .attr("fill", (d, i) => colorScale(i.toString()))
  //udkommenter hvis du ikke ønsker en hoverfunktion
  .on("mouseenter", function (event, d) {
    d3.select(this).classed("scale-02", true); //har du tailwind sat korrekt op, kan du bruge klassen "scale-[1.02]"
    d3.selectAll("path")
      .filter((p) => p !== d)
      .classed("opacity-50", true);
  })
  .on("mouseleave", function () {
    d3.selectAll("path").classed("opacity-50", false);
    d3.select(this).classed("scale-02", false);
  });
//

//udkommenter hvis du hverken bruger labels eller hover effekt
const arcLabelGenerator = d3
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(radius)
  .padAngle(0.01)
  .padRadius(innerRadius);

//udkommenter hvis du ikke bruger labels
pieData.forEach((d, index) => {
  const [labelX, labelY] = arcLabelGenerator.centroid(d);
  const x = labelX;
  const y = labelY;

  const label = g
    .append("g")
    .attr("class", "label-group")
    .classed(`${d.data.name} p-4 bg-white`, true);

  label
    .append("text")
    .attr("x", x)
    .attr("y", y)
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("font-size", "18")
    .attr("font-weight", "bold")
    .attr("class", "label-text")
    .text(d.data.name);

  label
    .append("text")
    .attr("x", x)
    .attr("y", y + 30)
    .attr("text-anchor", "middle")
    .attr("class", "label-value")
    .text(`${d.data.value} film`);
});

const legendItems = legendContainer
  .selectAll(".legend-item")
  .data(data)
  .enter()
  .append("div")
  .attr("class", "legend-item flex items-center mb-2");

legendItems
  .append("div")
  .style("background-color", (d, i) => colorScale(i.toString()))
  .classed("w-5 h-5 mr-1 rounded", true);

legendItems.append("div").text((d) => d.name);
