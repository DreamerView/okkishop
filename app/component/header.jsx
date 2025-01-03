import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { signOut } from 'next-auth/react';
import Link from "next/link";

const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [sessionStatus, setSessionStatus] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await fetch("/api/auth/session");
                if (res.ok) {
                    const data = await res.json();
                    const check = Object.keys(data).length === 0 ? false : data;
                    setSessionStatus(check);
                } else {
                    setSessionStatus(null);
                }
            } catch (error) {
                console.error("Error fetching session:", error);
                setSessionStatus(null);
            }
        };

        checkSession();
    }, [pathname, searchParams]);

    return (
        <header className="row py-md-2 py-3 my-2 position-sticky top-0 header-transparent" style={{ zIndex: 1,backdropFilter: "saturate(180%) blur(5px)" }}>
            <div className="col-lg-2 col-sm-3 col-6 d-flex gap-4 order-1">
                <button className="btn text-secondary border-0 fs-4" onClick={() => window.history.back()}>
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <Link href="/" className="btn text-secondary border-0 fs-4">
                    <i className="bi bi-list"></i>
                </Link>
            </div>
            <div className="col-lg-8 col-sm-6 col-12 order-sm-2 order-3 mt-sm-0 mt-2">
                <div className="dropdown">
                    <div className="input-group bg-body-secondary rounded-5" data-bs-toggle="dropdown" 
                            aria-expanded="false">
                        <span className="input-group-text bg-transparent border-0" id="basic-addon1">
                            <i className="bi bi-search fs-5"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control bg-transparent rounded-4 border-0"
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="basic-addon1"
                            style={{ boxShadow: "none" }}
                        />
                    </div>
                    <div className="dropdown-menu w-100 mt-2 rounded-4">
                        <div className="dropdown-items">
                            <a className="dropdown-item" href="#">Элемент 1</a>
                            <a className="dropdown-item" href="#">Элемент 2</a>
                            <a className="dropdown-item" href="#">Элемент 3</a>
                            <a className="dropdown-item" href="#">Элемент 4</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-sm-3 col-6 d-flex gap-4 justify-content-end order-sm-3 order-2">
                {sessionStatus === null ? (
                    <button className="btn">
                        <div style={{width:32,height:32}} className="spinner-grow text-secondary opacity-25" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                ) : sessionStatus === false ? (
                    <button className="btn text-secondary border-0 fs-5" data-bs-toggle="modal" data-bs-target="#authModal">
                        <i className="bi bi-key"></i>
                    </button>
                ) : (
                    <div className="dropdown">
                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image priority src={sessionStatus['user']['image']} alt="User Image" width={32} height={32} className="rounded-circle" style={{ objectFit: "cover", aspectRatio: "1/1" }} />
                        </button>
                        <ul className="dropdown-menu mt-2">
                            <li><a className="dropdown-item" style={{ fontSize: 14 }} href="#"><i className="bi bi-heart me-2"></i>Избранное</a></li>
                            <li><a className="dropdown-item" style={{ fontSize: 14 }} href="#"><i className="bi bi-journal-text me-2"></i>Мои заказы</a></li>
                            <li><button onClick={() => signOut()} style={{ fontSize: 14 }} className="dropdown-item"><i className="bi bi-box-arrow-right me-2"></i>Выйти</button></li>
                        </ul>
                    </div>
                )}
                <button className="btn text-secondary border-0 fs-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#basketForm" aria-controls="basketForm">
                    <i className="bi bi-basket"></i>
                </button>
            </div>
        </header>
    )
};

export default Header;
