import Image from "next/image";

const Product = () => {
    return (
        <>
            {/* <div className="position-fixed w-100 bg-danger" style={{ height: "100px", zIndex: 999 }}>
            </div> */}
            <section className="my-lg-5 my-4">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5 col-12 d-flex flex-column align-items-center">
                        <Image
                            loading="lazy"
                            style={{
                                width: "calc(100% - 32px)",
                                height: "auto",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
                            width="300"
                            height="300"
                            className="rounded-5"
                            src="/placeholder.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7 col-12 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex flex-column" style={{ width: "calc(100% - 32px)" }}>
                            <h1 className="fw-normal m-0 p-0">Омлет с пепперони</h1>
                            <p className="fw-light text-secondary my-3 m-0 p-0">Description</p>
                            <b className="fs-4">$500</b>
                            <div className="mt-3">
                                <button className="btn btn-primary d-flex align-items-center gap-2">
                                    <i className="bi bi-basket"></i>
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;