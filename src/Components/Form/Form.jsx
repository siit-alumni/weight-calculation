import { useState } from "react";
import { userBodyType, userSex } from "../Settings/settings";
import { BodyType } from "./BodyTypeButtonDesign";

export function Form({ getDetails }) {
  const [formData, setFormData] = useState({
    name: "Rares",
    age: "45",
    weight: "80",
    height: "180",
    gender: "male",
    bodyType: "mezomorph",
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
    <form onSubmit={handleFormSubmit} className="p-3">
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">
            Numele complet
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Alexandru Popescu"
            onChange={onHandleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="age" className="form-label">
            Vârsta
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="age"
            placeholder="Vârsta"
            onChange={onHandleChange}
            value={formData.age}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="weight" className="form-label">
            Greutate (kg)
          </label>
          <input
            type="number"
            className="form-control"
            name="weight"
            id="weight"
            placeholder="Greutate în kg"
            onChange={onHandleChange}
            value={formData.weight}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="height" className="form-label">
            Înălțime (cm)
          </label>
          <input
            type="number"
            className="form-control"
            name="height"
            id="height"
            placeholder="Înălțime în cm"
            onChange={onHandleChange}
            value={formData.height}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="gender" className="form-label">
            Sexul
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            onChange={onHandleChange}
            value={formData.gender}
          >
            <option value="female">{userSex.female}</option>
            <option value="male">{userSex.male}</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="bodyType" className="form-label mb-0">
              Tipul de corp
            </label>
            <BodyType/>
          </div>

          <select
            className="form-select mt-2"
            name="bodyType"
            id="bodyType"
            onChange={onHandleChange}
            value={formData.bodyType}
          >
            <option value="ectomorph">{userBodyType.ectomorph}</option>
            <option value="mezomorph">{userBodyType.mezomorph}</option>
            <option value="endomorph">{userBodyType.endomorph}</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Calculează IMC
      </button>
    </form>
  );
}
