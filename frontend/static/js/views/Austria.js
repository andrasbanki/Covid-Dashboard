import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Austria");
  }

  async getHtml() {

    return `
    <nav class="nav">

      <a href="/" class="logo">
        <img src="static/img/logo.png" alt="Covid19 Dashboard Logo" class="logo-decor">
        <span class="logo-text">Covid19<br> Dashboard</span>
      </a>

      <ul class="menu">
        <li><a href="/" data-link>Global</a></li>
        <li class="active"><a href="/austria" data-link>Austria</a></li>
        <li><a href="/germany" data-link>Germany</a></li>
        <li><a href="/hungary" data-link>Hungary</a></li>
        <li><a href="/switzerland" data-link>Switzerland</a></li>
      </ul>

    </nav>

    <main class="content">

      <section class="section">
        
        <div class="container-fluid container-content charts row">
          <div class="col-xl col-lg col">
            <div class="card shadow">
              <canvas class="shadow" id="chart1"></canvas>
            </div>
          </div>
        </div>

        <div class="container-fluid container-content charts row">           
          <div class="col-xl col-lg col">
            <div class="card shadow">
              <canvas class="shadow" id="chart2"></canvas>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card shadow">
              <canvas class="shadow" id="chart3"></canvas>
            </div>
          </div> 
        </div>
        
      </section>

    </main>
    `; 
  }
}