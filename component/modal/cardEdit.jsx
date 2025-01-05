const CardEdit = () => {
    return (
        <div className="modal fade" id="CardEditModal" tabIndex="-1" aria-labelledby="CardEditModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="CardEditModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-12 mb-md-0 mb-5">
                                <h6 className="mb-3">Главное фото</h6>
                                <div className="bg-body-secondary rounded-4 mx-auto" style={{maxWidth:250,width:"100%",height:"auto",aspectRatio:"1/1"}}></div>
                            </div>
                            <div className="col-lg-5 col-md-8 col-12 mb-md-0 mb-5">
                                <div className="row">
                                    <div className="col-12">
                                        <h6 className="mb-3">Загрузите фотографии</h6>
                                    </div>
                                    <div className="col-3"><div className="w-100 bg-body-secondary rounded-4 mb-2" style={{height:"auto",aspectRatio:"1/1"}}></div></div>
                                    <div className="col-3"><div className="w-100 bg-body-secondary rounded-4 mb-2" style={{height:"auto",aspectRatio:"1/1"}}></div></div>
                                    <div className="col-3"><div className="w-100 bg-body-secondary rounded-4 mb-2" style={{height:"auto",aspectRatio:"1/1"}}></div></div>
                                    <div className="col-3"><div className="w-100 bg-body-secondary rounded-4 mb-2" style={{height:"auto",aspectRatio:"1/1"}}></div></div>
                                    <div className="col-3"><div className="w-100 bg-body-secondary rounded-4 mb-2" style={{height:"auto",aspectRatio:"1/1"}}></div></div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control bg-body-secondary" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control bg-body-secondary" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardEdit;