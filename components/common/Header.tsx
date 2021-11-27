import React, {useState} from 'react';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import Link from "next/link";
const Header = ({className = ''}) => {
    const {t} = useTranslation('common');
    const router = useRouter();
    const {locales} = useRouter();
    const [language, setLanguage] = useState(router.locale);

    const options = locales?.map( locale => {
        return (

            <Link
                href={router.pathname}
                locale={router.locale = locale}
                key={locale}
            >
                <span className={router.locale === language ? 'activeLang' : 'lang'}  style={{marginRight: '1em', cursor: 'pointer' }}>{locale}</span>
            </Link>
        )


    })
    return (
        <header className="site-header relative">

            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                    </div>
                </div>
                <div style={{position: "absolute", zIndex: 100, top: 0, right: '2em', color: "white",  textAlign: "center"}}>
                    <h6>{t('language')}</h6>
                    <div style={{marginTop: '0.5em'}}>
                        {options}
                    </ div>
                </div>
            </div>
        </header>
    );
}


export default Header;
