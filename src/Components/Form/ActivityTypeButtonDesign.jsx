import bodyTypes from "../../assets/img/bodyTypes.png";
import { useTranslation } from "react-i18next";

export function ActivityType() {
  const { t } = useTranslation();
  const activityTypes = [
    "sedentary",
    "lightlyActive",
    "moderatelyActive",
    "intense",
    "heavy",
  ];
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#activityTypeModal"
      >
        <i className="bi bi-images me-1"></i>{t("form.detailsButton")}
      </button>

      <div
        className="modal fade"
        id="activityTypeModal"
        tabIndex="-1"
        aria-labelledby="activityTypeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="activityTypeModalLabel">
                {t("activityTypes.title")}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {activityTypes.map((key) => (
                    <tr key={key}>
                      <td>{t(`activityTypes.${key}.label`)}</td>
                      <td>{t(`activityTypes.${key}.description`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("form.closeButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
