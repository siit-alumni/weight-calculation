const fs = require('fs');
const path = require('path');

// Read the foodDB.json file
const filePath = path.join(__dirname, 'src/assets/foodDB.json');
const foodDB = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Convert all numeric strings to numbers
Object.keys(foodDB).forEach(foodName => {
  const food = foodDB[foodName];
  Object.keys(food).forEach(key => {
    // Keep Category, Subgroup, and Details as strings
    if (key === 'Category' || key === 'Subgroup' || key === 'Details') {
      return;
    }
    
    // Convert string numbers to actual numbers
    if (typeof food[key] === 'string') {
      const normalized = food[key].replace(',', '.');
      const numValue = parseFloat(normalized);
      if (!isNaN(numValue)) {
        food[key] = numValue;
      }
    }
  });
});

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(foodDB, null, 4));
console.log('✓ foodDB.json converted successfully!');
