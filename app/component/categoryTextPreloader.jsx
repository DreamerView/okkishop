const CategoryText = () => {
    return(
        <section className="my-lg-5 my-4">
            <div style={{width:300,height:40}} className="bg-body-secondary rounded-4 mb-1"></div>
            <div className="overflow-x-auto d-flex gap-3 w-100 py-3">
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span className="opacity-0">Loading</span>
                </div>
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span className="opacity-0">Loading</span>
                </div>
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span className="opacity-0">Loading</span>
                </div>
                <div className="bg-body-secondary rounded-4 px-3 py-2 d-flex flex-column align-items-center justify-content-center cursor-secondary">
                    <span className="opacity-0">Loading</span>
                </div>
            </div>
        </section>
    )
};

export default CategoryText;