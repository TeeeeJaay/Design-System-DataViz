// Data
const data = {
  MCU: [
    { name: "2008", value: 2 },
    { name: "2009", value: 0 },
    { name: "2010", value: 1 },
    { name: "2011", value: 2 },
    { name: "2012", value: 1 },
    { name: "2013", value: 2 },
    { name: "2014", value: 2 },
    { name: "2015", value: 2 },
    { name: "2016", value: 2 },
    { name: "2017", value: 3 },
    { name: "2018", value: 3 },
    { name: "2019", value: 3 },
    { name: "2020", value: 0 },
    { name: "2021", value: 4 },
    { name: "2022", value: 2 },
    { name: "2023", value: 3 },
  ],
  DCEU: [
    { name: "2008", value: 0 },
    { name: "2009", value: 0 },
    { name: "2010", value: 0 },
    { name: "2011", value: 0 },
    { name: "2012", value: 0 },
    { name: "2013", value: 1 },
    { name: "2014", value: 0 },
    { name: "2015", value: 0 },
    { name: "2016", value: 2 },
    { name: "2017", value: 2 },
    { name: "2018", value: 1 },
    { name: "2019", value: 1 },
    { name: "2020", value: 2 },
    { name: "2021", value: 1 },
    { name: "2022", value: 2 },
    { name: "2023", value: 2 },
  ],
};

// definere hvilke linjer som er synlige
let visibility = { MCU: true, DCEU: true };

// definere farvepalletten
const colorScale = d3
  .scaleOrdinal()
  .domain(["MCU", "DCEU"])
  .range(d3.schemeSet2);

//vælger containeren og svg'en fra html'en
const container = document.getElementById("chart-container");
const svg = d3.select("#chart-svg");

//definere dimentionerne
const margin = { top: 20, right: 40, bottom: 60, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

//hvis du ikke bruger tooltips kan dette undlades
const tooltip = d3
  .select(container)
  .append("div")
  .classed(
    "absolute hidden p-3 bg-white bg-opacity-80 border rounded pointer-events-none text-sm",
    true
  );
//

//definere funktionen som tegner grafen
function renderChart() {
  //fjerne eventuelt gamle grafer
  svg.selectAll("*").remove();

  svg.attr("width", width).attr("height", height);

  //laver en gruppe og placere den i svg'en
  let g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Filtrer datasæt baseret på synlighed
  let filteredData = {
    MCU: visibility.MCU ? data.MCU : [],
    DCEU: visibility.DCEU ? data.DCEU : [],
  };

  // Samler alle synlige data
  let allVisibleData = [].concat(filteredData.MCU, filteredData.DCEU);

  // Definer x- og y-akser
  let x = d3
    .scalePoint()
    .range([0, width])
    .domain(allVisibleData.map((d) => d.name));

  let y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(allVisibleData, (d) => d.value)]);

  let xAxis = d3.axisBottom(x);
  let yAxis = d3.axisLeft(y).ticks(d3.max(allVisibleData, (d) => d.value));

  //tegner akser
  g.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
  g.append("g").call(yAxis);

  // Funktion til at generere linjer, baseret på deres synlighed
  function generateLine(dataset, color, label) {
    if (!visibility[label]) return;

    let line = d3
      .line()
      .x((d) => x(d.name))
      .y((d) => y(d.value));

    //  line.curve(d3.curveMonotoneX); //tilføj hvis linje skal være kurvet

    // Tegner linjer
    g.append("path")
      .datum(dataset)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("d", line);

    //hvis du ikke ønsker cirkler så udkommenter/slet herfra
    let dots = g
      .selectAll(`.dot-${label}`)
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", `dot dot-${label}`)
      .attr("cx", (d) => x(d.name))
      .attr("cy", (d) => y(d.value))
      .attr("r", 5)
      .attr("fill", color);

    //og uden hover herfra
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
  ///

  // Tegner linjer pr. datasæt som er sat til synlige
  Object.keys(filteredData).forEach((key) => {
    generateLine(filteredData[key], colorScale(key), key);
  });

  //udkommenter/slet hvis du ikke ønsker gridlines
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
  //

  // Tilføj legend
  let legend = svg
    .append("g")
    .attr(
      "transform",
      `translate(${margin.left}, ${height + margin.top + 30})`
    );

  ["MCU", "DCEU"].forEach(function (d, i) {
    let legendItem = legend
      .append("g")
      .attr("class", visibility[d] ? "" : "opacity-50")
      .on("click", function () {
        visibility[d] = !visibility[d];
        renderChart();
      });

    legendItem
      .append("rect")
      .attr("x", i * 100)
      .attr("y", 0)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", colorScale(d))
      .classed("cursor-pointer", true);

    legendItem
      .append("text")
      .attr("x", i * 100 + 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(d)
      .classed("cursor-pointer", true);
  });
}

renderChart();
