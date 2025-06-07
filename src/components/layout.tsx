import type { ReactNode } from "react";

import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Header title="Welcome" name="Chaguala" />
        <main className="flex-1 flex flex-col justify-start">
            <div className="flex-1 p-4 m-0">{children}</div>
            
        </main>
        <Footer date={new Date()} name="DevGabito" />   
        </div>
    )
}