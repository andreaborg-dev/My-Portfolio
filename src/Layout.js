import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export function Layout(){
    return(
        <>
        <Navbar/>
        <Footer/>
        <main>
            <Outlet/>
        </main>
        </>
    );
}