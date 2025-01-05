const NavCRMPreloader = () => {
    const buttons = ["Loading", "Loading", "Loading"];
    return (
        <div className="w-100 overflow-y-auto p-3 my-4 bg-body-secondary rounded-4">
            <ul className="nav nav-pills d-flex flex-nowrap w-auto gap-4">
                {buttons.map((buttonText, index) => (
                    <li key={index} className="nav-item">
                        <button className={`btn bg-body`}><span className="opacity-0">{buttonText}</span></button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default NavCRMPreloader;