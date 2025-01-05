const NavCRM = ({path}) => {
    return (
        <div className="w-100 overflow-y-auto p-3 my-4 bg-body-secondary rounded-4">
            <ul className="nav nav-pills d-flex flex-nowrap w-auto gap-4">
                <li className="nav-item">
                    <a className={`nav-link ${path==="/c"?'bg-dark text-white rounded-3':'text-secondary'}`} href="#"><i className="bi bi-person-badge-fill me-2"></i>Карточки</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${path==="/"?'bg-dark text-white rounded-3':'text-secondary'}`} href="#"><i className="bi bi-tags-fill me-2"></i>Категории</a>
                </li>
            </ul>
        </div>
    )
};

export default NavCRM;