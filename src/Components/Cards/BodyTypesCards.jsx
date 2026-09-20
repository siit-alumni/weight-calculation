
import "./BodyTypesCards.css";

import Ectomorff from "../../assets/img/Ectomorff.png";
import Endomorf from "../../assets/img/Endomorf.png";
import Mezomorf from "../../assets/img/Mezomorf.png";

import { useTranslation } from "react-i18next";

export default function BodyTypesCards() {

    const { t } = useTranslation();


    return (
        <div className="body-types-cards">

            <div className="body-card">
                <img src={Ectomorff} alt="Tip corp Ectomorf" />

                <div className="body-card-description">
                    <p>
                        Descriere  {t("common.bodyTypeOption.ectomorph")}
                        tertrtete
                        teterteteterterteterte
                        tertetertertertete
                        tertetetertetert
                        Etertertertertet
                        ERtertertertertertertertertertER
                        tertetertetertertertertertreterterterterT
                        tertertertreterterterterTRE
                        terterteter
                    </p>
                </div>
            </div>

            <div className="body-card">

                <img src={Endomorf} alt="Tip corp Endomorf" />

                <div className="body-card-description">
                    <p>
                        Descriere  {t("common.bodyTypeOption.endomorph")}
                    </p>
                </div>
            </div>


            <div className="body-card">
                <img src={Mezomorf} alt="Tip corp Mezomorf" />

                <div className="body-card-description">
                    <p>
                        Descriere  {t("common.bodyTypeOption.mesomorph")}
                    </p>
                </div>
            </div>

        </div>
    );
}

