import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Hungary");
  }

  async getHtml() {
    return `
  <main class="content">

    <section class="section">
      <div class="container-md container-content cards row">
          <div class="col-xl col-lg col">
            <div class="card shadow ">
              <div class="desc">
                <p>Global Total Cases</p>
                <span>32232322</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card shadow">
              <div class="desc">
                <p>Global Total Deaths</p>
                <span>2134213123</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card shadow">
              <div class="desc">
                <p>Global Total Vaccine Doses Administered</p>
                <span>3213132131</span>
              </div>
            </div>
          </div>

          <div class="container-fluid container-content charts row">
            <div class="col-12">
              <div class="card shadow">
                <canvas class="shadow" id="chart1"></canvas>
              </div>
            </div>
          </div>

          <div class="container-fluid container-content charts row">           
              <div class="col-8">
                <div class="card shadow">
                  <canvas class="shadow" id="chart2"></canvas>
                </div>
              </div>

              <div class="col-4">
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