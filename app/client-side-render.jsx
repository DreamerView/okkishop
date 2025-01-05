"use client"
import dynamic from "next/dynamic";
import HeaderPreloader from "@/component/global/headerPreloader";
const InstallPromptPwa = dynamic(()=>import("@/pwa/installPrompt"),{
    ssr:false
});
const Header = dynamic(() => import("@/component/global/header"), {
    ssr: false,
    loading: () => <HeaderPreloader/>, // Прелоадер
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