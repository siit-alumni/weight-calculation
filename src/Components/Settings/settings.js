// [valoare minima, valoare maxima, text]


export const settings = {
  defaultUser:  {
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "female",
    bodyType: "ectomorph",
    activityTypes: "sedentary",
    macronutrientsPercentages: {
      endomorph: {
        protein: 30,
        carbs: 40,
        fat: 30
      },
      mesomorph: {
        protein: 30,
        carbs: 50,
        fat: 20
      },
      ectomorph: {
        protein: 30,
        carbs: 60,
        fat: 10
      }
    }},
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
  mealsRepartition: {
    breakfast: 0.3,
    lunch: 0.45,
    dinner: 0.15,
    snack1: 0.05,
    snack2: 0.05,
  },
  // macronutrient distribution in cal/g
  macronutrientDistribution: {
    protein: 4.1,
    carbs: 4.1,
    fat: 9.3,
  },
  recommendedMacronutrientPercentageIntake: {
    ectomorph: {
      protein: {
        min: 25,
        max: 30,
      },
      carbs: {
        min: 55,
        max: 60,
      },
      fat: {
        min: 20,
        max: 10,
      },
    },
    mesomorph: {
      protein: {
        min: 30,
        max: 30,
      },
      carbs: {
        min: 40,
        max: 50,
      },
      fat: {
        min: 30,
        max: 20,
      },
    },
    endomorph: {
      protein: {
        min: 30,
        max: 30,
      },
      carbs: {
        min: 40,
        max: 40,
      },
      fat: {
        min: 30,
        max: 30,
      },
    },
  },
};  