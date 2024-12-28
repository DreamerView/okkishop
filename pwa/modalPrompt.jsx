const PWAModalPrompt = () => {
    return (
        <div className="modal fade" id="pwaPromptModal" tabIndex="-1" aria-labelledby="pwaPromptModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="pwaPromptModalLabel">Установка приложения на iOS</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ol>
                            <li>Нажмите на "Поделиться" (значок со стрелкой внизу экрана).</li>
                            <li>Выберите "На экран Домой".</li>
                            <li>Подтвердите действие.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PWAModalPrompt;