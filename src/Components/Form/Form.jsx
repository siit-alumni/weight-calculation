import { useState } from "react";

export function Form({ getDetails }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    bodyType: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getDetails(formData);
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
          onChange={onHandleChange}
          value={formData.name}
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
          onChange={onHandleChange}
          value={formData.age}
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
          onChange={onHandleChange}
          value={formData.weight}
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
          onChange={onHandleChange}
          value={formData.height}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Sexul</label>
        <select
          name="gender"
          id="gender"
          onChange={onHandleChange}
          value={formData.gender}
        >
          <option value="female">Feminin</option>
          <option value="male">Masculin</option>
        </select>
      </div>

      <div>
        <label htmlFor="bodyType">Tipul de corp</label>
        <select
          name="bodyType"
          id="bodyType"
          onChange={onHandleChange}
          value={formData.bodyType}
        >
          <option value="ectomorf">Ectomorf</option>
          <option value="mezomorf">Mezomorf</option>
          <option value="endomorf">Endomorf</option>
        </select>
      </div>

      <button type="submit">Calculează IMC</button>
    </form>
  );
}
