const NavCRM = ({path}) => {
    return (
        <div className="w-100 overflow-y-auto p-3 my-3 bg-body-secondary rounded-4">
            <ul className="nav nav-pills d-flex flex-nowrap w-auto gap-4">
                <li className="nav-item">
                    <a className={`nav-link ${path==="/"?'bg-dark text-white rounded-3':'text-secondary'}`} aria-current="page" href="#">Основное</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${path==="/card"?'bg-dark text-white rounded-3':'text-secondary'}`} href="#">Карточки</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${path==="/category"?'bg-dark text-white rounded-3':'text-secondary'}`} href="#">Категории</a>
                </li>
            </ul>
        </div>
    )
};

export default NavCRM;