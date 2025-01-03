import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [wasOffline, setWasOffline] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [wifiAnimation, setWifiAnimation] = useState("bi-wifi-1 text-danger")

    useEffect(() => {
        const handleOnline = () => {
            if (!isOnline) {
                setWasOffline(true);
            } // Отмечаем, что сеть восстановлена
            setIsOnline(true);
        };

        const handleOffline = () => {
            setAnimation(false);
            setWifiAnimation("bi-wifi-1 text-danger")
            setIsOnline(false);
            setWasOffline(false); // Сбрасываем, чтобы сработало снова при следующем восстановлении
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [isOnline]);

    // Скрываем уведомление "Сеть восстановлена" через 3 секунды
    useEffect(() => {
        let timer,anim,wifi1,wifi2;
        if (wasOffline && isOnline) {

            timer = setTimeout(() => setWasOffline(false), 1500); // Уведомление исчезает через 3 секунды
            anim = setTimeout(() => setAnimation(true), 1000); // Уведомление исчезает через 3 секунды
            wifi1 = setTimeout(() => setWifiAnimation("bi-wifi-2 text-warning"), 250);
            wifi2 = setTimeout(() => setWifiAnimation("bi-wifi"), 500);

            
        }
        return () => {
            clearTimeout(timer);
            clearTimeout(anim);
            clearTimeout(wifi1);
            clearTimeout(wifi2);
        }
    }, [wasOffline, isOnline]);
    if(wasOffline) return (
        <div data-bs-theme="dark" className={`${animation ? "remove_animation" : ""} position-relative vw-100 vh-100 position-fixed p-0 m-0 d-flex align-items-center justify-content-center`}
           style={{ zIndex: 9999, backgroundColor: "hsla(0, 0%, 0%, 0.4)" }}>
            <div
                className="rounded-5 bg-dark text-white text-center d-flex flex-column align-items-center justify-content-center gap-3 px-3"
                style={{
                    width: 250,
                    height: 250,
                }}
            >
                <i style={{ fontSize: 72, color:"#00FF66" }} className={`bi ${wifiAnimation} pulse`}></i>
                <span>Сеть восстановлена!</span>
            </div>
        </div>
    );
    if (isOnline === false) return (
        <div data-bs-theme="dark" className="block_animation position-relative vw-100 vh-100 position-fixed p-0 m-0 d-flex align-items-center justify-content-center" style={{ zIndex: 9999, backgroundColor: "hsla(0, 0%, 0%, 0.4)" }}>
            <div
                className="rounded-5 bg-dark text-white text-center d-flex flex-column align-items-center justify-content-center gap-3 px-3"
                style={{
                    width: 250,
                    height: 250,
                }}
            >
                <i style={{ fontSize: 72 }} className="bi bi-wifi-off pulse text-warning"></i>
                <span>Нет подключения к интернету</span>
            </div>
        </div>
    )
};

export default NetworkStatus;