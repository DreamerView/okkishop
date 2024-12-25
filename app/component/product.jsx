"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Product = () => {
    const scrollableRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        const element = scrollableRef.current;
        if (!element) return;

        const { scrollLeft, scrollWidth, clientWidth } = element;

        // Проверяем, стоит ли в начале
        setShowLeftArrow(scrollLeft > 0);

        // Проверяем, стоит ли в конце
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    const horizontalScroll = (direction) => {
        const element = scrollableRef.current;
        if (!element) return;

        const scrollAmount = 150; // Расстояние для скролла
        if (direction === "left") {
            element.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (direction === "right") {
            element.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const element = scrollableRef.current;
        if (!element) return;

        // Добавляем обработчик скролла
        element.addEventListener("scroll", handleScroll);

        // Инициализируем состояние стрелок
        handleScroll();

        return () => {
            // Убираем обработчик при размонтировании
            element.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {/* <div className="position-fixed w-100 bg-danger" style={{ height: "100px", zIndex: 999 }}>
            </div> */}
            <section className="my-lg-5 my-4">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5 col-12 d-flex flex-column align-items-center justify-content-center order-1">
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
                    <div className="col-lg-6 col-md-8 col-sm-7 col-12 mt-md-0 mt-4 d-flex flex-column justify-content-center align-items-center order-2">
                        <div className="d-flex flex-column" style={{ width: "calc(100% - 32px)" }}>
                            <h1 className="fw-normal m-0 p-0">Омлет с пепперони</h1>
                            <p className="fw-light text-secondary my-3 m-0 p-0">Description</p>
                            <b className="fs-4">$500</b>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <button className="btn btn-primary border-0 py-2 d-flex align-items-center gap-2">
                                    <i className="bi bi-basket"></i>
                                    Добавить
                                </button>
                                <button className="btn btn-outline-danger py-2 border-0 d-flex align-items-center gap-2">
                                    <i className="bi bi-heart"></i>
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 my-lg-0 my-5 d-flex flex-column align-items-center justify-content-center order-lg-3 order-4">
                        <div className="mx-auto" style={{ width: "calc(100% - 32px)" }}>
                            <h5 className="mb-4">Подробнее</h5>
                            <p className="text-secondary"><i className="bi bi-person-bounding-box me-3"></i>ИП "Okki.kz"</p>
                            <p className="text-secondary"><i className="bi bi-telephone me-3"></i>+7 (747) 777 44 55</p>
                            <p className="text-secondary"><i className="bi bi-whatsapp me-3"></i>WhatsApp</p>
                            <div className="d-flex gap-3 fs-3 mt-4 text-warning">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                <i className="bi bi-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-lg-5 mt-4 order-lg-4 order-3 bg-body-secondary rounded-4 position-relative">
                        <button disabled={!showLeftArrow} style={{ top: "60px", visibility: showLeftArrow ? "visible" : "hidden" }} onClick={() => horizontalScroll('left')} className="btn btn-dark px-2 py-1 fs-4 rounded-circle position-absolute"><i className="bi bi-arrow-left"></i></button>
                        <div ref={scrollableRef} className="hide-scrollbar overflow-x-auto d-flex gap-lg-4 gap-3 py-3 mx-auto scrollable" style={{ width: "calc(100% - 32px)" }}>
                            <div>
                                <Image data-bs-toggle="modal" data-bs-target="#exampleModal" className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                            <div>
                                <Image className="rounded-4" src="/placeholder.jpg" alt="" width="150" height="150" style={{ objectFit: "cover", cursor: "pointer" }} />
                            </div>
                        </div>
                        <button disabled={!showRightArrow} style={{ top: "60px", right: "16px", visibility: showRightArrow ? "visible" : "hidden" }} onClick={() => horizontalScroll('right')} className="btn btn-dark px-2 py-1 fs-4 rounded-circle position-absolute"><i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;