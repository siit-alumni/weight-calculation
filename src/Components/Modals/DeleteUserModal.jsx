import { DeleteUser } from "../DeleteUser/DeleteUser";



export function DeleteUserModal() {
    return (
        <div
            className="modal fade"
            id="userDeleteModal"
            tabIndex={-1}
            aria-labelledby="userDeleteModalLabel"
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
                        <DeleteUser user={user} />
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                handleDelete();
                                closeModal();
                            }}
                        >
                            {t("deleteUser.confirmButton")}
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


