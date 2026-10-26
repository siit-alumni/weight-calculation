
import "./BodyTypesCards.css";

import Ectomorff from "../../assets/img/Ectomorff.png";
import Endomorf from "../../assets/img/Endomorf.png";
import Mezomorf from "../../assets/img/Mezomorf.png";

import { useTranslation } from "react-i18next";

export default function BodyTypesCards() {

    const { t } = useTranslation();


    return (
        <div className="row g-4">

            <div className="col-md-4">
                <div className="card body-card">
                    <div className="body-card-content body-card-ectomorph ">
                        <img
                            src={Ectomorff}
                            className="body-card-image"
                            alt={t("common.bodyTypeOption.ectomorph")}
                        />

                        <div className="body-card-description body-card-ectomorph">
                            <div>
                                <h5 className="body-card-title">
                                    {t("common.bodyTypeOption.ectomorph")}
                                </h5>

                                <p className="card-text">
                                    {t("common.bodyTypeOption.ectomorphDescription")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card body-card">
                    <div className="body-card-content body-card-mesomorph">
                        <img
                            src={Mezomorf}
                            className="body-card-image"
                            alt={t("common.bodyTypeOption.mesomorph")}
                        />

                        <div className="body-card-description body-card-mesomorph">
                            <div>
                                <h5 className="body-card-title">
                                    {t("common.bodyTypeOption.mesomorph")}
                                </h5>
                                <p className="card-text">
                                    {t("common.bodyTypeOption.mesomorphDescription")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card body-card">
                    <div className="body-card-content body-card-endomorph">
                        <img
                            src={Endomorf}
                            className="body-card-image"
                            alt={t("common.bodyTypeOption.endomorph")}
                        />

                        <div className="body-card-description body-card-endomorph">
                            <div>
                                <h5 className="body-card-title">
                                    {t("common.bodyTypeOption.endomorph")}
                                </h5>
                                <p className="card-text">
                                    {t("common.bodyTypeOption.endomorphDescription")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );


}


