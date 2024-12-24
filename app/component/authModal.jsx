"use client";
import { signIn } from 'next-auth/react';
const AuthModal = () => {
    return (
        <div
            className="modal fade"
            id="authModal"
            tabIndex="-1"
            aria-labelledby="authModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-md modal-fullscreen-sm-down modal-dialog-centered border-0">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="authModalLabel">
                            Войти с помощью
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body d-flex flex-column gap-3">
                        <h4>В курсе происходящего</h4>
                        <p>Присоединяйтесь сегодня.</p>
                        <button className="btn bg-body-secondary w-100 py-2" onClick={() => signIn('google')}>
                            <i className="bi bi-google me-3"></i>Войти с помощью Google
                        </button>
                        <button className="btn bg-body-secondary w-100 py-2">
                            <i className="bi bi-facebook me-3"></i>Войти с помощью Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthModal;