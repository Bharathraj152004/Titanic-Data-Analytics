import { useState } from "react";

import {
  simplePredictProbability
} from "../utils/titanicUtils";

export default function PredictorTab() {

  /* ====================== */
  /* FORM STATE */
  /* ====================== */

  const [sex, setSex] = useState("male");
  const [pclass, setPclass] = useState(3);
  const [age, setAge] = useState(30);
  const [fare, setFare] = useState(20);

  /* ====================== */
  /* PREDICTION */
  /* ====================== */

  const probability =
    simplePredictProbability({
      sex,
      pclass,
      age,
      fare
    });

  const survivalLabel =
    probability > 0.5
      ? "Likely Survive"
      : "Low Survival";

  /* ====================== */
  /* UI */
  /* ====================== */

  return (

    <div>

      <h2>Live Survival Predictor</h2>

      <p>
        Enter passenger details to estimate survival probability.
      </p>

      {/* ====================== */}
      {/* FORM */}
      {/* ====================== */}

      <div className="form">

        {/* SEX */}

        <label>

          Sex

          <select
            value={sex}
            onChange={e =>
              setSex(e.target.value)
            }
          >

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

          </select>

        </label>

        {/* CLASS */}

        <label>

          Passenger Class

          <select
            value={pclass}
            onChange={e =>
              setPclass(
                Number(e.target.value)
              )
            }
          >

            <option value={1}>
              1st
            </option>

            <option value={2}>
              2nd
            </option>

            <option value={3}>
              3rd
            </option>

          </select>

        </label>

        {/* AGE */}

        <label>

          Age

          <input
            type="number"
            value={age}
            min={0}
            max={80}
            onChange={e =>
              setAge(
                Number(e.target.value)
              )
            }
          />

        </label>

        {/* FARE */}

        <label>

          Fare

          <input
            type="number"
            value={fare}
            min={0}
            max={600}
            onChange={e =>
              setFare(
                Number(e.target.value)
              )
            }
          />

        </label>

      </div>

      {/* ====================== */}
      {/* RESULT */}
      {/* ====================== */}

      <div className="prediction-card">

        <h3>Prediction Result</h3>

        <p className="probability">

          Survival Probability:

          <span>

            {(probability * 100).toFixed(1)}%

          </span>

        </p>

        <div

          className={
            probability > 0.5
              ? "badge survive"
              : "badge risk"
          }

        >

          {survivalLabel}

        </div>

      </div>

    </div>

  );

}