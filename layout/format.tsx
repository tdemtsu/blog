import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"
import {  DetailedHTMLProps, HTMLAttributes } from "react";
import type { AppProps } from 'next/app'
// having troubles fixing type for children
type Child = {
    children: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement, AppProps>,
}

export default function format({children}:Child){
    return(
        <>
        <Head>
            <title>Sporting Blog</title>
        </Head>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </>
    )
}