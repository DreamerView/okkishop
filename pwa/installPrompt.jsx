"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const InstallPrompPwa = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Проверяем, установлено ли приложение
    const checkStandaloneMode = () => {
      const isInStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;
      setIsStandalone(isInStandalone);
    };

    // Слушаем событие beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Отключаем автоматическое поведение
      setDeferredPrompt(e); // Сохраняем событие
    };

    checkStandaloneMode();
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
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
      return (
        ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
          navigator.platform
        ) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      );
    }

    if (iOS() && !isStandalone) {
      const modalElement = document.getElementById("pwaPromptModal");
      if (modalElement) {
        const modalPrompt = new window.bootstrap.Modal(modalElement);
        modalPrompt.show();
      }
    } else if (deferredPrompt) {
      // Уведомляем пользователей Android
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        alert("Приложение установлено!");
        setDeferredPrompt(null); // Сбрасываем сохранённое событие
      } else {
        alert("Установка отменена.");
      }
    } else {
      alert("Установка приложения не поддерживается на вашем устройстве.");
    }
  };

  if (isStandalone) {
    return null; // Если приложение уже установлено, скрываем кнопку
  }

  return (
    <>
      <div className="row d-md-none bg-dark mx-1 p-3 rounded-4">
        <div className="col-2 px-0">
          <Image
            src="/android/android-launchericon-48-48.png"
            className="rounded-3"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="col-4 text-white ps-0">
          <h6 className="m-0">Okki.kz</h6>
          <p className="p-0 opacity-75 m-0 mt-1" style={{ fontSize: 11 }}>
            Shopping
          </p>
        </div>
        <div className="col-6  d-flex align-items-center justify-content-end px-0">
          <button
            onClick={handleInstall}
            style={{ fontSize: 14 }}
            className="btn btn-primary"
          >
            Установить
          </button>
        </div>
      </div>
      <div
        id="pwaPromptModal"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Установить PWA</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Добавьте приложение на экран вашего устройства.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallPrompPwa;
