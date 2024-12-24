'use client'; // Этот файл будет клиентским компонентом

import { useEffect } from 'react';

const Bootstrap = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return null; // Компонент ничего не рендерит
};

export default Bootstrap;
