import Papa from "papaparse";

/* ========================= */
/* LOAD CSV */
/* ========================= */

export function loadCSV(setData) {

  Papa.parse("/titanic.csv", {

    download: true,

    header: true,

    dynamicTyping: true,

    complete: (res) => {

      /* Remove empty rows */

      const cleanData =
        res.data.filter(
          d => d.PassengerId
        );

      setData(cleanData);

    }

  });

}

/* ========================= */
/* KPI STATS */
/* ========================= */

export function computeStats(data) {

  if (!data.length)
    return {
      total: 0,
      survivalRate: 0,
      avgAge: 0,
      avgFare: 0
    };

  const survived =
    data.filter(
      d => d.Survived === 1
    ).length;

  const avgAge = (

    data.reduce(
      (sum, d) =>
        sum + (d.Age || 0),
      0
    ) / data.length

  ).toFixed(1);

  const avgFare = (

    data.reduce(
      (sum, d) =>
        sum + (d.Fare || 0),
      0
    ) / data.length

  ).toFixed(1);

  return {

    total: data.length,

    survivalRate:

      ((survived / data.length) * 100)
        .toFixed(1),

    avgAge,

    avgFare

  };

}

/* ========================= */
/* GENDER DATA */
/* ========================= */

export function genderData(data) {

  const male =
    data.filter(
      d => d.Sex === "male"
    ).length;

  const female =
    data.filter(
      d => d.Sex === "female"
    ).length;

  return [

    {
      name: "Male",
      value: male
    },

    {
      name: "Female",
      value: female
    }

  ];

}

/* ========================= */
/* SURVIVAL BY CLASS */
/* ========================= */

export function survivalByClass(data) {

  const classes = [1, 2, 3];

  return classes.map(c => {

    const survived =
      data.filter(

        d =>
          d.Pclass === c &&
          d.Survived === 1

      ).length;

    return {

      class: "Class " + c,

      survived

    };

  });

}

/* ========================= */
/* AGE DISTRIBUTION */
/* ========================= */

export function ageDistribution(data) {

  const buckets = {};

  data.forEach(d => {

    if (!d.Age) return;

    const bucket =
      Math.floor(d.Age / 5) * 5;

    buckets[bucket] =

      (buckets[bucket] || 0) + 1;

  });

  return Object.keys(buckets).map(a => ({

    age: a,

    count: buckets[a]

  }));

}

/* ========================= */
/* FARE DISTRIBUTION */
/* ========================= */

export function fareDistribution(data) {

  const buckets = {};

  data.forEach(d => {

    if (!d.Fare) return;

    const bucket =
      Math.floor(d.Fare / 10) * 10;

    buckets[bucket] =

      (buckets[bucket] || 0) + 1;

  });

  return Object.keys(buckets).map(f => ({

    fare: f,

    count: buckets[f]

  }));

}

/* ========================= */
/* SIMPLE LABEL PREDICTOR */
/* ========================= */

export function simplePredict(sex, pclass) {

  if (sex === "female")
    return "High Survival Chance";

  if (pclass === 1)
    return "Medium Survival Chance";

  return "Low Survival Chance";

}

/* ========================= */
/* PROBABILITY PREDICTOR */
/* (THIS FIXES YOUR ERROR) */
/* ========================= */

export function simplePredictProbability({

  sex,
  pclass,
  age,
  fare

}) {

  let score = 0;

  /* Gender */

  if (sex === "female")
    score += 0.45;

  /* Class */

  if (pclass === 1)
    score += 0.30;

  if (pclass === 2)
    score += 0.15;

  /* Age */

  if (age < 15)
    score += 0.20;

  if (age > 60)
    score -= 0.10;

  /* Fare */

  if (fare > 50)
    score += 0.10;

  if (fare < 10)
    score -= 0.05;

  /* Clamp probability */

  return Math.max(
    0,
    Math.min(score, 1)
  );

}