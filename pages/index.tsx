import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../layout/Layout";
import Image from "next/image";
import Feature1 from '/public/images/feature-icon-01.svg'
import Feature2 from '/public/images/feature-icon-02.svg'
import Feature3 from '/public/images/feature-icon-03.svg'
import Feature4 from '/public/images/feature-icon-04.svg'
import Feature5 from '/public/images/feature-icon-05.svg'
import Feature6 from '/public/images/feature-icon-06.svg'
import VocesiaLogo from '/public/images/VOCESIA-LOGO.png'
import Idioma from '/public/images/idioma.png'
import Documents from '/public/images/documents.png'
import Descargar from '/public/images/descargar.png'


// @ts-ignore
import helloWorld from "../globals/helloWorld.Js";
import * as React from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";

const Home = () => {
    const { t } = useTranslation('common')
    const inputValue = t('buttonTest') ?? 'Try for free'
    return (
        <>
            <Layout>
                <main>

                    <section className="hero">
                    <div className="container">
                        <div className="hero-inner">
                            <div className="hero-copy" style={{position: "relative"}}>
                                <Image className="header-logo-image" src={VocesiaLogo} alt="Logo" />
                                <h1 className="hero-title mt-0"> {t('mainTitle')}</h1>
                                    <form action="../../form-result.php" method="post" target="_blank">
                                        <input type="submit" value={inputValue} />
                                        <input type="email" name="direccionemail" placeholder={t('emailTest')} />
                                    </form>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="features section">
                    <div className="container">
                        <div className="features-inner section-inner has-bottom-divider">
                            <h3 className="titulo mt-0">{t('bodyTitle')}</h3>
                            <h4 className="titulo mt-0">{t('bodySubtitle')}</h4>
                            <div className="features-wrap">
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <Image src={Documents} alt="Feature 01" />
                                        </div>
                                        <h4 className="feature-title mt-24">{t('copyPasteTTS')}</h4>
                
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <Image src={Idioma} alt="Feature 02" />
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <Image src={Descargar} alt="Feature 03" />
                                        </div>
                                        <h4 className="feature-title mt-24">{t('downloadFile')}</h4>
                                        
                                    </div>

                                </div>
                                <div className="hero-cta">
                                    <a className="button button-primary" href="#">
                                        {t('tryText')}
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section className="section-demo">
                    <section className="section-selector">
                        <section className="container-demo">
                            <p className="section-idioma">Idioma</p>
                            <select name="cars" id="cars">
                                <option value="volvo">Español</option>
                                <option value="saab">Inglés</option>
                                
                            </select>

                            <p className="section-texto">Escribe aquí tu texto</p>
                            <textarea id="w3review" name="texto" placeholder="Escribe aquí el texto...">
                            
                            </textarea>
                            <div className="hero-cta">
                                    <a className="button button-primary" href="#">
                                       ▶ {t('playText')}
                                    </a></div>
                        </section>
                        
                        

                    </section>


                </section>
                <section className="pricing section">
                    <div className="container-sm">
                        <div className="pricing-inner section-inner">
                            <div className="pricing-header text-center">
                                <h2 className="section-title mt-0 ">{t('unlimited')}</h2>
                                <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis
                                    nostrud.</p>
                            </div>
                            <div className="pricing-tables-wrap">
                                <div className="pricing-table">
                                    <div className="pricing-table-inner is-revealing">
                                        <div className="pricing-table-main">
                                            <div className="pricing-table-header pb-24">
                                                <div className="pricing-table-price text-center"><span
                                                    className="pricing-table-price-currency h2">$</span><span
                                                    className="pricing-table-price-amount h1">49</span><span
                                                    className="text-xs">{t('month')}</span></div>
                                            </div>
                                            <div className="pricing-table-features-title text-xs pt-24 pb-24 text-center">
                                                {t('getBenefit')}
                                            </div>
                                            <ul className="pricing-table-features list-reset text-xs">
                                                <li>
                                                    <span>Lorem ipsum dolor sit nisi</span>
                                                </li>
                                                <li>
                                                    <span>Lorem ipsum dolor sit nisi</span>
                                                </li>
                                                <li>
                                                    <span>Lorem ipsum dolor sit nisi</span>
                                                </li>
                                                <li>
                                                    <span>Lorem ipsum dolor sit nisi</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-table-cta mb-8">
                                            <a className="button button-primary button-shadow button-block"
                                                onClick={() => helloWorld()}>{t('preOrder')}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta section">
                    <div className="container">
                        <div className="cta-inner section-inner">
                            <h3 className="section-title mt-0">{t('preOrder')}</h3>
                            <div className="cta-cta">
                                <a className="button button-primary button-wide-mobile" href="#">{t('getInTouch')}</a>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </Layout>
        </>

    )
}

export const getStaticProps = async ({locale = 'en'}) => ({
    props: {
        ...await serverSideTranslations(locale,
            ['common']),
    },
})


export default Home;
