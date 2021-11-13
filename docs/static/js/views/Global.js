import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Global");
  }

  async getHtml() {

    return `
    <nav class="nav">

      <a href="./" class="logo">
        <img src="./static/img/logo.png" alt="Covid19 Dashboard Logo" class="logo-decor">
        <span class="logo-text">Covid19<br> Dashboard</span>
      </a>
 
      <ul class="menu">
        <li class="active"><a href="./" data-link>Global</a></li>
        <li><a href="./Austria" data-link>Austria</a></li>
        <li><a href="./Germany" data-link>Germany</a></li>
        <li><a href="./Hungary" data-link>Hungary</a></li>
        <li><a href="./Switzerland" data-link>Switzerland</a></li>
      </ul>

    </nav>

    <main class="content">

      <section class="section">

        <div class="container-md container-content cards row">

          <div class="col-xl col-lg col">
            <div class="card card-first shadow">
              <div class="desc">
                <p>Global Total Cases</p>
                <span>248.467.363</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card card-second shadow">
              <div class="desc">
                <p>Global Total Deaths</p>
                <span>5.027.183</span>
              </div>
            </div>
          </div>

          <div class="col-xl col-lg col">
            <div class="card card-third shadow">
              <div class="desc">
                <p>Global Total Number of People Fully Vaccinated</p>
                <span>3.111.302.856</span>
              </div>
            </div>
          </div>

        </div>

        <figure class="wide shadow">

          <div class="flourish-embed flourish-map worldmap" data-src="story/229998">
            <script src="https://public.flourish.studio/resources/embed.js"></script>
            <iframe 
              scrolling="no" 
              frameborder="0" 
              title="Interactive or visual content" 
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" 
              src="https://flo.uri.sh/story/229998/embed?auto=1" 
              style="width: 100%; height: 743px;">
            </iframe>
          </div>

        </figure>

      </section>

      <h1>"Milestones"</h1>

      <div id="milestones">
        <div class="st">
          <div>
            <div>
              <span>Dec. 31, 2019</span>
              <p>Officials close the Huanan seafood market, suspected to be the source of the mystery disease, as some of the patients
              presenting with the pneumonia-like illness were dealers or vendors at the market.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid1.png" alt="">
            </div>
          </div>
          <div>
            <p>Chinese authorities inform WHO of pneumonia cases in Wuhan City</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Jan. 11, 2020</span>
              <p>China reported its first confirmed death from the virus - a 61-year-old male resident of the
                city.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid2.png" alt="">
            </div>
          </div>
          <div>
            <p>First reported death</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Feb. 10, 2020</span>
              <p>More and more countries were starting to see their first cases, but much of the world's attention was still focused on
              Chinaau.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid3.png" alt="">
            </div>
          </div>
          <div>
            <p>1,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Mar. 20, 2020</span>
              <p>As the number of deaths from the virus around the world passed 10,000, concerns turned to Europe. The continent at that
              point accounted for about half of the deaths worldwide.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid4.png" alt="">
            </div>
          </div>
          <div>
            <p>10,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Apr. 9, 2020</span>
              <p>By 10 April, New York had more cases than any individual country. Meanwhile, Europe prepared to spend the Easter weekend under lockdown.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid5.png" alt="">
            </div>
          </div>
          <div>
            <p>100,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Jun. 29, 2020</span>
              <p>As the pandemic gathered pace, a new milestone of 500,000 deaths was reached.
              At the same time, lockdown restrictions were eased in some parts of the world, and people in the northern hemisphere
              turned their attention to how they would spend their summer.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid12.png" alt="">
            </div>
          </div>
          <div>
            <p>500,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Sep. 28, 2020</span>
              <p>the world reached one million recorded deaths from Covid-19. The US, Brazil and India now make up nearly half of the
              total, according to Johns Hopkins University.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid6.jpeg" alt="">
            </div>
          </div>
          <div>
            <p>1,000,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Dec. 02, 2020</span>
              <p>The U.K. government approves the COVID-19 vaccine candidate from Pfizer and BioNTech for domestic use — the first
              country to do so.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid8.png" alt="">
            </div>
          </div>
          <div>
            <p>1,500,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Apr. 15, 2021</span>
              <p>On average, 1 in 4 people have received a COVID-19 vaccine in high-income countries, while just 1 in 500 of all doses
              given globally have been administered in low-income countries.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid9.png" alt="">
            </div>
          </div>
          <div>
            <p>3,000,000 deaths</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Aug. 5, 2021</span>
              <p>WHO calls for a moratorium on booster shots of COVID-19 vaccines so that countries worldwide can catch up with efforts
              to immunize their most vulnerable populations without further straining the supply of doses globally.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid10.png" alt="">
            </div>
          </div>
          <div>
            <p>Globally, reported cases of COVID-19 surpass 200 million</p>
          </div>
        </div>

        <div class="st">
          <div>
            <div>
              <span>Nov. 1, 2021</span>
              <p>JHU's global tally of deaths reached 5,000,425 at 4:50 a.m. ET on Monday. It reports that 197,116 people have died of
              Covid-19 worldwide in the past 28 days. The number of coronavirus cases officially reported globally stands at 246.7
              million since it was first detected in the Chinese city of Wuhan in late 2019.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="./static/img/covid11.png" alt="">
            </div>
          </div>
          <div>
            <p>5,000,000 deaths</p>
          </div>
        </div>

      </div>

    </main>
    `; 
  }
}