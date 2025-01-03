"use client";
import React, { useState, useEffect } from "react";

const ShareButton = () => {
  const [isShareSupported, setIsShareSupported] = useState(false);

  useEffect(() => {
    setIsShareSupported(!!navigator.share); // Проверяем поддержку Web Share API
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Поделись этим!",
        text: "Посмотри на это крутое приложение!",
        url: window.location.href, // текущий URL
      });
      console.log("Контент успешно отправлен");
    } catch (error) {
      console.error("Ошибка при отправке контента:", error);
    }
  };

  // Кнопка не отображается, если Web Share API не поддерживается
  if (!isShareSupported) return null;

  return (
    <button onClick={handleShare} className="btn btn-outline-secondary py-2 border-0 d-flex align-items-center gap-2">
        <i className="bi bi-share-fill"></i>
        Поделится
    </button>
  );
};

export default ShareButton;
