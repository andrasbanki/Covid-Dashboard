import Global from "./views/Global.js";
import Germany from "./views/Germany.js";
import Austria from "./views/Austria.js";
import Switzerland from "./views/Switzerland.js";
import Hungary from "./views/Hungary.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Global },
    { path: "/germany", view: Germany },
    { path: "/austria", view: Austria },
    { path: "/switzerland", view: Switzerland },
    { path: "/hungary", view: Hungary },
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