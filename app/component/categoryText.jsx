const CategoryText = () => {
    return(
        <section className="my-lg-5 my-4">
            <h3>Main Categories</h3>
            <div className="overflow-x-auto d-flex gap-3 w-100 py-3">
                <div className="bg-dark text-white rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span>Burger 🍔</span>
                </div>
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span>Meat 🍗</span>
                </div>
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span>Door 🚪</span>
                </div>
            </div>
        </section>
    )
};

export default CategoryText;