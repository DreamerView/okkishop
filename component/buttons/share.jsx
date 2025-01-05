"use client";
import React, { useState, useEffect } from "react";

const ShareButton = () => {
  const [isShareSupported, setIsShareSupported] = useState(false);

  useEffect(() => {
    setIsShareSupported(!!navigator.share); // Проверяем поддержку Web Share API
  }, []);

  const handleShare = async () => {
    const title = document.title; // Берем title из <head>
    const description =
      document.querySelector('meta[name="description"]')?.content || ""; // Берем description из метатега

    try {
      await navigator.share({
        title,
        text: description,
        url: window.location.href, // Текущий URL
      });
      console.log("Контент успешно отправлен");
    } catch (error) {
      console.error("Ошибка при отправке контента:", error);
    }
  };

  // Кнопка не отображается, если Web Share API не поддерживается
  if (!isShareSupported) return null;

  return (
    <button
      onClick={handleShare}
      className="btn btn-outline-secondary py-2 border-0 d-flex align-items-center gap-2"
    >
      <i className="bi bi-share-fill"></i>
      <span className="d-none d-lg-block">Поделиться</span>
    </button>
  );
};

export default ShareButton;
