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
const withLabels = true;
const withLegend = true;
const withHover = true;

// Equivalent logic of React component
const MARGIN = 30;
const radius = Math.min(width, height) / 2 - MARGIN;
const innerRadius = radius / 4;
const colorScale = d3.scaleOrdinal(d3.schemeSet2);
const legendContainer = document.getElementById("legendContainer");

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

const arcPathGenerator = d3.arc().innerRadius(innerRadius).outerRadius(radius);

const paths = g
  .selectAll("path")
  .data(pieData)
  .enter()
  .append("path")
  .attr("d", arcPathGenerator)
  .attr("fill", (d, i) => colorScale(i.toString()))
  .on("mouseenter", function (event, d) {
    if (withHover) {
      d3.select(this).classed("scale-02", true);
      d3.selectAll("path")
        .filter((p) => p !== d)
        .classed("opacity-50", true);
    }
  })
  .on("mouseleave", function () {
    if (withHover) {
      d3.selectAll("path").classed("opacity-50", false);
      d3.select(this).classed("scale-02", false);
    }
  });
const arcLabelGenerator = d3
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(radius)
  .padAngle(0.01)
  .padRadius(innerRadius);

const labelsContainer = document.getElementById("labelsContainer");

pieData.forEach((d, index) => {
  const [labelX, labelY] = arcLabelGenerator.centroid(d);
  const x = labelX + width / 2;
  const y = labelY + height / 2;

  const label = document.createElement("div");
  label.className = "flex flex-col items-center text-zinc-800";
  label.style.position = "absolute";
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
  label.style.transform = "translate(-50%, -50%)";
  label.style.pointerEvents = "none";

  if (withLabels) {
    const name = document.createElement("div");
    name.className = "font-semibold text-lg";
    name.textContent = d.data.name;
    label.appendChild(name);

    const value = document.createElement("div");
    value.textContent = percentageLabel
      ? `${(d.data.value * 100).toFixed(1)}%`
      : `${d.data.value} film`;
    label.appendChild(value);
  }

  labelsContainer.appendChild(label);
});

// Code to render legend
if (withLegend) {
  data.forEach((d, i) => {
    const legendItem = document.createElement("div");
    legendItem.className = "legend-item flex items-center mb-2";
    const legendColorBlock = document.createElement("div");
    legendColorBlock.className = "legend-color-block";
    legendColorBlock.style.backgroundColor = colorScale(i.toString());
    legendColorBlock.style.width = "20px";
    legendColorBlock.style.height = "20px";
    legendColorBlock.style.marginRight = "10px";
    legendItem.appendChild(legendColorBlock);
    const legendText = document.createElement("div");
    legendText.textContent = d.name;
    legendItem.appendChild(legendText);
    legendContainer.appendChild(legendItem);
  });
}
