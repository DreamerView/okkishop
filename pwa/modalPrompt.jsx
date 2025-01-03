const PWAModalPrompt = () => {
    return (
        <div className="modal fade" id="pwaPromptModal" tabIndex="-1" aria-labelledby="pwaPromptModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="pwaPromptModalLabel">Установка приложения на iOS</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ol>
                            <li>Нажмите на <span className="badge bg-body-secondary text-primary fw-bold"><i className="bi bi-box-arrow-up"></i></span> <b>Поделиться</b>.</li>
                            <img src="/ios-install/1.png" style={{width:"calc(100% - 32px)"}} className="rounded-4 my-3" alt="" />
                            <li>Выберите <b>На экран "Домой" <span className="badge text-body fw-bold"><i className="bi bi-plus-square"></i></span></b>.</li>
                            <img src="/ios-install/2.png" style={{width:"calc(100% - 32px)"}} className="rounded-4 my-3" alt="" />
                            <li>Подтвердите действие.</li>
                            <img src="/ios-install/3.png" style={{width:"calc(100% - 32px)"}} className="rounded-4 my-3" alt="" />
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PWAModalPrompt;