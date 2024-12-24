import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return(
        <section className="row my-lg-5 my-4">
            <h3 className="mb-3">Popular</h3>
            <Link href="/product" prefetch={false} className="btn text-start col-lg-3 col-sm-4 col-6 p-3 rounded-4 cursor-secondary">
                <div>
                    <Image width="300" height="200" style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        className="bg-body-tertiary w-100 rounded-4 card-orientation"
                        src="/placeholder.jpg"
                        alt=""
                    />
                </div>
                <h6 className="mt-3 fw-normal">Burgers Story</h6>
                <p style={{ fontSize: "14px", }} className="m-0 p-0 fw-light text-secondary mb-1">
                    Description
                </p>
                <b>$500</b>
            </Link>
        </section>
    )
}

export default Card;