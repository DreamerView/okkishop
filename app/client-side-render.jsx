"use client"
import dynamic from "next/dynamic";
import HeaderPreloader from "./component/headerPreloader";
const InstallPromptPwa = dynamic(()=>import("@/pwa/installPrompt"),{
    ssr:false
});
const Header = dynamic(() => import("./component/header"), {
    ssr: false,
    loading: () => <HeaderPreloader/>, // Ваш прелоадер
});

const ClientSideRender = () => {
    return(
        <>
            <Header />
            <InstallPromptPwa />
        </>
    )
}

export default ClientSideRender;