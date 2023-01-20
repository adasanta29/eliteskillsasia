import React from 'react';
import '../footer/Footer.css';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Footer = () => {
    const { t } = useTranslation();

  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__row'>

                {/* Nav */}
                <div className='footer__column'>
                    <h4>{t("footerh4")}</h4>
                    <ul className='nav__list'> 
                        <li><a href="/">{t("navbar_home")}</a></li>
                        <li><a href="/machines">{t("navbar_machines")}</a></li>
                        <li><a href="/coaches">{t("navbar_about")}</a></li>
                        <li><a href="/data">{t("navbar_data")}</a></li>
                        <li><a href="/fhiit">F-HIIT</a></li>
                        <li><a href="/contact">{t("navbar_contact")}</a></li>
                        <li><a href="/book">{t("navbar_book")}</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className='footer__column'>
                    <ul className='contact__list'>
                        <li>+852 5662 4147</li>
                        <li>{t("contact_address_p")}</li>
                        <li>info@esahongkong.com</li>
                    </ul>
                </div>

            </div>
            <hr/>
            <div className='row'>
                <p className='column__small'>
                    &copy; {t("footer_copyright_info")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer