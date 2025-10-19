// [valoare minima, valoare maxima, text]

export const settings = {
  subponderal: [0, 18.5, "Subponderal"],
  normal: [18.5, 24.9, "Greutate normală"],
  supraponderal: [25, 29.9, "Supraponderal"],
  obezitate: [30, Infinity, "Obezitate"],
};

export const genderCoefficient = {
  female: 0.9,
  male: 1,
};

export const bodyTypeCoeff = {
  ectomorf: 0.9,
  mezomorf: 1,
  endomorf: 1.1,
};
