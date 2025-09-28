export function Form({ onCalculate, getName }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { name, weight, height } = data;
    onCalculate(Number(weight), Number(height));
    getName(name);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Numele complet</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Alexandru Popescu"
          required
        />
      </div>
      <div>
        <label htmlFor="age">Vârsta</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Vârsta"
          required
        />
      </div>
      <div>
        <label htmlFor="weight">Greutate (kg)</label>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Greutate în kg"
          required
        />
      </div>
      <div>
        <label htmlFor="height">Înălțime (cm)</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="Înălțime în cm"
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Sex</label>
        <select name="gender" id="gender">
          <option value="female">Femeie</option>
          <option value="male">Bărbat</option>
        </select>
      </div>

      <button type="submit">Calculează IMC</button>
    </form>
  );
}
