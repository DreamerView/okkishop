"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as bootstrap from 'bootstrap';

const InstallPrompPwa = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Проверяем, установлено ли приложение
    const checkStandaloneMode = () => {
      const isInStandalone =
        window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      setIsStandalone(isInStandalone);
    };

    // Слушаем событие beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Отключаем автоматическое поведение
      console.log(e);
      setDeferredPrompt(e); // Сохраняем событие
    };

    checkStandaloneMode();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    const handleAppInstalled = () => {
      console.log("PWA успешно установлено");
    };
  
    window.addEventListener("appinstalled", handleAppInstalled);
  
    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    function iOS() {
      return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    if (iOS() && !isStandalone) {
      // Уведомляем пользователей iOS
      const modalPrompt = new bootstrap.Modal(document.getElementById('pwaPromptModal'))
      modalPrompt.show()
    } else if (deferredPrompt) {
      // Уведомляем пользователей Android
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        alert('Приложение установлено!');
        setDeferredPrompt(null); // Сбрасываем сохранённое событие
      } else {
        alert('Установка отменена.');
      }
    } else {
      alert('Установка приложения не поддерживается на вашем устройстве.');
    }
  };

  // useEffect(()=>{
  //     const modalPrompt = new bootstrap.Modal(document.getElementById('pwaPromptModal'))
  //     modalPrompt.show()
  // },[])

  if (isStandalone) {
    return null; // Если приложение уже установлено, скрываем кнопку
  }

  return (
    <>
    <div className="row d-md-none bg-dark mx-1 p-3 rounded-4">
      <div className="col-2 px-0">
        <Image src="/android/android-launchericon-48-48.png" className="rounded-3" alt="" width={40} height={40} />
      </div>
      <div className="col-4 text-white ps-0">
        <h6 className="m-0">Okki.kz</h6>
        <p className="p-0 opacity-75 m-0 mt-1" style={{ fontSize: 11 }}>Shopping</p>
      </div>
      <div className="col-6  d-flex align-items-center justify-content-end px-0">
        <button onClick={handleInstall} style={{ fontSize: 14 }} className="btn btn-primary">Установить</button>
      </div>
    </div>
    <div className="d-none d-md-flex position-fixed row mx-auto bg-dark text-white p-3 rounded-4 shadow" style={{ maxWidth: 300, width: "calc(100% - 32px)", bottom: "32px", zIndex: 3, right: '32px' }}>
      <div className="col-2 px-0">
        <Image src="/android/android-launchericon-48-48.png" className="rounded-3" alt="" width={40} height={40} />
      </div>
      <div className="col-5 d-flex flex-column justify-content-center">
        <h6 className="m-0">Okki.kz</h6>
        <p className="p-0 opacity-75 m-0 mt-1" style={{ fontSize: 11 }}>Shopping</p>
      </div>
      <div className="col-5 d-flex align-items-center justify-content-end">
        <button onClick={handleInstall} style={{ fontSize: 14 }} className="btn btn-primary">Установить</button>
      </div>
    </div></>
  );
};

export default InstallPrompPwa;