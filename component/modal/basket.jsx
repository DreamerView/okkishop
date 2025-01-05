const Basket = () => {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="basketForm"
            aria-labelledby="basketFormLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="basketFormLabel">
                    Корзина
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <div className="row">
                    <div className="col-3">1</div>
                    <div className="col-6">2</div>
                    <div className="col-3">3</div>
                </div>
            </div>
        </div>
    )
};

export default Basket;