import Image from "next/image";
const ShowImageFull = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-transparent border-0">
                    <div className="modal-header p-0 border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Image className="w-100 h-auto rounded-5" width="300" height="300" src="/placeholder.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShowImageFull;