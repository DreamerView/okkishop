"use client"
import dynamic from "next/dynamic";
const BecomePartner = dynamic(()=>import("@/component/modal/BecomePartner"),{
    ssr:false
});
const AuthModal = dynamic(()=>import("@/component/modal/authModal"),{
    ssr:false
});
const ShowImageFull = dynamic(()=>import("@/component/modal/showImageFull"),{
    ssr:false
});
const ModalPromptPwa = dynamic(()=>import("@/pwa/modalPrompt"),{
    ssr:false
});
const Basket = dynamic(()=>import("@/component/modal/basket"),{
    ssr:false
});

const NetworkStatus = dynamic(() => import("@/component/modal/networkStatus"), {
    ssr: false,
});

const CardEdit = dynamic(() => import("@/component/modal/cardEdit"), {
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
            <BecomePartner />
            <CardEdit />
        </>
    )
}

export default ClientSideRenderGlobal;