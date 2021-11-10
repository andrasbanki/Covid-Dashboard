import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Germany");
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
      <li><a href="/" data-link>Global</a></li>
      <li><a href="/austria" data-link>Austria</a></li>
      <li class="active"><a href="/germany" data-link>Germany</a></li>
      <li><a href="/hungary" data-link>Hungary</a></li>
      <li><a href="/switzerland" data-link>Switzerland</a></li>
    </ul>

  </nav>
  <main class="content">

     <section class="section">
      
          <div class="container-fluid container-content charts row">
            <div class="col-12">
              <div class="card shadow">
                <canvas class="shadow" id="chart1"></canvas>
              </div>
            </div>
          </div>

          <div class="container-fluid container-content charts row">           
              <div class="col-6">
                <div class="card shadow">
                  <canvas class="shadow" id="chart2"></canvas>
                </div>
              </div>

              <div class="col-6">
                <div class="card shadow">
                  <canvas class="shadow" id="chart3"></canvas>
                </div>
              </div> 
          </div>

        </div>
    </section>

  </main>
    `; 
  }
}