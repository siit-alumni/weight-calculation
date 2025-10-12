import { calcIdealWeight } from "../functions/functions";

export default function IdealWeight({formData}) {
  const { weight, height, gender, bodyType, age } = formData;
  
  let idealWeight = calcIdealWeight(height, gender, bodyType, age);

  return (
    <div>
      <h3>Greutate ideala : {idealWeight} kg</h3>
    </div>
  );
}
