import styles from "../styles/Home.module.scss";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Head from 'next/head'
import Script from "next/script";
// @ts-ignore
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Vocesia</title>
            </Head>
            <div className='body-wrap'>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>


        </>



    )
}


export default Layout;

