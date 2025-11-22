import { useState } from "react";
import { BodyType } from "./BodyTypeButtonDesign";
import { useTranslation } from "react-i18next";
// import { settings } from "../Settings/Settings";

export function Form({ getDetails }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "Rares",
    age: "45",
    weight: "80",
    height: "180",
    gender: "male",
    bodyType: "mesomorph",
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
            {t("form.name")}
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
            {t("form.age")}
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="age"
            placeholder={t("form.agePlaceholder")}
            onChange={onHandleChange}
            value={formData.age}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="weight" className="form-label">
            {t("form.weight")}
          </label>
          <input
            type="number"
            className="form-control"
            name="weight"
            id="weight"
            placeholder={t("form.weightPlaceholder")}
            onChange={onHandleChange}
            value={formData.weight}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="height" className="form-label">
            {t("form.height")}
          </label>
          <input
            type="number"
            className="form-control"
            name="height"
            id="height"
            placeholder={t("form.heightPlaceholder")}
            onChange={onHandleChange}
            value={formData.height}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="gender" className="form-label">
            {t("form.gender")}
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            onChange={onHandleChange}
            value={formData.gender}
          >
            <option value="female">{t("common.genderOption.female")}</option>
            <option value="male">{t("common.genderOption.male")}</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="bodyType" className="form-label mb-0">
              {t("form.bodyType")}
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
            <option value="ectomorph">{t("common.bodyTypeOption.ectomorph")}</option>
            <option value="mesomorph">{t("common.bodyTypeOption.mesomorph")}</option>
            <option value="endomorph">{t("common.bodyTypeOption.endomorph")}</option>
         
           {/* {Object.entries(settings.bodyEvaluation).map(([key]) => (
              <option key={key} value={key}>
                {t(`common.bodyTypeOption.${key}`)}
              </option> */}
            {/* ))} */}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        {t("form.calculateButton")}
      </button>
    </form>
  );
}
