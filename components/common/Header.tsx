import React, {useState} from 'react';
import {useTranslation} from "next-i18next";
import Logo from "/public/images/logo.svg"
import {useRouter} from "next/router";
import Image from "next/image";
const Header = ({className = ''}) => {
    const {t} = useTranslation('header');
    // const {user, login, logout} = useAuth();
    const router = useRouter();
    const {locales} = useRouter();
    const [language, setLanguage] = useState(router.locale);
    const leftItems = [
        {name: t('logo'), link: '/', variant: 'h6', component: 'span'},
        {name: t('header'), link: '/', variant: 'subtitle1', component: 'span'},
        {name: t('aboutUs'), link: '/about', variant: 'subtitle1', component: 'span'},
    ];
    // const handleLang = (el)

    /*<Link
        href={router.pathname}
        locale={router.locale = locale}
    >
        {locale}
    </Link>*/
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <a href="#">
                                <Image
                                    className="header-logo-image"
                                    src={Logo}
                                    alt="Logo"
                                />
                               {/* <Image
                                    className="header-logo-image"
                                    src="/images/logo.svg"
                                    src={Logo}
                                    alt="Logo"

                                />*/}
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;
