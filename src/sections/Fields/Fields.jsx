import './Fields.scss'
import fieldsImg from "../../img/fields.png"
import arrow from "../../img/arrow-right.svg"
import { useTranslation } from 'react-i18next';

function Fields() {
    const {t}=useTranslation();

  return (
    <div className="fields">
        <div className="container">
            <h1>{t("ourFields")}</h1>
            <div>
                <ul>
                    <li>
                        <h4>{t("environment")}</h4>
                        <p className='mobile-text'>{t("enviromentText2")}</p>
                        <p className='desktop-text'>{t("enviromentText1")}</p>
                        <a href="#">
                            {t("more")}
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                    <li>
                        <h4>{t("social")}</h4>
                        <p className='mobile-text'>{t("socialText2")}</p>
                        <p className='desktop-text'>{t("socialText1")}</p>
                        <a href="#">
                            {t("more")}
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                    <li>
                        <h4>{t("charityEvent")}</h4>
                        <p className='mobile-text'>{t("charityEventText2")}</p>
                        <p className='desktop-text'>{t("charityEventText1")}</p>
                        <a href="#">
                            {t("more")}
                            <img src={arrow} alt="" />
                        </a>
                    </li>
                </ul>
                <img src={fieldsImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Fields