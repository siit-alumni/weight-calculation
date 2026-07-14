import { ModifyUser } from "../ModifyUser/ModifyUser";

export function EditUserModal({
    title,
    user,
    handleReset,
    t,
}) {
    return (
        <div
            className="modal fade"
            id="userEditModal"
            tabIndex={-1}
            aria-labelledby="userEditModalLabel"
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
                        <ModifyUser user={user} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}