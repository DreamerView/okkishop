const Partner = () => {
    return(
        <div className="d-flex flex-column  align-items-center mx-auto py-5 my-5 border rounded-5">
            <h1 className="mb-5">Стать партнером 🫱🏻‍🫲🏻</h1>
            <div className="mb-4" style={{maxWidth:500,width:"100%"}}>
                <label className="mb-3" htmlFor="partnerPhone">Введите телефоннный номер</label>
                <input id="partnerPhone" className="form-control bg-body-secondary rounded-4 px-4 py-2" placeholder="Введите телефоннный номер" type="tel" />
            </div>
            <div className="mb-4" style={{maxWidth:500,width:"100%"}}>
                <label className="mb-3" htmlFor="partnerPhone">Введите телефоннный номер</label>
                <input id="partnerPhone" className="form-control bg-body-secondary rounded-4 px-4 py-2" placeholder="Введите телефоннный номер" type="tel" />
            </div>
            <button className="btn btn-primary py-2 rounded-4" style={{maxWidth:500,width:"100%"}}>
                Подать заявку
            </button>
        </div>
    )
};

export default Partner;