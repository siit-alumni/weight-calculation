export const translate = {
  dictionary: {
    'ro': {
      '_overweigt': "Supraponderal",
      '_underweight': "Subponderal",
      '_normalweight': "Greutate normală",
    },  
    'en': {
      '_overweigt': "Overweight",
      '_underweight': "Underweight",
      '_normalweight': "Normal weight",
    }
  },
  translateText: function(key, lang) {
    return this.dictionary[lang][key];
  }
} 