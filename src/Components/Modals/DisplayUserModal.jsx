import { useTranslation } from "react-i18next";
import UserData from "../UserData/UserData";
import { useNavigate } from 'react-router-dom';


export function DisplayUserModal({
    title,
    user,
        
}) {
    
    const { t } = useTranslation();

     const navigate = useNavigate();

       const handleSelectUser = () => {
         
            navigate('/results');
    
        };

    return (
        <div
            className="modal fade"
            id="userDisplayModal"
            tabIndex={-1}
            aria-labelledby="userInfoModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {title}
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div className="modal-body">
                        <UserData user={user} />
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={handleSelectUser} 
                        >
                            {t("usersList.selectUserIcon")}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            {t("common.buttons.cancelButton")}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
