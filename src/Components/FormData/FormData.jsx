export function Form({ onCalculate }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { weight, height } = data;
    onCalculate(Number(weight), Number(height));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="weight">Greutate (kg)</label>
        <input type="number" name="weight" id="weight" required />
      </div>
      <div>
        <label htmlFor="height">Înălțime (cm)</label>
        <input type="number" name="height" id="height" required />
      </div>
      <button type="submit">Calculează IMC</button>
    </form>
  );
}
