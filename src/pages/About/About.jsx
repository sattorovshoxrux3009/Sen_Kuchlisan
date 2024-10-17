import './About.scss'
import about from "../../img/about.png"
import aboutHand from "../../img/about11.svg"
import about1 from "../../img/about12.svg"
import about2 from "../../img/about22.svg"
import about3 from "../../img/about32.svg"
import aboutMobile from "../../img/about-mobile.png"
import { useTranslation } from 'react-i18next';

function About() {
  const {t}=useTranslation();
  return (
    <div className="about">
      <div className="container">
        <h1>{t("aboutUs")}</h1>
        <p>{t("purpose")}</p>
        <img src={about} alt=""  className='imgage'/>
        <img src={aboutMobile} alt="" className="mobile" />
        <ul>
          <li>
            <div>
              <img src={about1} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>{t("environment")}</h3>
          </li>
          <li>
          <div>
              <img src={about2} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>{t("social")}</h3>
          </li>
          <li>
            <div>
              <img src={about3} alt="" className="topImg" />
              <img src={aboutHand} alt="" className="bottomImg" />
            </div>
            <h3>{t("charityEvent")}</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About