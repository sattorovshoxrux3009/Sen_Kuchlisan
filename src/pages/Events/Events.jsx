import './Events.scss'
import linkImg from "../../img/projects-link.svg"
import events1 from "../../img/events1.png"
import events2 from "../../img/events2.png"
import events3 from "../../img/events3.png"
import { useTranslation } from 'react-i18next';

function Events() {
    const {t}=useTranslation();
  return (
    <div className="events">
      <div className="container">
        <h1>{t("events")}</h1>
        <ul>
            <li>
                <img src={events1} alt="" />
                <a href="#">
                    <h4>{t("event1")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event1Text")}</p>
            </li>
            <li>
                <img src={events2} alt="" />
                <a href="#">
                    <h4>{t("event2")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event2Text")}</p>
            </li>
            <li>
                <img src={events3} alt="" />
                <a href="#">
                    <h4>{t("event3")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event3Text")}</p>
            </li>
            <li>
                <img src={events1} alt="" />
                <a href="#">
                    <h4>{t("event1")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event1Text")}</p>
            </li>
            <li>
                <img src={events2} alt="" />
                <a href="#">
                    <h4>{t("event2")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event2Text")}</p>
            </li>
            <li>
                <img src={events3} alt="" />
                <a href="#">
                    <h4>{t("event3")}</h4>
                    <img src={linkImg} alt="" />
                </a>
                <p>{t("event3Text")}</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Events