import bodyTypes from "../../assets/img/bodyTypes.png";
import { useTranslation } from "react-i18next";
import { settings } from "../Settings/settings";
import { useState } from "react";

export function ActivityType() {
  const { t } = useTranslation();
  const activityTypes = Object.keys(settings.calorieConsumptionLevels);

  const [showActivity, setShowActivity] = useState(false)

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm rounded-pill"
        onClick={() => setShowActivity(true)}
      >
        <i className="bi bi-images me-1"></i>{t("form.detailsButton")}
      </button>
      {showActivity && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div
            className="modal show d-block"
            tabIndex="-1"
          >

            <div className="modal-dialog modal-lg modal-dialog-centered">

              <div className="modal-content">


                <div className="modal-header bg-primary text-white">

                  <h5
                    className="modal-title"
                  >
                    {t("activityTypes.title")}
                  </h5>


                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowActivity(false)}
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

                          <td>
                            {t(`activityTypes.${key}.label`)}
                          </td>

                          <td>
                            {t(`activityTypes.${key}.description`)}
                          </td>

                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>


                <div className="modal-footer border-0">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowActivity(false)}
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
