
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

                    <img
                        src={Ectomorff}
                        className="body-card-image"
                        alt={t("common.bodyTypeOption.ectomorph")}
                    />

                    <div className="body-card-description">
                        <p className="card-text">
                            {t("common.bodyTypeOption.ectomorphDescription")}
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-md-4">
                <div className="card body-card">

                    <img
                        src={Mezomorf}
                        className="body-card-image"
                        alt={t("common.bodyTypeOption.mesomorph")}
                    />

                    <div className="body-card-description">
                        <p className="card-text">
                            {t("common.bodyTypeOption.mesomorphDescription")}
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-md-4">
                <div className="card body-card">

                    <img
                        src={Endomorf}
                        className="body-card-image"
                        alt={t("common.bodyTypeOption.endomorph")}
                    />

                    <div className="body-card-description">
                        <p className="card-text">
                            {t("common.bodyTypeOption.endomorphDescription")}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );


}


