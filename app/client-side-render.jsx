"use client"
import dynamic from "next/dynamic";
import HeaderPreloader from "./component/headerPreloader";
const Header = dynamic(() => import("./component/header"), {
    ssr: false,
    loading: () => <HeaderPreloader/>, // Ваш прелоадер
});

const ClientSideRender = () => {
    return(
        <>
            <Header />
        </>
    )
}

export default ClientSideRender;