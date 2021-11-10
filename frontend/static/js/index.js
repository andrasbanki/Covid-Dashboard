import Global from "./views/Global.js";
import Germany from "./views/Germany.js";
import Austria from "./views/Austria.js";
import Switzerland from "./views/Switzerland.js";
import Hungary from "./views/Hungary.js"; 

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const getData = (country) => {

  d3.csv(`static/data/${country}_Covid.csv`).then(function(loadedData) {
    
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
          label: "New Cases",
          data: cases,
          fill: false,
          pointRadius: 2,
          pointHoverRadius: 0.1,
          borderColor: '#FF808B',
        }]
      }
    };

    let optionDeaths = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "New Deaths",
          data: deaths,
          fill: false,
          pointRadius: 2,
          pointHoverRadius: 0.1,
          borderColor: '#FF808B'
        }]
      }
    };

    let optionTests = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Total Tests",
          data: tests,
          fill: false,
          pointRadius: 2,
          pointHoverRadius: 0.1,
          borderColor: '#FF808B'
        }]
      }
    };

    let chart1 = new Chart(document.getElementById('chart1'), optionCases);
    let chart2 = new Chart(document.getElementById('chart2'), optionDeaths);
    let chart3 = new Chart(document.getElementById('chart3'), optionTests);

  });

};

const router = async () => {
  const routes = [
    { path: "/", view: Global, name: "Global" },
    { path: "/germany", view: Germany, name: "Germany" },
    { path: "/austria", view: Austria, name: "Austria" },
    { path: "/switzerland", view: Switzerland, name: "Switzerland" },
    { path: "/hungary", view: Hungary, name: "Hungary" },
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