import { useEffect, useRef, useState } from "react";
import { userBodyType, userSex } from "../Settings/settings";
import "./Form.css";
import ectomorphImg from "../../assets/Pictures/ectomorph.png";
import mezomorphImg from "../../assets/Pictures/mezomorph.png";
import endomorphImg from "../../assets/Pictures/endomorph.png";

export function Form({ getDetails }) {
  const [formData, setFormData] = useState({
    name: "Rares",
    age: "45",
    weight: "80",
    height: "180",
    gender: "male",
    bodyType: "mezomorph",
  });

  const bodyTypeImages = {
    ectomorph: ectomorphImg,
    mezomorph: mezomorphImg,
    endomorph: endomorphImg,
  };

  const [previewType, setPreviewType] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setPreviewType(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "bodyType") setPreviewType(value);
  };

  const selectBodyType = (value) => {
    setFormData((prev) => ({ ...prev, bodyType: value }));
    setDropdownOpen(false);
    setPreviewType(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getDetails(formData);
  };

 
  const displayType = dropdownOpen ? (previewType ?? formData.bodyType) : null;

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-root">
        <div className="form-field">
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

        <div className="form-field">
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

        <div className="form-field">
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

        <div className="form-field">
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

        <div className="form-field">
          <label htmlFor="gender">Sexul</label>
          <select
            name="gender"
            id="gender"
            onChange={onHandleChange}
            value={formData.gender}
          >
            <option value="female">{userSex.female}</option>
            <option value="male">{userSex.male}</option>
          </select>
        </div>


        <div className="form-field form-field-row">
          <label>Tipul de corp</label>

          <div className="custom-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => {
                setDropdownOpen((s) => !s);
                if (!dropdownOpen) setPreviewType(formData.bodyType);
              }}
              onMouseEnter={() => setPreviewType(formData.bodyType)}
              onMouseLeave={() => !dropdownOpen && setPreviewType(null)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              {userBodyType[formData.bodyType]}
              <span className="caret">{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="dropdown-list" role="listbox">
                {Object.entries(userBodyType).map(([value, label]) => (
                  <div
                    key={value}
                    role="option"
                    aria-selected={formData.bodyType === value}
                    className={`dropdown-option ${formData.bodyType === value ? "selected" : ""}`}
                    onMouseEnter={() => setPreviewType(value)}
                    onMouseLeave={() => setPreviewType(null)}
                    onClick={() => selectBodyType(value)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-field">
          <button type="submit" className="submit-button">Calculează IMC</button>
        </div>
      </form>


            <div className="form-field outside-preview" aria-hidden={false}>

        {displayType && (
          <img
            src={bodyTypeImages[displayType]}
            alt={userBodyType[displayType]}
            className="bodytype-preview"
          />
        ) }
      </div>
    </>
  );
}