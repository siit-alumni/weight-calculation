// [valoare minima, valoare maxima, text]


export const settings = {
  genderCoefficient: {
    female: 0.9,
    male: 1,
  },
  bodyTypeCoeff: {
    ectomorph: 0.9,
    mesomorph: 1,
    endomorph: 1.1,
  },
  bodyEvaluation: {
    underweight: {
      min: 0,
      max: 18.49
    },
    normal: {
      min: 18.5,
      max: 24.99
    },
    overweight: {
      min: 25,
      max: 29.99
    },
    obesity: {
      min: 30,
      max: Infinity
    },
  },
  calorieConsumptionLevels: {
    sedentary: {
      min: 25,
      max: 30
    },
    lightlyActive: {
      min: 30,
      max: 35
    },
    moderatelyActive: {
      min: 35,
      max: 45
    },
    intense: {
      min: 45,
      max: 50
    },
    heavy: {
      min: 50,
      max: 60
    },
  },
};
