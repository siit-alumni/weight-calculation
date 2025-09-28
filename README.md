# Weight caculator

## Design inspiration
https://demos.creative-tim.com/paper-dashboard-2-pro/examples/dashboard.html

## Calculation spreadsheet
https://docs.google.com/spreadsheets/d/1onO6sMqx0A5rerYSaIluzIrM9h3Uxedd/edit?usp=sharing&ouid=105950649166999062173&rtpof=true&sd=true

## Input values
1. W = weight (in kg)
2. H = height (in cm)
3. A = age
4. GC = gender coefficient (0.9 for women, 1 for men)
5. C = body type coefficient
6. AFC = Activity Factor Coefficient

## Output values
1. BMI = body mass index (IMC - indicele de masa corporala)  
```
    BMI < 18.5          -> underweight (subponderabilitate)
    18.5 <= BMI < 25    -> normal weight (greutate normala)
    25 < BMI < 30       -> overweight (supraponderabilitate)
    30 <= BMI           -> obese (obezitate)
```
2. IBW

## Formulae

### Ideal Body Weight (Creff Formula)
IBW = (H − 100 + A / 10​) × C

### Basal Metabolic Rate (BMR)
BMR = 24 × IBW  × GC

### Total Daily Energy Expenditure (TDEE) - according to the customer indications
TDEE = BMR + AFC × 24