const Category = () => {
    return(
        <section className="my-lg-5 my-4">
            <h3>Main Categories</h3>
            <div className="overflow-x-auto d-flex gap-3 w-100 py-3">
                <div className="bg-body-tertiary rounded-4 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary" style={{ width: '80px', flexShrink: 0 }}>
                    <div className="bg-body rounded-circle text-center d-flex align-items-center justify-content-center p-0 m-0 fs-4" style={{ width: '48px', height: '48px' }}>
                        🍔
                    </div>
                    <span className="mt-1" style={{ fontSize: '12px' }}> Burger</span>
                </div>
            </div>
        </section>
    )
};

export default Category;