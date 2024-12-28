const HeaderPreloader = () => {
    return (
        <header className="row py-3 position-sticky top-0 header-transparent" style={{ zIndex: 1, backdropFilter: "saturate(180%) blur(5px)" }}>
            <div className="col-lg-2 col-sm-3 col-6 d-flex gap-4 order-1 align-items-center">
                <button className="btn border-0 bg-body-secondary fs-4 rounded-circle" >
                    <i className="bi bi-arrow-left-short opacity-0 bg-body-secondary " />
                </button>

                <button className="btn text-secondary border-0 fs-4 bg-body-secondary rounded-circle">
                    <i className="bi bi-list opacity-0" />
                </button>
            </div>
            <div className="col-lg-8 col-sm-6 col-12 order-sm-2 order-3 mt-sm-0 mt-3">
                <div className="input-group bg-body-secondary rounded-5">
                    <span className="input-group-text bg-transparent border-0" id="basic-addon1">
                        <i className="bi bi-search fs-5 opacity-0"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control bg-transparent rounded-4 border-0"
                        placeholder=""
                        aria-label="Search..."
                        aria-describedby="basic-addon1"
                        style={{ boxShadow: "none" }}
                    />
                </div>
            </div>
            <div className="col-lg-2 col-sm-3 col-6 d-flex gap-4 justify-content-end order-sm-3 order-2">
                <button className="btn">
                    <div style={{ width: 32, height: 32 }} className="spinner-grow text-secondary opacity-25" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </button>
                <button className="btn text-secondary border-0 fs-4 bg-body-secondary rounded-circle" type="button">
                    <i className="bi bi-basket opacity-0"></i>
                </button>
            </div>
        </header>
    )
};

export default HeaderPreloader;