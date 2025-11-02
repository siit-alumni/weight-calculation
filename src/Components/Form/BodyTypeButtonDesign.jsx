import bodyTypes from "../../assets/img/bodyTypes.png";
import { useTranslation } from "react-i18next";

export function BodyType() {
  const { t } = useTranslation();
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#bodyTypeModal"
      >
        <i className="bi bi-images me-1"></i> {t("form.detailsButton")}
      </button>

      <div
        className="modal fade"
        id="bodyTypeModal"
        tabIndex="-1"
        aria-labelledby="bodyTypeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="bodyTypeModalLabel">
                {t("form.bodyTypeExample.bodyTypeTitle")}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-center">
              <p className="mb-3">
                {t("form.bodyTypeExample.bodyTypeDescription")}
                <strong> {t("form.bodyTypeOption.ectomorph")}</strong>, <strong>{t("form.bodyTypeOption.mesomorph")}</strong> și{" "}
                <strong>{t("form.bodyTypeOption.endomorph")}</strong>.
              </p>

              <img
                src={bodyTypes}
                alt="Tipuri de corp"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("form.bodyTypeExample.closeButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
