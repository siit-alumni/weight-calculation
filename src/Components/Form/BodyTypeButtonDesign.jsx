import { useState } from "react";
import bodyTypes from "../../assets/img/bodyTypes.png";
import { useTranslation } from "react-i18next";

export function BodyType() {
  const { t } = useTranslation();

  const [showBodyType, setShowBodyType] = useState(false)

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm rounded-pill"
        onClick={() => setShowBodyType(true)}
      >
        <i className="bi bi-images me-1"></i>{t("form.detailsButton")}
      </button>

      {showBodyType && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div
           className="modal show d-block"
            tabIndex="-1"

          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title" >
                    {t("form.bodyTypeExample.bodyTypeTitle")}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowBodyType(false)}
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <p className="mb-3">
                    {t("form.bodyTypeExample.bodyTypeDescription")}
                    <strong> {t("common.bodyTypeOption.ectomorph")}</strong>, <strong>{t("common.bodyTypeOption.mesomorph")}</strong> {t("form.and")}{" "}
                    <strong>{t("common.bodyTypeOption.endomorph")}</strong>.
                  </p>

                  <img
                    src={bodyTypes}
                    alt="Tipuri de corp"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>

                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowBodyType(false)}
                  >
                    {t("form.closeButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

      )}
    </>
  );
}
