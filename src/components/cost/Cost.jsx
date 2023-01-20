import React from 'react';
import '../cost/Cost.css';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Cost = () => {

    const { t } = useTranslation();

  return (
    <div className='cost'>
        <div className='cost__container'>
            <div className='cost__grid'>

                <div className='cost__class'>
                    <h3>{t("class_private_h3")}</h3>
                    <p>{t("class_inclusive")}</p>
                    <div className='class__details-one class__container'>
                        <h4 className='type'>{t("class_private_one_type")}</h4>
                        <h4 className='price'>1000 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>{t("class_private_two_type")}</h4>
                        <h4>4500 HKD</h4>
                    </div>
                    <p>{t("class_private_note")}</p>
                </div>

                <div className='cost__class'>
                    <h3>{t("class_semiprivate_h3")}</h3>
                    <p>{t("class_inclusive")}</p>
                    <div className='class__details-one class__container'>
                        <h4>{t("class_private_one_type")}</h4>
                        <h4>500 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>{t("class_semiprivate_two_type")}</h4>
                        <h4>4500 HKD</h4>
                    </div>
                    <p>{t("class_semiprivate_note1")} <br/> {t("class_semiprivate_note2")}</p>
                </div>

                <div className='cost__class'>
                    <h3>F-HIIT ({t("class_fhiit_h3")})</h3>
                    <p>{t("class_fhiit_info")}</p>
                    <div className='class__details-one class__container'>
                        <h4>{t("class_private_one_type")}</h4>
                        <h4>300 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>{t("class_private_two_type")}</h4>
                        <h4>1125 HKD</h4>
                    </div>
                    <p>{t("class_fhiit_note")} <a href="/fhiit">www.esahongkong.com/fhiit</a></p>
                </div>

                <div className='cost__class'>
                    <h3>{t("class_rental_h3")}</h3>
                    <p>{t("class_noninclusive")}</p>
                    <div className='class__details-one class__container'>
                        <h4>1 {t("class_rental_type")}</h4>
                        <h4>1750 HKD/hour</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>2 {t("class_rental_type")}</h4>
                        <h4>1600 HKD/hour</h4>
                    </div>
                    <div className='class__container'>
                        <h4>3+ {t("class_rental_type")}</h4>
                        <h4>1500 HKD/hour</h4>
                    </div>
                    <p>{t("class_rental_note")}</p>
                </div>

                <div className='cost__class'>
                    <h3>{t("class_sup_h3")}</h3>
                    <p>{t("class_sup_subheading")}</p>
                    <div className='class__details-one class__container'>
                        <h4>{t("class_sup_type1")}</h4>
                        <h4>500 HKD/hour</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>{t("class_sup_type2")}</h4>
                        <h4>250 HKD/hour</h4>
                    </div>
                    <p>{t("class_sup_note")}</p>
                </div>

                <div className='cost__class'>
                    <h3>{t("class_event_h3")}</h3>
                    <div className='class__details-one class__container'>
                        <h4>{t("class_event_contact")}</h4>
                        <h4>{t("class_event_variedbyrequest")}</h4>
                    </div>
                </div>

            </div>
        </div>

                <div className='cost__cta-container'>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/book">{t("cost_cta")}</a>
                    </motion.button>
                </div>
    </div>
  )
}

export default Cost