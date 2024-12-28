"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const InstallPrompPwa = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Проверяем, установлено ли приложение
    const checkIfInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      setIsInstalled(isStandalone);
    };

    // Слушатель события "beforeinstallprompt"
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Отключаем автоматическое поведение
      setDeferredPrompt(e); // Сохраняем событие
    };

    checkIfInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null); // Очищаем сохранённое событие
      }
    }
  };

  if (isInstalled) {
    return(<></>); // Если приложение установлено, не отображаем кнопку
  }

  return (
    <><div className="d-none d-lg-flex position-fixed row mx-auto bg-dark text-white p-3 rounded-4 shadow" style={{ maxWidth: 300, width: "calc(100% - 32px)", bottom: "32px", zIndex: 3, right: '32px' }}>
      <div className="col-2 px-0">
        <Image src="/android/android-launchericon-48-48.png" className="rounded-3" alt="" width={40} height={40} />
      </div>
      <div className="col-5 d-flex flex-column justify-content-center">
        <h6 className="m-0">Okki.kz</h6>
        <p className="p-0 opacity-75 m-0 mt-1" style={{ fontSize: 11 }}>Shopping</p>
      </div>
      <div className="col-5 d-flex align-items-center justify-content-end">
        <button onClick={handleInstallClick} style={{ fontSize: 14 }} className="btn btn-primary">Установить</button>
      </div>
    </div></>
  );
};

export default InstallPrompPwa;