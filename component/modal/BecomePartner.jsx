import { useState,useRef } from "react";

const BecomePartner = () => {
    const phoneRef = useRef(null);
    const orgNameRef = useRef(null);
    const nameRef = useRef(null);
    const [phone, setPhone] = useState("+7 (");

    const formatPhone = (value) => {
      // Удаляем все символы, кроме цифр
      let numbers = value.replace(/\D/g, "");
  
      // Добавляем префикс +7
      if (!numbers.startsWith("7")) {
        numbers = "7" + numbers;
      }
  
      // Применяем формат: +7 (777) 777 77 77
      if (numbers.length <= 1) {
        return `+${numbers}`;
      } else if (numbers.length <= 4) {
        return `+7 (${numbers.slice(1)}`;
      } else if (numbers.length <= 7) {
        return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
      } else if (numbers.length <= 9) {
        return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)} ${numbers.slice(7)}`;
      } else {
        return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)} ${numbers.slice(7, 9)} ${numbers.slice(9, 11)}`;
      }
    };
    const handleChange = (e) => {
        const input = e.target.value;
        const formatted = formatPhone(input);
        setPhone(formatted);
      };
    const handleSubmit = () => {
      const phone = phoneRef.current.value;
      const org = orgNameRef.current.value;
      const name = nameRef.current.value;
      if(phone && org && name) {
        fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/partner/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ phone, org, name })
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            alert(data.message);  // Отображаем сообщение об успехе
          } else if (data.error) {
            alert(data.error);  // Отображаем ошибку
          }
        })
        .catch(error => console.error('Ошибка:', error));
      }
    }
    return (
        <div data-bs-theme="dark" className="modal fade" id="BecomePartnerModal" tabIndex="-1" aria-labelledby="BecomePartnerModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4 p-2">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5 text-body" id="BecomePartnerModalLabel">Стать партнером 🫱🏻‍🫲🏻</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="phoneInput" className="form-label text-body">Введите телефоннный номер</label>
                            <input 
                                ref={phoneRef}
                                type="tel" 
                                value={phone}
                                onChange={handleChange}
                                maxLength="18"
                                className="form-control bg-body-secondary py-2" 
                                id="phoneInput" 
                                placeholder="+7 (___) ___ __ __" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="organizationNameInput" className="form-label text-body">Введите телефоннный номер</label>
                            <input 
                                type="text"
                                ref={orgNameRef}
                                className="form-control bg-body-secondary py-2" 
                                id="organizationNameInput" 
                                placeholder="Например, ИП Okki.kz" />
                        </div>
                        <div>
                            <label htmlFor="fullNameInput" className="form-label text-body">Ваша ФИО</label>
                            <input 
                                type="text" 
                                ref={nameRef}
                                className="form-control bg-body-secondary py-2" 
                                id="fullNameInput" 
                                placeholder="Например, Алексеев Владимир Петрович" />
                        </div>
                    </div>
                    <div className="modal-footer border-0">
                        <button onClick={handleSubmit} type="button" className="btn w-100 btn-primary">Отправить заявку</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default BecomePartner;