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
    underweight: [0, 18.5],
    normal: [18.5, 24.9],
    overweight: [25, 29.9],
    obesity: [30, Infinity],
  },
  calorieConsumptionLevels: {
    sedentary: [25,30],
    lightlyActive: [30,35],
    moderatelyActive: [35,45],
    intense: [45,50],
    heavy: [50,60],
  },
};
