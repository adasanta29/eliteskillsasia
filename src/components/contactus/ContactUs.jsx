import React from 'react';
import '../contactus/ContactUs.css';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const ContactUs = () => {
  const { t } = useTranslation();
  
  return (
    <div className='contact__us'>

      <div className='contact__grid'>

        <div className='contact__info'>
          <h3>{t("contact_info_h3")}</h3>
          <p>{t("contact_info_p1")}</p>
          <p>{t("contact_info_p2")}</p>
        </div>

        <div className='contact__address'>
          <h3>{t("contact_address_h3")}</h3>
          <p>{t("contact_address_p")}</p>
        </div>

      </div>

      <div className='contact__hours'>
        <h3>{t("contact_hours_h3")}</h3>
        <p>{t("contact_hours_p1")}</p>
        <p className='notification'>{t("contact_hours_notif1")}<br/>{t("contact_hours_notif2")}</p>
      </div>
      
    </div>
  )
}

export default ContactUs