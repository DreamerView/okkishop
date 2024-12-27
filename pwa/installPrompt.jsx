"use client";
import { useEffect,useState } from "react";
import Image from "next/image";

const InstallPrompPwa = () => {
    const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Предотвращаем автоматическое отображение баннера
      event.preventDefault();
      // Сохраняем событие
      window.deferredPrompt = event;
      // Обновляем состояние, чтобы показать кнопку установки
      setCanInstall(true);
    };

    // Подписываемся на событие
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      // Очищаем обработчик
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (window.deferredPrompt) {
      const promptEvent = window.deferredPrompt;
      // Показываем диалог установки
      promptEvent.prompt();

      // Обрабатываем результат
      const choiceResult = await promptEvent.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the installation");
      } else {
        console.log("User dismissed the installation");
      }

      // Сбрасываем сохраненный prompt
      window.deferredPrompt = null;
      setCanInstall(false);
    }
  };

    return(
        canInstall && (<><div className="d-none d-lg-flex position-fixed row mx-auto bg-dark text-white p-3 rounded-4 shadow" style={{maxWidth:400,width:"calc(100% - 32px)",bottom:"32px", zIndex:3, right:'32px'}}>
            <div className="col-2">
                <Image src="/android/android-launchericon-48-48.png" className="rounded-3" alt="" width={48} height={48}/>
            </div>
            <div className="col-5">
                <h5 className="m-0">Okki.kz</h5>
                <p className="p-0 opacity-75 m-0 mt-1" style={{fontSize:13}}>Shopping</p>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-end">
                <button onClick={handleInstall} className="btn btn-primary">Установить</button>
            </div>
        </div></>)
    );
};

export default InstallPrompPwa;