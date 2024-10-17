import './Achievments.scss'
import achievmentsImg from "../../img/achievments.png"
import { useTranslation } from 'react-i18next';

function Achievments() {
    const {t}=useTranslation();
  return (
    <div className="achievments">
        <div className="container">
            <h1>{t("ourEchievments")}</h1>
            <div>
                <ul>
                    <li>
                        <h3>5072</h3>
                        <p>{t("reading")}</p>
                    </li>
                    <li>
                        <h3>1265</h3>
                        <p>{t("pedagogue")}</p>
                    </li>
                    <li>
                        <h3>5000</h3>
                        <p>{t("cardNeeds")}</p>
                    </li>
                    <li>
                        <h3>9600</h3>
                        <p>{t("numeric")}</p>
                    </li>
                </ul>
                <img src={achievmentsImg} alt="" />
            </div>
        </div>  
    </div>
  )
}

export default Achievments