export default function AboutTab() {

  return (

    <div className="about-container">

      <h2>About Titanic Dashboard</h2>

      <p className="about-intro">

        This project is an interactive analytics dashboard
        built using the Titanic dataset. It demonstrates
        data visualization, exploratory analysis, and
        survival prediction using modern React tools.

      </p>

      {/* ===================== */}
      {/* PIPELINE */}
      {/* ===================== */}

      <div className="about-section">

        <h3>Data Pipeline</h3>

        <ul>

          <li>
            CSV Dataset loaded dynamically
            using <strong>PapaParse</strong>
          </li>

          <li>
            Data cleaned and filtered
            before visualization
          </li>

          <li>
            Metrics calculated in
            utility functions
          </li>

          <li>
            Charts rendered using
            <strong>Recharts</strong>
          </li>

        </ul>

      </div>

      {/* ===================== */}
      {/* MODEL */}
      {/* ===================== */}

      <div className="about-section">

        <h3>Prediction Model</h3>

        <ul>

          <li>
            Lightweight rule-based
            survival predictor
          </li>

          <li>
            Uses passenger features:
            Sex, Class, Age, Fare
          </li>

          <li>
            Produces survival
            probability score
          </li>

          <li>
            Designed to simulate
            logistic-style prediction
          </li>

        </ul>

      </div>

      {/* ===================== */}
      {/* TECH STACK */}
      {/* ===================== */}

      <div className="about-section">

        <h3>Technology Stack</h3>

        <ul>

          <li>React (Vite)</li>
          <li>Recharts (Data Visualization)</li>
          <li>PapaParse (CSV Parsing)</li>
          <li>JavaScript ES6+</li>
          <li>CSS Dark Theme UI</li>

        </ul>

      </div>

      {/* ===================== */}
      {/* FEATURES */}
      {/* ===================== */}

      <div className="about-section">

        <h3>Key Features</h3>

        <ul>

          <li>
            Interactive dashboard tabs
          </li>

          <li>
            KPI metrics and charts
          </li>

          <li>
            Live survival predictor
          </li>

          <li>
            Searchable dataset explorer
          </li>

          <li>
            Responsive UI layout
          </li>

        </ul>

      </div>

      {/* ===================== */}
      {/* FOOTER */}
      {/* ===================== */}

      <div className="about-footer">

        <p>

          Built as a Data Analytics &
          Machine Learning dashboard
          demonstration project.

        </p>

      </div>

    </div>

  );

}