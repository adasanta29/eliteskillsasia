import React from 'react'
import '../machineinput/Machineinput.css'
import Card from '../../components/card/Card';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n.js';


const Machineinput = () => {

  const { t } = useTranslation();

  const properties = [
    {
        id: 1,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/WhatsApp%20Image%202022-08-22%20at%206.38.05%20PM%20(1).jpeg/:/cr=t:20.36%25,l:2.83%25,w:94.34%25,h:62.89%25/rs=w:1200,h:600,cg:true,m",
        title: "ICON (6m, 16 Panels)",
        description: <>{t("machine1description")}</>,
        info: <>{t("machine1info")}</>,
    },

    {
        id: 2,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/WhatsApp%20Image%202022-08-22%20at%206.38.06%20PM.jpeg/:/cr=t:2.83%25,l:2.95%25,w:94.1%25,h:94.34%25/rs=w:1200,h:902,cg:true,m",
        title: "ICON Fast Feet (6 panels)",
        description: <>{t("machine2description")}</>,
        info: <>{t("machine2info")}</>
    },

    {
        id: 3,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/IMG_20220630_143147.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1200,h:600,cg:true",
        title: "ICON Q (4 Panels)",
        description: <>{t("machine3description")}</>,
        info: <>{t("machine3info")}</>
    },

    {
        id: 4,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/WhatsApp%20Image%202022-08-22%20at%206.38.06%20PM%20(3).jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1200,h:600,cg:true",
        title: "Precision Wall (2x3/3x3)",
        description: <>{t("machine4description")}</>,
        info: <>{t("machine4info")}</>
    },

    {
        id: 5,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/IMG_20220630_142843.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1200,h:600,cg:true",
        title: "Wireless Panels",
        description: <>{t("machine5description")}</>,
        info: <>{t("machine5info")}</>
    },

    {
        id: 6,
        image: "https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/IMG_20220630_142931.jpg/:/cr=t:17.25%25,l:0%25,w:100%25,h:66.67%25/rs=w:1200,h:600,cg:true",
        title: "Wireless Gate Module",
        description: <>{t("machine6description")}</>,
        info: <>{t("machine6info")}</>
    },
]

  return (
    <div className='properties'>
        {properties.map((item) => (
            <Card data={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Machineinput;