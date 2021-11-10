import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Global");
  }


  async getHtml() {

    return `
    <nav class="nav">
    <a href="/" class="logo">
      <img src="static/img/logo.png" alt="Covid19 Dashboard Logo">
      <span>Covid19 Dashboard</span>
    </a>

    <hr>
 
    <ul class="menu">
      <li class="active"><a href="/" data-link>Global</a></li>
      <li><a href="/austria" data-link>Austria</a></li>
      <li><a href="/germany" data-link>Germany</a></li>
      <li><a href="/hungary" data-link>Hungary</a></li>
      <li><a href="/switzerland" data-link>Switzerland</a></li>
    </ul>

  </nav>
  <main class="content">

    <section class="section">
      <div class="container-md container-content cards row">
          <div class="col-xl col-lg col">
            <div class="card shadow ">
              <div class="desc">
                <p>Global Total Cases</p>
                <span>248.467.363</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card shadow">
              <div class="desc">
                <p>Global Total Deaths</p>
                <span>5.027.183</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card shadow">
              <div class="desc">
                <p>Share of people fully vaccinated against COVID-19</p>
                <span>3.111.302.856</span>
              </div>
            </div>
          </div>

        </div>

        <hr>
    </section>

  </main>
    `; 
  }
}