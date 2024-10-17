import './Support.scss'
import support1 from "../../img/support1.png"
import support2 from "../../img/support2.png"
import support3 from "../../img/support3.png"
import support4 from "../../img/support4.png"
import support5 from "../../img/support5.png"
import support6 from "../../img/support6.png"
import { useTranslation } from 'react-i18next';

function Support() {
    const {t}=useTranslation();
  return (
    <div className="support">
        <div className="container">
            <h1>{t("ourSupport")}</h1>
            <ul>
                <li>
                    <img src={support1} alt="" />
                </li>
                <li>
                    <img src={support2} alt="" />
                </li>
                <li>
                    <img src={support3} alt="" />
                </li>
                <li>
                    <img src={support4} alt="" />
                </li>
                <li>
                    <img src={support5} alt="" />
                </li>
                <li>
                    <img src={support6} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Support