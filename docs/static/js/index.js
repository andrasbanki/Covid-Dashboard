import Global from "./views/Global.js";
import Germany from "./views/Germany.js";
import Austria from "./views/Austria.js";
import Switzerland from "./views/Switzerland.js";
import Hungary from "./views/Hungary.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

// CHARTS

const getData = (country) => {

  d3.csv(`./static/data/${country}_Covid.csv`).then(function(loadedData) {
    
    let cases = [];
    let deaths = [];
    let tests = [];
    let labels = [];

    for (let i=0; i<loadedData.length; i++) {
      let date = loadedData[i].date;

      labels.push(date);
      cases.push(loadedData[i].new_cases);
      deaths.push(loadedData[i].new_deaths);
      tests.push(loadedData[i].total_tests);
    }

    let optionCases = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "New Cases  -  for more information about the cases, click on the points",
          data: cases,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 0.1,
          pointBackgroundColor: '#FF808B',
          pointBorderColor: '#FF808B',
          borderColor: '#9292AD',
          borderWidth: 1,
        }]
      }
    };

    let optionDeaths = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "New Deaths  -  for more information about the deaths, click on the points",
          data: deaths,
          fill: false,
          pointRadius: 0.5,
          pointHoverRadius: 0.1,
          pointBackgroundColor: '#FF808B',
          pointBorderColor: '#FF808B',
          borderColor: '#9292AD',
          borderWidth: 1,
        }]
      }
    };

    let optionTests = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Total Tests  -  for more information about the tests, click on the points",
          data: tests,
          fill: false,
          pointBackgroundColor: '#FF808B',
          pointBorderColor: '#FF808B',
          borderColor: '#9292AD',
          borderWidth: 1,
          pointBorderWidth: 1,
          pointRadius: 0.1,
          pointHoverRadius: 0.1,
        }]
      }
    };

// CHART HYPERLINKS ON POINTS

    const ctxCases = document.getElementById('chart1');

    if (ctxCases) {
      const chart1 = new Chart(
        ctxCases,
        optionCases
      );

      function clickHandlerCases(click){
        const pointsCases = chart1.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
        if (pointsCases.length) {
          const firstPoint = pointsCases[0];
          const value = chart1.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

          window.open("https://ourworldindata.org/explorers/coronavirus-data-explorer?facet=none&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=USA~AUS~ITA~CAN~DEU~GBR~FRA", "_blank");
        }
      }

      ctxCases.onclick = clickHandlerCases;
    }

    const ctxDeaths = document.getElementById('chart2');

    if(ctxDeaths) {
      const chart2 = new Chart(
        ctxDeaths,
        optionDeaths,
      );

      function clickHandlerDeaths(click){
        const pointsDeaths = chart2.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
        if (pointsDeaths.length) {
          const firstPoint = pointsDeaths[0];
          const value = chart2.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

          window.open("https://ourworldindata.org/explorers/coronavirus-data-explorer?facet=none&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=USA~AUS~ITA~CAN~DEU~GBR~FRA", "_blank");
        }
      }

      ctxDeaths.onclick = clickHandlerDeaths;
    }

    const ctxTests = document.getElementById('chart3');

    if(ctxTests) {
      const chart3 = new Chart(
        ctxTests,
        optionTests,
      );

      function clickHandlerTests(click){
        const pointsTests = chart3.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
        if (pointsTests.length) {
          const firstPoint = pointsTests[0];
          const value = chart3.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

          window.open("https://ourworldindata.org/explorers/coronavirus-data-explorer?facet=none&Metric=Tests&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=USA~AUS~ITA~CAN~DEU~GBR~FRA", "_blank");
        }
      }

      ctxTests.onclick = clickHandlerTests;
    }

  });

};

// ROUTING

const router = async () => {
  const routes = [
    { path: "./", view: Global, name: "Global" },
    { path: "./Germany", view: Germany, name: "Germany" },
    { path: "./Austria", view: Austria, name: "Austria" },
    { path: "./Switzerland", view: Switzerland, name: "Switzerland" },
    { path: "./Hungary", view: Hungary, name: "Hungary" },
  ];

  // TEST

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes [0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  await getData(match.route.name);

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
  
});