// Definere data

const data = [
  { name: "Fase 1", value: 6 },
  { name: "Fase 2", value: 6 },
  { name: "Fase 3", value: 11 },
  { name: "Fase 4", value: 15 },
];

//definere dimentionerne
const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const width = 600 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;
const radius = Math.min(width, height) / 2;
const innerRadius = radius / 4;

// definere farvepalletten
const colorScale = d3.scaleOrdinal(d3.schemeSet2);

//vælger svg'en fra html'en
const svg = d3.select("#chart-svg");

//laver en gruppe og placere den i svg'en
const g = svg.append("g").attr("transform", `translate(${300}, ${300})`);

//definere at arcs størrelse er baseret på value i data
const pieGenerator = d3
  .pie()
  .sort(null)
  .value((d) => d.value);

// Genererer pie data fra datasættet data
const pieData = pieGenerator(data);

// generere pathen for de enkelte pie slices
const arcPathGenerator = d3.arc().innerRadius(innerRadius).outerRadius(radius);

//udkommenter hvis du hverken bruger labels eller hover effekt
const arcLabelGenerator = d3
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(radius)
  .padRadius(innerRadius);
//

//tegner alle pie slices
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
    const [labelX, labelY] = arcLabelGenerator.centroid(d);
    const tooltip = g
      .append("text")
      .attr("x", labelX)
      .attr("y", labelY)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "18")
      .attr("font-weight", "bold")
      .attr("class", "hover-name")
      .classed("pointer-events-none", true)
      .text(d.data.name);
    g.append("text")
      .attr("x", labelX)
      .attr("y", labelY + 30)
      .attr("text-anchor", "middle")
      .attr("class", "hover-value")
      .text(`${d.data.value} film`)
      .classed("pointer-events-none", true);
  })
  .on("mouseleave", function () {
    d3.selectAll("path").classed("opacity-50", false);
    d3.select(this).classed("scale-02", false);
    g.selectAll(".hover-name").remove();
    g.selectAll(".hover-value").remove();
  });
//

//Tilføj hvis du altid vil have labels
/* 
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
    .attr("class", "label-name")
    .text(d.data.name);

  label
    .append("text")
    .attr("x", x)
    .attr("y", y + 30)
    .attr("text-anchor", "middle")
    .attr("class", "label-value")
    .text(`${d.data.value} film`);
}); */

//udkommenter hvis du ikke ønsker en legend
//vælger containeren
const legendContainer = d3
  .selectAll("#legend-container")
  .classed("flex gap-6", true);

//definere legenden
const legendItems = legendContainer
  .selectAll(".legend-item")
  .data(data)
  .enter()
  .append("div")
  .attr("class", "legend-item flex items-center mb-2");

//tilføjer firkant med farven tilhørende den enkelte værdi
legendItems
  .append("div")
  .style("background-color", (d, i) => colorScale(i.toString()))
  .classed("w-5 h-5 mr-1 rounded", true);

//tilføjer tekst med navnet tilhørende den enkelte værdi
legendItems.append("div").text((d) => d.name);
//
