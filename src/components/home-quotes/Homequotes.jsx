import React from 'react';
import '../home-quotes/Homequotes.css';
import Redknapp from '../../assets/redknapp.jpg';
import Lallana from '../../assets/lallana.jpg';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Homequotes = () => {

    const { t } = useTranslation();

  return (
    <div className='homequotes'>

        <div className='homequotes__container'>

            <div className='homequotes__one'>
                <div className='quote__container'>
                    <p>"{t("quotesharryp")}”</p>
                    <h3>{t("quotesharryh3")}</h3>
                </div>

                <img src={Redknapp} alt="" className='quote__image'/>
            </div>

            <div className='homequotes__two'>
                <img src={Lallana} alt="" className='quote__image'/>

                <div className='quote__container'>
                    <p>“{t("quoteslallanap")}”</p>
                    <h3>Adam Lallana, Brighton & Hove Albion {t("quoteslallanah3")}</h3>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Homequotes