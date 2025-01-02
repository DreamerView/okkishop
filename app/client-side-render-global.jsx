"use client"
import dynamic from "next/dynamic";
import HeaderPreloader from "./component/headerPreloader";
const AuthModal = dynamic(()=>import("./component/authModal"),{
    ssr:false
});
const ShowImageFull = dynamic(()=>import("./component/showImageFull"),{
    ssr:false
});
const ModalPromptPwa = dynamic(()=>import("@/pwa/modalPrompt"),{
    ssr:false
});
const Basket = dynamic(()=>import("./component/basket"),{
    ssr:false
});

const NetworkStatus = dynamic(() => import("./component/networkStatus"), {
    ssr: false,
});

const ClientSideRenderGlobal = () => {
    return(
        <>
            <NetworkStatus />
            <Basket />
            <ModalPromptPwa />
            <ShowImageFull />
            <AuthModal />
        </>
    )
}

export default ClientSideRenderGlobal;