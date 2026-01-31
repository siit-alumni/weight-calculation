import { useContext, useState } from "react";
import { BodyType } from "./BodyTypeButtonDesign";
import { useTranslation } from "react-i18next";
import { settings } from "../Settings/settings";
import { ActivityType } from "./ActivityTypeButtonDesign";
import { addNewUserToLocalStorage, clearUserDataFromLocalStorage, getUserDataFromLocalStorage, saveUserDataToLocalStorage } from "../functions/functions";
import { useNavigate } from "react-router-dom";


export function Form({ getDetails, userData }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(userData);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    getDetails(updatedFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formData.id = formData.name;
    saveUserDataToLocalStorage(formData);
    addNewUserToLocalStorage(formData);
    navigate("/selectUser");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(settings.defaultUser);
  };

  return (
    <div>
      <div onSubmit={handleFormSubmit} className="container p-3">
        <div className="row mb-2">
          <div className="col-md mb-3">
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
          <div className="col-md mb-3">
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
          <div className="col-md mb-3">
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
        </div>

        <div className="row mb-2">
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
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="bodyType" className="form-label mb-0">
                {t("form.bodyType")}
              </label>
              <BodyType />
            </div>

            <select
              className="form-select mt-2"
              name="bodyType"
              id="bodyType"
              onChange={onHandleChange}
              value={formData.bodyType}
            >

              {Object.entries(settings.bodyTypeCoeff).map(([key]) => (
                <option key={key} value={key}>
                  {t(`common.bodyTypeOption.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="activityTypes" className="form-label mb-0">
                {t("activityTypes.title")}
              </label>
              <ActivityType />
            </div>

            <select
              className="form-select mt-2"
              name="activityTypes"
              id="activityTypes"
              onChange={onHandleChange}
              value={formData.activityTypes}
            >

              {Object.entries(settings.calorieConsumptionLevels).map(([key]) =>
              (<option key={key} value={key}>
                {t(`activityTypes.${key}.label`)}
              </option>))}

            </select>
          </div>
        </div>

        {formData.name && (
          <button className="btn btn-secondary" onClick={handleReset}>{t("form.resetButton")}</button>
        )}
      </div>

    </div>
  );
}
