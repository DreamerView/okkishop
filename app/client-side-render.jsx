"use client"
import dynamic from "next/dynamic";
import HeaderPreloader from "./component/headerPreloader";
const AuthModal = dynamic(()=>import("./component/authModal"),{
    ssr:false
});
const ShowImageFull = dynamic(()=>import("./component/showImageFull"),{
    ssr:false
});
const InstallPromptPwa = dynamic(()=>import("@/pwa/installPrompt"),{
    ssr:false
});
const ModalPromptPwa = dynamic(()=>import("@/pwa/modalPrompt"),{
    ssr:false
});
const Basket = dynamic(()=>import("./component/basket"),{
    ssr:false
});
const Header = dynamic(() => import("./component/header"), {
    ssr: false,
    loading: () => <HeaderPreloader/>, // Ваш прелоадер
});

const ClientSideRender = () => {
    return(
        <>
            <Basket />
            <ModalPromptPwa />
            <ShowImageFull />
            <AuthModal />
            <Header />
            <InstallPromptPwa />
        </>
    )
}

export default ClientSideRender;